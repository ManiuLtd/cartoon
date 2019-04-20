// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fqCommon from '@/common/common'
import '@/common/rem'
import moment from 'moment'
import VueLazyload from 'vue-lazyload'
import store from './vuex/store'
import VueClipboard from 'vue-clipboard2'
import Big from 'big.js'
import axios from 'axios'
import vueAnalytics from 'vue-analytics'
import Vant,{Notify} from 'vant'
import accounting from 'accounting'
import {URL,RouterURL,Constants} from '@/common/env'
import { imageServer, otcImageServer } from './common/env'
const defaultImage = '/static/images/default.png'

if (process.env.NODE_ENV === 'production') {
    Vue.use(vueAnalytics, {
        id: Constants.APICONFIG.google.ga,
        router
    })
}
//设置处理不做 四舍五入
Big.RM = 0

//增加复制处理
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)
Notify.setDefaultOptions({
    background:'#05b3e8',
    color:'#fff',
})
//使用 vant UI
Vue.use(Vant)
//图片懒加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: defaultImage,
    loading: defaultImage,
    attempt: 1
})

Vue.prototype.Big=Big

//设置axios 超时和重试
axios.defaults.retry = 4    //重试次数
axios.defaults.retryDelay = 1000    //多久进行重试
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){
    let config = err.config //如果配置不存在或未设置重试选项，则返回错误信息  
    if(!config || !config.retry){
        return Promise.reject(err)//设置变量即跟踪重试次数 
    }
    config.__retryCount = config.__retryCount || 0 // 检查我们是否已经超过了总重试次数
    if(config.__retryCount >= config.retry) {// 返回错误信息
        return Promise.reject(err)
    }// 重试次数加1
    config.__retryCount += 1// 创建延时器等待发送重试请求 
    let backoff = new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, config.retryDelay || 1)
    })// 返回调用AXIOS来重试请求
    // if(config.method.toUpperCase()=='POST'){
    //     config.transformRequest=[function (data) {
    //         let ret = []
    //         for (let it in data) {
    //             ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]))
    //         }
    //         return ret.join('&')
    //     }]
    // }
    return backoff.then(function(){
        return axios(config)
    })
})
//全局路由跳转 query 方式
Vue.prototype.qJumpPage = function (url,query,params){
    this.jumpPage(url,params,query)
}
//全局路由跳转 query 方式
Vue.prototype.jumpLogin = function (){
    this.jumpPage('login',{},{redirecturl:encodeURIComponent(window.location.href)})
}
//全局window.location跳转
Vue.prototype.openPage = function (url,flag){
    this.$store.commit("setTransitionName", "turn-on")
    fqCommon.openPage(url,flag)
}
//全局window.location跳转
Vue.prototype.helpPage = function (url,flag,replace,status){
    let that=this
    that.$store.commit("setTransitionName", "turn-on")
    if(url.indexOf('https://')>-1||url.indexOf('http://')>-1){
        if(that.$bridge){
            fqCommon.openWebView(url)
        }else{
            that.openPage(url,flag)
        }
        return
    }
    // let langMap=that.$store.state.langMap
    let lang=that.$store.state.lang
    let prefix='en-us'
    // if(langMap&&lang&&langMap[lang].help){
    //     prefix=langMap[lang].help
    // }
    if(lang){
        prefix=Constants.LANGMAP[lang.toUpperCase()].help
    }
    if(!replace){
        url=URL.helpUrl+'/hc/'+prefix+url
    }else{
        url=URL.helpUrl+url
    }
    if(that.$bridge){
        fqCommon.openWebView(url,function () {
            let set_status = status === "white"
            fqCommon.setStatus(that,set_status)
        })
    }else{
        that.openPage(url,flag)
    }
}
/**
 * 截取替换
 */
Vue.prototype.interceptStr = function (str,symbol,len){
    let l=str.length
    return l>2*len?(str.substring(0,len)+symbol+str.substring(l-len,l)):str
}
//格式化大金额
Vue.prototype.formatNumber = function (money,num){
    return fqCommon.format_large_number(money,num)
}
//全局跳转
Vue.prototype.jumpPage = function (url,params,query){
    this.$store.commit("setTransitionName", "turn-on")
    if(!params){
        params={}
    }
    if(!query){
        query={}
    }
    if(url==='login'){//如果是登录路由则自动加上 ,{redirecturl:encodeURIComponent(window.location.href)}
        query.redirecturl=encodeURIComponent(window.location.href)
    }
    this.$router.push ({
        name: url,
        params: params||{},
        query:query||{},
    })
}
//全局跳转
Vue.prototype.backJumpPage = function (url,params,query){
    this.$store.commit("setTransitionName", "turn-off")
    if(!params){
        params={}
    }
    this.$router.push ({
        name: url,
        params: params||{},
        query:query||{},
    })
}
//全局跳转
Vue.prototype.replacePage = function (url,params,query){
    this.$store.commit("setTransitionName","")
    if(!params){
        params={};
    }
    this.$router.push ({
        name: url,
        params: params||{},
        query:query||{},
    })
}
//全局返回
Vue.prototype.historyBack = function (back){
    let that=this
    // fqCommon.error('TransitionName start',this.$store.state.transitionName)
    that.$store.commit("setTransitionName", "turn-off")
    if(!back){
        back=-1
    }
    fqCommon.error('TransitionName end',this.$store.state.transitionName)
    // fqCommon.variablePool.routeTimeoutId=setTimeout(()=>{
    //     clearTimeout(fqCommon.variablePool.routeTimeoutId)
        that.$router.go(back)
    // },500)
}
//获取语言
function langKey(langObj,key,options){
    // fqCommon.error(store)
    if(!langObj){
        langObj=store.getters.getLangObj
    }
    return fqCommon.langKey(langObj,key,options)
}
//全局方法 获取语言
Vue.prototype.langKey = function (key,options){
    let langObj=this.$store.getters.getLangObj;
    return langKey(langObj,key,options)
}

//全局方法 转化大数据展示
Vue.prototype.toBig = function (num,fixed,format){
    if(!num){
        num=0
    }
    let val=''
    if(fixed){
        val= Big(num).toFixed(fixed)
    }else{
        val= Big(num).toFixed()
    }
    if(format){
        if(Big(val).gt(0.01)){
            val=accounting.formatMoney(val,{format: "%v" })
        }
    }
    return val
}
//转换交易对
Vue.prototype.getFromPairName=function(tradePairName,type){
    if(type=='s0'){
        return tradePairName.substring(0,tradePairName.indexOf('/'))
    }else{
        return tradePairName.substring(tradePairName.indexOf('/')+1)
    }
}
//全局方法 法币精度处理
Vue.prototype.legalFormat = function (num){
    // if(小于0.00000001) return 精度 = 12;
    // else if(小于0.0000001) return 精度 = 8;
    // else if(小于0.000001) return 精度 = 7;
    // else if(小于0.00001) return 精度 = 6;

    // else if(小于0.0001) return 精度 = 5;
    // else if(小于0.001) return 精度 = 4;
    // else if(小于0.01) return 精度 = 3;
    // else if(小于0.1) return 精度 = 2;
    // else if(小于1) return 精度 = 2;
    if(!num){
        num=0
    }
    let fixed=2
    if(Big(num).eq(0)){
        fixed=2
    }else if(Big(num).lt(Big(0.00000001))){
        fixed=12
    }else if(Big(num).lt(Big(0.0000001)) ){
        fixed=11
    }else if(Big(num).lt(Big(0.000001) )){
        fixed = 10
    }else if(Big(num).lt(Big(0.00001) )){
        fixed = 9
    }else if(Big(num).lt(Big(0.0001) )){
        fixed = 8
    }else if(Big(num).lt(Big(0.001) )){
        fixed = 7
    }else if(Big(num).lt(Big(0.01) )){
        fixed = 6
    }else if(Big(num).lt(Big(0.1))){
        fixed = 5
    }else if(Big(num).lt(Big(1) )){
        fixed = 4
    }else if(Big(num).lt(Big(10) )){
        fixed = 3
    }
    return this.toBig(num,fixed)
}
//全局方法 格式化时间
Vue.prototype.formatTime = function (time,format){
    return time?moment(time).format(format):''
}
//全局方法 加载本站图片
Vue.prototype.loadImgUrl = function (url){
    if(url.indexOf('http://')>-1||url.indexOf('https://')>-1) {
        return url
    }
    return imageServer+(url.indexOf('/')!=0?('/'+url):url)
}
//全局方法 加载otc图片
Vue.prototype.loadOtcImgUrl = function (url){
    if(url.indexOf('http://')>-1||url.indexOf('https://')>-1) {
        return url
    }
    return otcImageServer+(url.indexOf('/')!=0?('/'+url):url)
}
//全局方法 格式化时间
Vue.prototype.utc = function (time,timezone){
    let state=this.$store.state
    return moment(Number(time)).utcOffset(timezone!=undefined?timezone:state.timezone)
}

console.log("%c"+langKey(null,'同学，祝贺你喜提彩蛋~在这里做自己，欢迎来到UBi.Bi！'),"background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:25px");

router.beforeEach((to, from, next) => {
    // document.title = ''
    // nprogress.start()
    let loading=document.getElementById("loading")
    if(loading){
        loading.style.display='block'
        // document.body.removeChild(loading)
    }
    let $store=router.app.$store||store
    let langObj=$store?$store.getters.getLangObj:null
    let docTitle = to.meta.title
    // if (docTitle) {
    //     document.title =langKey(langObj,'UBi.Bi - Bitcoin Exchange, Crypto Coin Market')//+langKey(langObj,docTitle)
    // }
    // fqCommon.log("beforeEach,当前路由title=",to.meta.title,to.name,to.path)
    fqCommon.log("beforeEach,当前路由to=",to,',from:',from)
    if(!RouterURL[to.name]){//如果路由配置不存在则跳到404页
        next({
            name: '*',
        })
        return
    }
    // if((to.name=='index'&&from.name=='exchange')||(to.name=='exchange'&&from.name=='index')){//临时解决  如果是首页切exchange 或者  交易中心切首页 则载页面
    //     window.location.href=to.fullPath
    // }
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        let userInfo=$store.getters.getUserInfo
        if (userInfo&&userInfo.userId) { // 通过vuex state获取当前的token是否存在
            next()
        } else {
            next({
                name: 'login',
                //query: { redirecturl:document.location.protocol+'//'+document.location.host+ to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                 query: { redirecturl:to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next()
    }

    try{
        if(Vue.prototype.$bridge)
            Vue.prototype.$bridge.callHandler('native_handle', "screen_notch",function(data){
                if(data["msg"][0]["bool"]==true || data["msg"][0]["bool"]=="true"){
                    if(data["msg"][0]["brand"].indexOf("iphone X")>=0) {
                        document.body.className = document.body.className.replace(/iphoneX/g,'') + " iphoneX"
                    }else{
                        document.body.className = document.body.className.replace(/androidX/g,'') +  " androidX"
                    }
                }
            });
    }catch (err){}
})

router.afterEach((to, from) => {
    let loading=document.getElementById("loading")
    if(loading){
        loading.style.display='none'
        // document.body.removeChild(loading)
    }
    // nprogress.done()
})
Vue.prototype.$bridge=null
fqCommon.setupWebViewJavascriptBridge((bridge)=>{
    Vue.prototype.$bridge=bridge
    try{
            bridge.callHandler('native_handle', "screen_notch",function(data){
            if(data["msg"][0]["bool"]==true || data["msg"][0]["bool"]=="true"){
                if(data["msg"][0]["brand"].indexOf("iphone X")>=0) {
                    document.body.className = document.body.className.replace(/iphoneX/g,'') + " iphoneX"
                }else{
                    document.body.className = document.body.className.replace(/androidX/g,'') +  " androidX"
                }
            }
        });
    }catch (err){}
})

Vue.config.productionTip = false

window.$vm=new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')