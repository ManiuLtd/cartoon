/**
 * 路由组件处理
 */
import {routerMode} from '@/common/env'
import Routers from './routers'


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    mode: routerMode,
    routes: [
        ...Routers,        
    ]
})