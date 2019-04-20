/* !!
 * $store.commit
 * ===== ===== =====
 */
import moment from 'moment'


import {Constants} from '@/common/env'
import {getLang} from '@/common/lang/index'
import fqCommon from '@/common/common'

export default {
	setTransitionName(state, item) {
		state.transitionName = item
	},
	//设置浏览记录
	setCartoonMap(state,item){
		state.cartoonMap=item
		fqCommon.setItem(Constants.LOCALSTORAGEKEY.SETCARTOONMAP,JSON.stringify(item))
		// fqCommon.warn('state.lastPreviewExchange',state.exchangeDepth)
	},
	//设置首页数据记录
	setIndexData(state,item){
		state.indexData=item
		fqCommon.setItem(Constants.LOCALSTORAGEKEY.SETINDEXDATA,JSON.stringify(item))
		// fqCommon.warn('state.lastPreviewExchange',state.exchangeDepth)
	},
	//设置章节记录
	setArticleList(state,item){
		state.articleList=item
		fqCommon.setItem(Constants.LOCALSTORAGEKEY.SETARTICLELIST,JSON.stringify(item))
		// fqCommon.warn('state.lastPreviewExchange',state.exchangeDepth)
	},
}
