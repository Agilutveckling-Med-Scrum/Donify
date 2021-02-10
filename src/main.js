import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
=======
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    router,
    store,
    render: h => h(App)
>>>>>>> 25c4edee7a33ea97a2c9a52f2db974999b49cc0b
}).$mount('#app')
