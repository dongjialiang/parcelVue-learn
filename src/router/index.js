import Vue from 'vue'
import Router from 'vue-router'

import header from '../components/header.vue'
const content = () => import('../components/content.vue')
import vote from '../components/vote.vue'
const test = () => import('../components/test.vue')
const about = () => import('../components/about.vue')

Vue.use(Router)

let routes = [
    {
        path: '/',
        components: { header, content }
    },
    {
        path: '/vote',
        components: { header, vote }
    },
    {
        path: '/test',
        components: { header, test }
    },
    {
        path: '/about',
        components: { header, about }
    }
]

let router= new Router({
    routes:routes
})

export default router
