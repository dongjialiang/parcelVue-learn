import Vue from 'vue'
import router from './router'
import store from './store'
//vue,router,store
import axios from 'axios';
//http客户端
import App from './App.vue';
//界面入口
import Vue2TouchEvents from 'vue2-touch-events';
Vue.use(Vue2TouchEvents);
// 手势
//import BootStrapVue from 'bootstrap-vue'
import {
    BAlert,
    BForm,
    BCarousel,
    BFormSelect,
    BNavbar,
    BContainer,
    BListGroup,
    BNavbarToggle,
    BCollapse,
    BNavbarBrand,
    BNavbarNav,
    BCarouselSlide,
    BCol,
    BRow,
    BListGroupItem,
    BImgLazy,
} from 'bootstrap-vue';
Vue.component('b-alert', BAlert);
Vue.component('b-form', BForm);

Vue.component('b-carousel', BCarousel);
Vue.component('b-carousel-slide', BCarouselSlide);
Vue.component('b-img-lazy', BImgLazy);

Vue.component('b-form-select', BFormSelect);

Vue.component('b-navbar', BNavbar);
Vue.component('b-navbar-toggle', BNavbarToggle);
Vue.component('b-navbar-brand', BNavbarBrand);
Vue.component('b-navbar-nav', BNavbarNav);

Vue.component('b-list-group', BListGroup);
Vue.component('b-list-group-item', BListGroupItem);

Vue.component('b-container', BContainer);
Vue.component('b-collapse', BCollapse);
Vue.component('b-row', BRow);
Vue.component('b-col', BCol);
// 
import { VBScrollspy } from 'bootstrap-vue';
Vue.directive('b-scrollspy', VBScrollspy);
//UI库
import VueCookies from 'vue-cookies';
//cookies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import './assets/css/css.styl';
//样式
import './assets/js/rem';
//响应式
import VePie from 'v-charts/lib/pie';
Vue.component(VePie.name, VePie);
//图表(饼状图)
Vue.use(VueCookies);
//
axios.defaults.baseURL='https://quiet-mesa-99852.herokuapp.com';
//axios默认URL
Vue.prototype.axios = axios;
//
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')
//vue实例
