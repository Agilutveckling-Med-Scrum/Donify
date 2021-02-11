<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
})
=======
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        numvalue: ''
    },
    mutations: {
        setnumValue(state, numvalue) {
            state.numvalue = numvalue
        }
    },
    actions: {},
    modules: {}
})
>>>>>>> da259e3e33d40938e190c62082de3c3c159a604e
