import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        numvalue: '',
        selected: 'SEK'
    },
    mutations: {
        setnumValue(state, numvalue) {
            state.numvalue = numvalue
        },
        setKey(state, selected) {
            state.selected = selected
        }
    },
    actions: {},
    modules: {}
})
