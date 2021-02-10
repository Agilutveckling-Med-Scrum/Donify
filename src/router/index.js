import Vue from 'vue'
import VueRouter from 'vue-router'
import Walkthrough from '../views/Walkthrough.vue'
import Preloader from '../components/PreloaderMobile.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/walkthrough',
        name: 'Walkthrough',
        component: Walkthrough
    },
    {
        path: '/preloader',
        name: 'MobilePreloader',
        component: Preloader
    }
]

const router = new VueRouter({
    routes
})

export default router
