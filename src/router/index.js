import Vue from 'vue'
import VueRouter from 'vue-router'
import Walkthrough from '../views/Walkthrough.vue'
import Questions from '../components/Questions.vue'
import Preloader from '../components/PreloaderMobile.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Walkthrough',
		component: Walkthrough,
	},
	{
		path: '/questions',
		name: 'Questions',
		component: Questions,
	},
	{
		path: '/preloader',
		name: 'MobilePreloader',
		component: Preloader,
	},
]

const router = new VueRouter({
	routes,
})

export default router
