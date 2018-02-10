import Vue from 'vue'
import router from './router'
import store from './store'
//vue,router,store
import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)
//移动端手势
import FastClick from 'fastclick'
//click
import axios from 'axios'
//http客户端
import App from './App.vue'
//界面入口
//import BootStrapVue from 'bootstrap-vue'
import { Alert, Button, ButtonGroup, Carousel, Form, FormInput, FormSelect, Image, Link, Navbar } from 'bootstrap-vue/es/components';
//UI库
import VueCookies from 'vue-cookies'
//cookies
import './assets/css/bootstrap.min'
import './assets/css/css.styl'
import './assets/js/rem'
//响应式
Vue.use(Alert)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Carousel)
Vue.use(Form)
Vue.use(FormInput)
Vue.use(FormSelect)
Vue.use(Image)
Vue.use(Link)
Vue.use(Navbar)
//Vue.use(BootStrapVue);
//
Vue.use(VueCookies);
FastClick(document.body)
//
axios.defaults.baseURL='http://jw3.ngrok.xiaomiqiu.cn';
//axios默认URL
Vue.prototype.axios=axios;
//
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')
//vue实例
