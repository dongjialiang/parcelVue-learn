<template>
		<div id='vote'>
			<b-alert variant="success" dismissible :show="dismissCountDown" @dismissed="dismissCountdown=0" @dismiss-count-down="countDownChanged">
				提交成功 这条消息将在 {{dismissCountDown}} 秒后消失...
			</b-alert>
			<ul>
				<li v-for='(user,key) in classmates' :key='user.id'><span>{{user.name}}-支持率：{{user.approval_rate}}</span><b-button @click='add(key)'>支持</b-button></li>
			</ul>
		</div>
</template>
<script>
import axios from 'axios'
import ip from '../../js/ipconfig'
//axios.defaults.baseURL=ip||'http://127.0.0.1:801';
export default {
	data () {
		return {
			id: 0,
			dismissSecs: 5,
			dismissCountDown: 0,
			classmates: []
		}
	},
	methods: {
		countDownChanged (dismissCountDown) {
			this.dismissCountDown = dismissCountDown
		},
		add (index) {
			this.id=index
			axios.post('/add', { id: this.id }).then(res=>{
				this.dismissCountDown = this.dismissSecs,
				this.classmates[index].approval_rate++
			},res=>{
				fetch('http://127.0.0.1:801/add',{
					method:'post',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					}, 
					body:JSON.stringify({'id':this.id})
				})
				.then(res=>res.json())
				.then(json=>{
					this.dismissCountDown = this.dismissSecs
				})
			})
		}
	},
	mounted() {
		axios.get('/user',{
			emulateJSON:true
		}).then(res=>{
			this.classmates=res.data
		},res=>{
			fetch('http://127.0.0.1:801/user')
			.then(res=>res.json())
			.then(json=>{
				this.classmates=json
			})
		})
	}
}
</script>
