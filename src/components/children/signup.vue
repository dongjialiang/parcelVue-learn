<template>
    <div id="signup">
        <div class="alertContainer">
            <b-alert :variant="variant" dismissible :show="dismissCountDown" @dismissed="dismissCountdown=0" @dismiss-count-down="countDownChanged">
                {{info}} 这条消息将在 {{dismissCountDown}} 秒后消失...
            </b-alert>
        </div>
        <b-form @keyup="keyup">
            <div class="input"><input type="text" class="form-control" v-model="realName" :state="realNameState" placeholder="输入姓名" /><font v-show="realName" @click.stop="realName=''"><i class="fa fa-times"></i></font></div>
            <span>{{realName?(/^[\u4E00-\u9FA5A-Za-z]+$/).test(realName)?nametip[1]:nametip[4]:nametip[2]}}</span>
            <div class="input"><input type="text" class="form-control" v-model="studyId" :state="studyIdState" placeholder="输入学号" /><font v-show="studyId" @click.stop="studyId=''"><i class="fa fa-times"></i></font></div>
            <span>{{studyId?nametip[1]:nametip[3]}}</span>
            <div class="input"><input type="text" class="form-control" v-model="name" :state="nameState" placeholder="输入用户名" /><font v-show="name" @click.stop="name=''"><i class="fa fa-times"></i></font></div>
            <span>{{name?nametip[1]:nametip[0]}}</span>
            <div class="input"><input type="text" class="form-control" v-model="pwd" :state="pwdState" placeholder="输入密码" /><font v-show="pwd" @click.stop="pwd=''"><i class="fa fa-times"></i></font></div>
            <span>{{pwd.length>=6?/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(pwd)?pwdtip[i]:pwdtip[4]:pwdtip[0]}}</span>
            <div class="input"><input type="text" class="form-control" v-model="confirmPwd" :state="confirmPwdState" placeholder="确认密码" /><font v-show="confirmPwd" @click.stop="confirmPwd=''"><i class="fa fa-times"></i></font></div>
            <span>{{confirmPwd?confirmPwd==pwd?pwdtip[1]:pwdtip[2]:pwdtip[3]}}</span>
        </b-form>
        <p>
            <button class="form-control" :disabled="disabled" @click.stop="signup">注册</button>
            <router-link to='/signin'>登录</router-link>
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            realName:'',
            studyId:'',
            name:'',
            pwd:'',
            confirmPwd:'',
            nametip:['用户名不能为空','ok','姓名不能为空','学号不能为空','姓名格式不对','学号不能带空格'],
            pwdtip:['密码不能少于6位','ok','确认密码是否正确','确认密码不能为空','密码格式不对','弱','中','强','超强'],
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
                this.signup()
            }
        },
        signup() {
            this.axios.post('/signup', { realName: this.realName,studyId: this.studyId,name: this.name,pwd: this.pwd }).then(res=>{
                if (res.data != '注册成功') {
                    this.variant = 'danger';
                    this.dismissCountDown = this.dismissSecs;
                    this.info = res.data
                }
                else {
                    this.$cookies.set('isLogin','1245465r654fghfgfwcb'+res.data,60*60*24*3)
                    this.$router.push({path:'/vote'})
                }
            },res=>{
                this.variant = 'danger';
                this.dismissCountDown = this.dismissSecs;
                this.info = '服务器已关闭'
            })
        }
    },
    computed: {
        i() {
            const intensity=(/[0-9]/.test(this.pwd)?1:0)+(/[a-z]/.test(this.pwd)?1:0)+(/[A-Z]/.test(this.pwd)?1:0)+(/[!@#$^*]/.test(this.pwd)?1:0)
            return intensity==4?8:intensity==3?7:intensity==2?6:5
        },
        realNameState() {
            return this.realName?true:null
        },
        studyIdState() {
            return this.studyId?true:null
        },
        nameState() {
            return this.name?true:null
        },
        pwdState() {
            return /^[0-9a-zA-Z!@#$^*]{6,18}$/.test(this.pwd)?true:null
        },
        confirmPwdState() {
            return this.confirmPwd?true:null
        },
        disabled() {
            return this.name&&/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(this.pwd)&&this.realName&&(/^[\u4E00-\u9FA5A-Za-z]+$/).test(this.realName)&&this.studyId&&this.confirmPwd&&this.confirmPwd==this.pwd?false:true
        }
    }
}
/* fetch('https://quiet-mesa-99852.herokuapp.com/signup',{
    method:'post',
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }, 
    body:JSON.stringify({ 'realName': this.realName,'studyId': this.studyId,'name': this.name,'pwd': this.pwd })
})
.then(res=>res.json())
.then(json=>{
    if (json != '注册成功') {
        this.variant = 'danger';
        this.dismissCountDown = this.dismissSecs;
        this.info = json
    }
    else {
        this.$cookies.set('isLogin','1245465r654fghfgfwcb'+res.data,60*60*24*3)
        this.$router.push({path:'/vote'})
    }
})
.catch(e => {
    this.variant='danger';
    this.dismissCountDown = this.dismissSecs;
    this.info='服务器已关闭'
}) */
</script>
