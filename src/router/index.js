import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/Header.vue'
import Content from '../components/Content.vue'
import home from '../components/children/home.vue'
import vote from '../components/children/vote.vue'
import test from '../components/children/test.vue'
import about from '../components/children/about.vue'
import signin from '../components/children/signin.vue'
import signup from '../components/children/signup.vue'

Vue.use(Router);

const routes=[
    {
        path: '/',
        components: { Header, Content },
        children:[
            {
                path:'',
                component: home 
            },{
                path: 'vote',
                meta: {
                    validation: true
                },
                component: vote
            },
            {
                path: 'test',
                component: test 
            },
            {
                path: 'about',
                component: about 
            },
            {
                path: 'signin',
                component: signin
            },
            {
                path: 'signup',
                component: signup
            }
        ]
    }
]

const router = new Router({
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.meta.validation) {
        if (!window.$cookies.get('isLogin')) {
            router.push({path:'signin'})
        }
        else {
            next()
        }
    }
    else
        next()
})

export default router
