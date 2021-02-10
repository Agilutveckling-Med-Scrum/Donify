import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Walkthrough from '../views/Walkthrough.vue'
import Aboutdonify from '../views/Aboutdonify.vue'
import Login from '../views/Login.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
