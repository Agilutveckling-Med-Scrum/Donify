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
