import Vue from 'vue'
import router from './router'
import store from './store'
//
import VueDirectiveTouch from 'vue-directive-touch'
//
import axios from 'axios'
//
import App from './App.vue'
//
import BootStrapVue from 'bootstrap-vue'
import VueCookies from 'vue-cookies'
//
import './css/bootstrap.min'
import './css/css.styl'
import './js/rem'
//
Vue.use(BootStrapVue);
Vue.use(VueCookies);
Vue.use(VueDirectiveTouch)
//
axios.defaults.baseURL='http://jw3.ngrok.xiaomiqiu.cn';
//
Vue.prototype.axios=axios;
//
//
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')
