
// import axios from 'axios'

// import moment from 'moment'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state:require('./state').default,
    getters:require('./getters').default,
    mutations:require('./mutations').default,
    actions:require('./actions').default
})
