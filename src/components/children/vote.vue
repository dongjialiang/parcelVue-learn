<template>
		<div id='vote'>
			<div class="alertContainer">
				<b-alert :variant="variant" dismissible :show="dismissCountDown" @dismissed="dismissCountdown=0" @dismiss-count-down="countDownChanged">
					{{info}} 这条消息将在 {{dismissCountDown}} 秒后消失...
				</b-alert>
			</div>
			<ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
			<ul>
				<li v-for='(user,key) of classmates' :key='user.id'><font>{{user.name}}-支持率：{{user.approval_rate}}</font><button class="form-control" @click='add(key,user)'>支持</button></li>
				<h2 v-show="classmates==''">投票系统已关闭或你的设备不支持</h2>
			</ul>
		</div>
</template>
<script>
export default {
	data () {
		return {
			id: 0,
			dismissSecs: 5,
			dismissCountDown: 0,
			classmates: [],
			info: '',
			variant: ''
		}
	},
	methods: {
		countDownChanged (dismissCountDown) {
			this.dismissCountDown = dismissCountDown
		},
		add (index,item) {
			this.id=index
			this.axios.patch('/add', { id: this.id, account: this.$cookies.get('isLogin') }).then(res=>{
				if (res.data == '与服务器断开连接' || res.data == '您已投票了，请勿重复投票' || res.data == '提交成功') {
					this.dismissCountDown = this.dismissSecs,
					this.info = res.data
					if(res.data != '提交成功') this.variant='danger'
					else {
						this.variant = 'success'
						this.classmates[index].approval_rate++
					}
				}
			},res=>{ })
		}
	},
	mounted() {
		this.axios.get('/user',{
			emulateJSON:true
		}).then(res=>{
			this.classmates=res.data,
			this.chartData = {
				columns: ['id', 'name', 'approval_rate'],
				rows: this.classmates
			}
			this.chartSettings = {
				dimension: 'name',
				metrics: 'approval_rate'
			}
		},res=>{})
	}
}
/* fetch('https://quiet-mesa-99852.herokuapp.com/add',{
	method:'post',
	mode: 'cors',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'
	}, 
	body:JSON.stringify({ 'id':this.id, 'account': this.$cookies.get('isLogin') })
})
.then(res=>res.json())
.then(json=>{
	if (json == '与服务器断开连接' || json == '您已投票了，请勿重复投票' || json == '提交成功') {
		this.dismissCountDown = this.dismissSecs,
		this.info = json
		if(json != '提交成功') this.variant='danger'
		else {
			this.variant = 'success'
			this.classmates[index].approval_rate++
		}
	}
}) */
/* fetch('https://quiet-mesa-99852.herokuapp.com/user',{
	method:'get',
	mode: 'cors',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'
	}
})
.then(res=>res.json())
.then(json=>{
	this.classmates=json
}) */
</script>
