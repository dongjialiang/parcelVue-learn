import Vue from 'vue'
import router from './router'
import store from './store'
//
import FastClick from 'fastclick'
//
import axios from 'axios'
//
import App from './App.vue'
//
import BootStrapVue from 'bootstrap-vue'
import VueCookies from 'vue-cookies'
//
import './assets/css/bootstrap.min'
import './assets/css/css.styl'
import './assets/js/rem'
//
Vue.use(BootStrapVue);
Vue.use(VueCookies);
FastClick(document.body)
//
axios.defaults.baseURL='http://jw3.ngrok.xiaomiqiu.cn';
//
Vue.prototype.axios=axios;
//
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')
