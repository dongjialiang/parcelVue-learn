import Vue from 'vue'
import Router from 'vue-router'

import Content from '../components/Content.vue'
/* const home = () => import('../components/children/home.vue')
const vote = () => import('../components/children/vote.vue')
const test = () => import('../components/children/test.vue')
const about = () => import('../components/children/about.vue')
const signin = () => import('../components/children/signin.vue')
const signup = () => import('../components/children/signup.vue') */
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
        components: { Content },
        children:[
            {
                path: '',
                component: home
            },
            {
                path: 'list-item-1',
                component: home
            },
            {
                path: 'list-item-2',
                component: home
            },
            {
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
    routes,
});

router.beforeEach((to,from,next)=>{
    if(to.meta.validation) {
        if (!window.$cookies.get('isLogin')) {
            router.push({path:'signin'})
        }
        else {
            next();
        }
    }
    else
        next();
});

export default router;
