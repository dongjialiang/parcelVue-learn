<template>
    <div id="signin">
        <div class="alertContainer">
            <b-alert :variant="variant" dismissible :show="dismissCountDown" @dismissed="dismissCountdown=0" @dismiss-count-down="countDownChanged">
                {{info}} 这条消息将在 {{dismissCountDown}} 秒后消失...
            </b-alert>
        </div>
        <b-form @keyup="keyup">
            <b-form-input type="text" v-model="name" :state="nameState" placeholder="输入用户名"></b-form-input>
            <span>{{name?nametip[1]:nametip[0]}}</span>
            <b-form-input type="password" v-model="pwd" :state="pwdState" placeholder="输入密码"></b-form-input>
            <span>{{pwd.length>=6?/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(pwd)?pwdtip[1]:pwdtip[2]:pwdtip[0]}}</span>
        </b-form>
        <p>
            <b-btn :disabled="disabled" @click="signin">登录</b-btn>
            <router-link to='/signup'>注册</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
axios.defaults.baseURL='http://jw3.ngrok.xiaomiqiu.cn';
export default {
    data() {
        return {
            name:'',
            pwd:'',
            nametip:['用户名不能为空','ok'],
            pwdtip:['密码不能少于6位','ok','密码格式不对'],
			dismissSecs: 5,
            dismissCountDown: 0,
            variant:'',
            info:''
        }
    },
    methods: {
        countDownChanged (dismissCountDown) {
			this.dismissCountDown = dismissCountDown
        },
        keyup (event) {
            if(event.keyCode==38||event.keyCode==40) return
			if(!this.disabled&&event.keyCode==13){
                this.signin()
            }
        },
        signin() {
            axios.post('/signin', { name: this.name,pwd: this.pwd }).then(res=>{
                if(res.data=='用户名err错误1*88') {
                    this.variant='danger';
                    this.dismissCountDown = this.dismissSecs;
                    this.info='用户名错误'
                }
                else if(res.data=='密码err错误p1$7') {
                    this.variant='danger';
                    this.dismissCountDown = this.dismissSecs;
                    this.info='密码错误'
                }
                else {
                    this.dismissCountDown = this.dismissSecs;
                    this.variant='success';
                    this.info='登录成功'
                    this.$cookies.set('isLogin','1245465r654fghfgfwcb'+res.data,60*60*24*3)
                    this.$router.push({path:'/vote'})
                }
            },res=>{
                this.variant='danger';
                this.dismissCountDown = this.dismissSecs;
                this.info='服务器已关闭'
                fetch('http://jw3.ngrok.xiaomiqiu.cn/signin',{
					method:'post',
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Content-Type': 'application/json'
					}, 
					body:JSON.stringify({ 'name': this.name,'pwd': this.pwd })
				})
				.then(res=>res.json())
				.then(json=>{
					if(json=='用户名err错误1*88') {
                        this.variant='danger';
                        this.dismissCountDown = this.dismissSecs;
                        this.info='用户名错误'
                    }
                    else if(json=='密码err错误p1$7') {
                        this.variant='danger';
                        this.dismissCountDown = this.dismissSecs;
                        this.info='密码错误'
                    }
                    else {
                        this.dismissCountDown = this.dismissSecs;
                        this.variant='success';
                        this.info='登录成功'
                        this.$cookies.set('isLogin','1245465r654fghfgfwcb'+json,60*60*24*3)
                        this.$router.push({path:'/vote'})
                    }
				})
            })
        }
    },
    computed: {
        nameState() {
            return this.name?true:null
        },
        pwdState() {
            return /^[0-9a-zA-Z!@#$^*]{6,18}$/.test(this.pwd)?true:null
        },
        disabled() {
            return this.name&&/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(this.pwd)?false:true
        }
    }
}
</script>

