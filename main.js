import Vue from 'vue'
import App from './src/App.vue'
import router from './src/router'
import './src/css/css'

window.onload = () => {
    new Vue({
        el:'#app',
        router,
        render: h => h(App)
    });
}
