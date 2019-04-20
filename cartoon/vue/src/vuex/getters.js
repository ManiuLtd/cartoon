import {Constants} from '@/common/env'
import {getLang} from '@/common/lang/index'
import fqCommon from '@/common/common'
export default {
    
    //获取读取进度数据
    getCartoonMap(state){
        let cartoonMap=state.cartoonMap
        if(!cartoonMap){
            cartoonMap=fqCommon.getItem(Constants.LOCALSTORAGEKEY.SETCARTOONMAP)
            cartoonMap=JSON.parse(cartoonMap)
        }
        return cartoonMap||{}
    },
    //获取首页数据
    getIndexData(state){
        let indexData=state.indexData
        if(!indexData){
            indexData=fqCommon.getItem(Constants.LOCALSTORAGEKEY.SETINDEXDATA)
            indexData=JSON.parse(indexData)
        }
        return indexData||{}
    },
    //获取章节列表数据
    getArticleList(state){
        let articleList=state.articleList
        if(!articleList){
            articleList=fqCommon.getItem(Constants.LOCALSTORAGEKEY.SETARTICLELIST)
            articleList=JSON.parse(articleList)
        }
        return articleList||{}
    },
}
