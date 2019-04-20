/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */
import Coin from './conf/coin.conf'
import Codes from './conf/code.conf'
import RouterURL from './conf/routers.conf'
import URL from './conf/url.conf'
import KlineConfig from './conf/kline.conf'
import regions from './region/regions.json'
import apiConfig from './conf'

//常量定义
const PLATEFORM='ERIC_CARTOON_';
const Constants={
    PLATEFORM:PLATEFORM,
    CODES:Codes,
    APICONFIG:apiConfig,
    AXIOTIMEOUT:apiConfig.axioTimeout,//请求超时时间
    LOCALSTORAGEKEY:{//存储key
        SETCARTOONMAP:PLATEFORM+'_SET_CARTOON_MAP',//搜索历史记录
        SETINDEXDATA:PLATEFORM+'_SET_INDEX_DATA',//首页数据
        SETARTICLELIST:PLATEFORM+'_SET_ARTICLE_LIST',//章节数据
    },

}

const routerMode=apiConfig.routerMode
const routerAuth=true
// const routerAuth=false
const otcImageServer=apiConfig.otcImageServer
const imageServer=apiConfig.imageServer
// console.log(apiConfig.aliyun.nocaptcha);


export {
    routerMode,//路由模式定义
    RouterURL,//路由相关定义
    Constants,//全局配置参数定义
    routerAuth,
    otcImageServer,
    imageServer,
    URL// 请求地址定义
}