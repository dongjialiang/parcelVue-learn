import Vue from 'vue'
import router from './router'
import App from './App.vue'
import BootStrapVue from 'bootstrap-vue'
import './css/bootstrap.min'
import './css/css.styl'
import './js/rem'

Vue.use(BootStrapVue);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
