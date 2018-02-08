<template>
		<div id='vote'>
			<div class="alertContainer">
				<b-alert :variant="variant" dismissible :show="dismissCountDown" @dismissed="dismissCountdown=0" @dismiss-count-down="countDownChanged">
					{{info}} 这条消息将在 {{dismissCountDown}} 秒后消失...
				</b-alert>
			</div>
			<ul>
				<li v-for='(user,key) in classmates' :key='user.id'><span>{{user.name}}-支持率：{{user.approval_rate}}</span><b-button v-touch:tap="add(key)" @click='add(key)'>支持</b-button></li>
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
		add (index) {
			this.id=index
			this.axios.post('/add', { id: this.id, account: this.$cookies.get('isLogin') }).then(res=>{
				if (res.data=='6crtutcdanhkjta') {
					this.dismissCountDown = this.dismissSecs,
					this.info='与服务器断开连接'
					this.variant='danger'
				}
				else if (res.data=='cjh----7tz@!&gjh') {
					this.dismissCountDown = this.dismissSecs,
					this.info='您已投票了，请勿重复投票'
					this.variant='danger'
				}
				else {
					this.dismissCountDown = this.dismissSecs,
					this.info='提交成功'
					this.variant='success'
					this.classmates[index].approval_rate++
				}
			},res=>{
				
			})
			/* fetch('http://jw3.ngrok.xiaomiqiu.cn/add',{
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
				if (json=='6crtutcdanhkjta') {
					this.dismissCountDown = this.dismissSecs,
					this.info='与服务器断开连接'
					this.variant='danger'
				}
				else if (json=='cjh----7tz@!&gjh') {
					this.dismissCountDown = this.dismissSecs,
					this.info='您已投票了，请勿重复投票'
					this.variant='danger'
				}
				else {
					this.dismissCountDown = this.dismissSecs,
					this.info='提交成功'
					this.variant='success'
					this.classmates[index].approval_rate++
				}
			}) */
		}
	},
	mounted() {
		this.axios.get('/user',{
			emulateJSON:true
		}).then(res=>{
			this.classmates=res.data
		},res=>{})
		/* fetch('http://jw3.ngrok.xiaomiqiu.cn/user',{
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
	}
}
</script>
