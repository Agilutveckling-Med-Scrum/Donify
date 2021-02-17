import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Walkthrough from '../views/Walkthrough.vue'
import Aboutdonify from '../views/Aboutdonify.vue'
import Login from '../views/Login.vue'

import Donationpage1 from '../components/donationpg1.vue'
import Donationpage2 from '../components/donationpg2.vue'
import Donationpage3 from '../components/donationpg3.vue'
import Preloader from '../components/PreloaderMobile.vue'
import Userpage from '../components/Userpage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
   
   
    {
        path: '/walkthrough',
        name: 'Walkthrough',
        component: Walkthrough
    },
    {
        path: '/aboutdonify',
        name: 'Aboutdonify',
        component: Aboutdonify
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/userpage',
        name: 'Userpage',
        component: Userpage
    },
    {
        path: '/preloader',
        name: 'MobilePreloader',
        component: Preloader
    },
    {
        path: '/donate',
        name: 'Donationpage1',
        component: Donationpage1
        
    },
    {
        path: '/pay',
        name: 'Donationpage2',
        component: Donationpage2
        
    },
    {
        path: '/info',
        name: 'Donationpage3',
        component: Donationpage3
        
    }
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    modle: 'history'
})

export default router
