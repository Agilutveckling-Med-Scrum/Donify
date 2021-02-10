import Vue from 'vue'
import VueRouter from 'vue-router'
import Walkthrough from '../views/Walkthrough.vue'
import Aboutdonify from '../views/Aboutdonify.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Preloader from '../components/PreloaderMobile.vue'

Vue.use(VueRouter)

const routes = [
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
        path: '/preloader',
        name: 'MobilePreloader',
        component: Preloader
    },
    {
        path: '/home',
        name: 'Home Page',
        component: Home
    }
]

const router = new VueRouter({
    routes
})

export default router
