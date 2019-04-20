/**
 * 页面路由名称
 */
export default {
    // "个人中心",
    '*': {name:'*',path:'*',title:'404 Not Found'},
    //'kline': {name:'kline',path:'kline',title:'K线测试页'},
    'index': {name:'index',path:'/',title:'首页'},
    'detail': {name:'detail',path:'/detail/:id',title:'首页'},
    'preview': {name:'preview',path:'/preview/:id/:aId?',title:'首页'},
    
}
