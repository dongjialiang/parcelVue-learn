import Vue from 'vue'
import Router from 'vue-router'

import header from '../components/Header.vue'
import body from '../components/Content.vue'
import content from '../components/children/home.vue'
import vote from '../components/children/vote.vue'
import test from '../components/children/test.vue'
import about from '../components/children/about.vue'

Vue.use(Router)

const routes=[
    {
        path: '/',
        components: { header, body },
        children:[
            {
                path:'',
                component: content 
            },{
                path: 'vote',
                component: vote 
            },
            {
                path: 'test',
                component: test 
            },
            {
                path: 'about',
                component: about 
            }
        ]
    }
]

const router = new Router({
    routes
})

export default router
