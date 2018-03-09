<template>
    <div id="signin">
        <div class="alertContainer">
            <b-alert :variant="variant" dismissible :show="dismissCountDown" @dismissed="dismissCountdown=0" @dismiss-count-down="countDownChanged">
                {{info}} 这条消息将在 {{dismissCountDown}} 秒后消失...
            </b-alert>
        </div>
        <b-form @keyup="keyup">
            <div class="input"><input type="text" class="form-control" v-model="name" :state="nameState" placeholder="输入用户名" /><font v-show="name" @click.stop="name=''"><i class="fa fa-times"></i></font></div>
            <span>{{name?nametip[1]:nametip[0]}}</span>
            <div class="input"><input type="password" class="form-control" v-model="pwd" :state="pwdState" placeholder="输入密码" /><font v-show="pwd" @click.stop="pwd=''"><i class="fa fa-times"></i></font></div>
            <span>{{pwd.length>=6?/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(pwd)?pwdtip[1]:pwdtip[2]:pwdtip[0]}}</span>
        </b-form>
        <p>
            <button class="form-control" :disabled="disabled" @click.stop="signin">登录</button>
            <router-link to='/signup'>注册</router-link>
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            pwd: '',
            nametip: ['用户名不能为空','ok'],
            pwdtip: ['密码不能少于6位','ok','密码格式不对'],
			dismissSecs: 5,
            dismissCountDown: 0,
            variant: '',
            info: ''
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
            this.axios.post('/signin', { name: this.name,pwd: this.pwd }).then(res=>{
                if(res.data=='用户名错误' || res.data=='密码错误') {
                    this.variant = 'danger';
                    this.dismissCountDown = this.dismissSecs;
                    this.info = res.data
                }
                else {
                    this.$cookies.set('isLogin','1245465r654fghfgfwcb'+res.data,60*60*24*3)
                    this.$router.push({path:'/vote'})
                }
            },res=>{
                this.variant='danger';
                this.dismissCountDown = this.dismissSecs;
                this.info='服务器已关闭'
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
/* fetch('https://quiet-mesa-99852.herokuapp.com/signin',{
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
    if(json=='用户名错误' || json=='密码错误') {
        this.variant = 'danger';
        this.dismissCountDown = this.dismissSecs;
        this.info = json
    }
    else {
        this.$cookies.set('isLogin','1245465r654fghfgfwcb'+json,60*60*24*3)
        this.$router.push({path:'/vote'})
    }
})
.catch(e => {
    this.variant='danger';
    this.dismissCountDown = this.dismissSecs;
    this.info='服务器已关闭'
}) */
</script>

