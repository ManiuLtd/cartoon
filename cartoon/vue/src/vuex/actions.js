/* !!
 * $store.dispatch
 * return Promise
 * ===== ===== =====
 */
import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
// import nprogress from 'nprogress'
import qs from 'qs'
import axios from 'axios'
let variablePool={}

variablePool.websocketMap={}//初始化Websocket 连接池
variablePool.handCloseConfigWsCount=0
variablePool.handCloseUserWsCount=0
export default {
    
    // //币种新闻  code:'eos' 币种    lang:'zh' 语言代码   page: 0  当前页  size:10 页数
    // exchangeCoinNewsUrl:apiConfig.apiHost+'/coin/news/{code}/{lang}/{page}',
    async queryList(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.queryListUrl,{id:options.id}),
            params:{},
            store:context,
            outApi:true,
        })
        return data
    },
    async cartoonPreview(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.cartoonPreviewUrl,{id:options.id,aId:options.articleId}),
            params:{},
            store:context,
            outApi:true,
        })
        return data
    },
    async cartoonContent(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.cartoonContentUrl,{url:options.url}),
            params:{},
            store:context,
            outApi:true,
        })
        return data
    },
    async setCartoonMapByItem(context,item){
        let cartoonMap=context.getters.getCartoonMap
        cartoonMap=JSON.parse(JSON.stringify(cartoonMap))
        let itemTemp=cartoonMap[item.id]
        if(!itemTemp){
            itemTemp={}
        }
        for(let i in item){
            itemTemp[i]=item[i]
        }
        // if(cartoonMap[item.id]){
        //     cartoonMap[item.id]=item
        // }else{
        //     cartoonMap[item.id]=item
        // }
        cartoonMap[item.id]=itemTemp
        context.commit('setCartoonMap',cartoonMap)
        return itemTemp
    },
}
/**
 * post 请求
 * @param {*} options
 * @param {*} callback
 */
async function post(options,callback){
    if(!options){
        options={}
    }
    let {url,params,headers,store,vm,needToken,needAPIkey,outApi,noProgress}=options
    // if(!noProgress){
    //     nprogress.start()
    // }
    if(!vm){
        vm=window.$vm
    }
    // fqCommon.error('vm=',vm)
    if(!params){
        params={}
    }
    if(!headers){
        headers={}
    }
    if(options.headers){
        for(let i in options.headers){
            if(options.headers.hasOwnProperty(i)){
                headers[i]=options.headers[i];
            }
        }
    }
    if(!headers['Content-Type']){
        headers['Content-Type']='application/x-www-form-urlencoded'
    }
    if(!!needAPIkey){
        if(Constants.PIZZA.APIKEY){
            headers['X-MBX-APIKEY']=Constants.PIZZA.APIKEY
        }
    }
    if(store){
        let userInfo=store.getters.getUserInfo
        let token=userInfo?userInfo.token:''
        if(!!needToken){
            if(token){
                headers[Constants.AUTHORIZATION]=userInfo.token;
            }
        }
        if(!params.langKey){
            params.langKey=store.state.lang
            params.langKey=store.state.lang=="ZH-CN"?"ZH-CN":"EN" //by cici
        }
    }
    if(params.langKey){
        params.langKey=params.langKey.replace(/-/gi,'_')
        params.langKey=params.langKey.toUpperCase()=="ZH_CN"?params.langKey:"EN" //by cici
    }
    fqCommon.warn("当前请求地址：",url,'当前请求参数',params)
    const data= await axios.post(url,qs.stringify(params),{
        headers:headers,
        timeout:Constants.AXIOTIMEOUT,
        // transformRequest: [function (data) {
        //     let ret = []
        //     for (let it in data) {
        //         ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]))
        //     }
        //     return ret.join('&')
        // }]
    })
    // if(!noProgress){
    //     nprogress.done()
    // }
    if(data){
        let result=data.data
        if(result&&result.code=='02_01_0_001_01_009'){//需要登录授权
            store.commit('setUserInfo')
            vm&&vm.jumpLogin()
            return data
        }

    //     // if(!outApi){
    //     //     if(result&&result.err!=0){
    //     //         if(vm){
    //     //             vm.$notify({
    //     //                 message: vm.langKey(result.msg),
    //     //                 type: 'error'
    //     //             })
    //     //         }
    //     //     }
    //     // }
    }
    //判断返回值处理
    return data
}
/**
 * post 请求formdata提交
 * @param {*} options
 * @param {*} callback
 */
async function postUpload(options,callback){
    if(!options){
        options={}
    }
    let {url,params,headers,store,vm,needToken,needAPIkey,outApi,noProgress}=options
    // if(!noProgress){
    //     nprogress.start()
    // }
    if(!vm){
        vm=window.$vm
    }
    if(!params){
        params={}
    }
    if(!headers){
        headers={}
    }
    if(headers){
        for(let i in options.headers){
            if(options.headers.hasOwnProperty(i)){
                headers[i]=options.headers[i];
            }
        }
    }
    if(!headers['Content-Type']){
        headers['Content-Type']='application/x-www-form-urlencoded'
    }
    if(!!needAPIkey){
        if(Constants.PIZZA.APIKEY){
            headers['X-MBX-APIKEY']=Constants.PIZZA.APIKEY
        }
    }
    if(store){
        let userInfo=store.getters.getUserInfo
        let token=userInfo?userInfo.token:''
        if(!!needToken){
            if(token){
                headers[Constants.AUTHORIZATION]=userInfo.token;
            }
        }
    }
    fqCommon.warn("当前请求地址：",url,'当前请求参数',params)
    let data= await axios.post(url,params,{
        headers:headers,
        timeout:Constants.AXIOTIMEOUT,
    })
    // if(!noProgress){
    //     nprogress.done()
    // }
    if(data){
        let result=data.data
        if(result&&result.code=='02_01_0_001_01_009'){//需要登录授权
            store.commit('setUserInfo')
            // 将跳转的路由path作为参数，登录成功后跳转到该路由
            vm&&vm.jumpLogin()
            return data
        }

    //     // if(!outApi){
    //     //     if(result&&result.err!=0){
    //     //         if(vm){
    //     //             vm.$notify({
    //     //                 message: vm.langKey(result.msg),
    //     //                 type: 'error'
    //     //             })
    //     //         }
    //     //     }
    //     // }
    }
    //判断返回值处理
    return data
}

/**
* get 请求
* @param {*} options
* @param {*} callback
*/
async function get(options,callback){
    if(!options){
        options={}
    }
    let {url,params,headers,store,vm,needToken,needAPIkey,outApi,noProgress}=options
    // if(!noProgress){
    //     nprogress.start()
    // }
    if(!vm){
        vm=window.$vm
    }
    // fqCommon.error('vm=',vm)
    if(!params){
        params={}
    }
    if(!headers){
        headers={}
    }
    if(headers){
        for(let i in options.headers){
            if(options.headers.hasOwnProperty(i)){
                headers[i]=options.headers[i]
            }
        }
    }
    if(!headers['Content-Type']){
        headers['Content-Type']='application/x-www-form-urlencoded'
    }
    if(!!needAPIkey){
        if(Constants.PIZZA.APIKEY){
            headers['X-MBX-APIKEY']=Constants.PIZZA.APIKEY
        }
    }
    if(store){
        let userInfo=store.getters.getUserInfo
        let token=userInfo?userInfo.token:''
        if(!!needToken){
            if(token){
                headers[Constants.AUTHORIZATION]=userInfo.token
            }
        }
        if(!params.langKey){
            params.langKey=store.state.lang
            params.langKey=store.state.lang=="ZH-CN"?"ZH-CN":"EN" //by cici
        }
    }
    if(params.langKey){
        params.langKey=params.langKey.replace(/-/gi,'_')
        params.langKey=params.langKey.toUpperCase()=="ZH_CN"?params.langKey:"EN" //by cici
    }
    fqCommon.warn("当前请求地址：",url,'当前请求参数',params)
    const data= await axios.get(url,{
        params:params
    },{
        headers:headers,
        timeout:Constants.AXIOTIMEOUT,
    })
    // if(!noProgress){
    //     nprogress.done()
    // }
    if(data){
        let result=data.data
        if(result&&result.code=='02_01_0_001_01_009'){//需要登录授权
            store.commit('setUserInfo')
            vm&&vm.jumpLogin()
            return data
        }
    //     // if(!outApi){
    //     //     if(result&&result.err!=0){
    //     //         if(vm){
    //     //             vm.$notify({
    //     //                 message: vm.langKey(result.msg),
    //     //                 type: 'error'
    //     //             })
    //     //         }
    //     //     }
    //     // }
    }
    return data
}
// export default Store
