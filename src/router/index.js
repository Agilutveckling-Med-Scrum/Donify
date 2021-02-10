import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
import Walkthrough from '../views/Walkthrough.vue'
import Aboutdonify from '../views/Aboutdonify.vue'
import Login from '../views/Login.vue'
<<<<<<< HEAD
import Donationpage1 from '../components/donationpg1.vue'
import Donationpage2 from '../components/donationpg2.vue'
import Donationpage3 from '../components/donationpg3.vue'
=======

>>>>>>> bbcb40f4b66e721be0092508648b401e293448ea
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Walkthrough',
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
<<<<<<< HEAD
  },
  {
    path: '/donate',
    name: 'Donationpage1',
    component: Donationpage1
    //component: () => import('views/Donationpage1.vue')
  },
  {
    path: '/pay',
    name: 'Donationpage2',
    component: Donationpage2
    // component: () => import('views/Donationpage2.vue')
  },
  {
    path: '/info',
    name: 'Donationpage3',
    component: Donationpage3
    // component: () => import('views/Donationpage3.vue')
=======
>>>>>>> bbcb40f4b66e721be0092508648b401e293448ea
  }
]

const router = new VueRouter({
  routes
=======
import Walkthrough from '../views/Walkthrough.vue'
import Aboutdonify from '../views/Aboutdonify.vue'
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
    }
]

const router = new VueRouter({
    routes
>>>>>>> 25c4edee7a33ea97a2c9a52f2db974999b49cc0b
})

export default router
