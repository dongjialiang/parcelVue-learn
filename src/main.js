import Vue from 'vue'
import router from './router'
import store from './store'
//vue,router,store
import Vue2TouchEvents from 'vue2-touch-events';
Vue.use(Vue2TouchEvents);
//移动端手势
import FastClick from 'fastclick';
//click
import axios from 'axios';
//http客户端
import App from './App.vue';
//界面入口
//import BootStrapVue from 'bootstrap-vue'
import { Alert, Carousel, Form, FormSelect, Image, Navbar, Layout, ListGroup } from 'bootstrap-vue/es/components';
import { Scrollspy } from 'bootstrap-vue/es/directives';
//UI库
import VueCookies from 'vue-cookies';
//cookies
//import './assets/css/bootstrap.min'
import './assets/css/css.styl';
//样式
/* import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

// Add the icon to the library so you can use it in your page
fontawesome.library.add(solid)
//字体真(๑•̀ㅂ•́)و✧样式 */
import './assets/js/rem';
//响应式
import VePie from 'v-charts/lib/pie';
Vue.component(VePie.name, VePie);
//图表(饼状图)
Vue.use(Alert)
Vue.use(Carousel)
Vue.use(Form)
Vue.use(FormSelect)
Vue.use(Image)
Vue.use(Navbar)
Vue.use(Scrollspy)
Vue.use(Layout)
Vue.use(ListGroup)
//Vue.use(BootStrapVue);
//
Vue.use(VueCookies);
FastClick(document.body);
//
axios.defaults.baseURL='https://quiet-mesa-99852.herokuapp.com';//本地
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
