import Vue from 'vue'
import VueRouter from 'vue-router'
import Walkthrough from '../views/Walkthrough.vue'
import Aboutdonify from '../views/Aboutdonify.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
    {
        path: '/',
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
=======
	{
		path: '/',
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
>>>>>>> 8208b609bbbc2dae47a88be81876100869936e29
]

const router = new VueRouter({
	routes
})

export default router
