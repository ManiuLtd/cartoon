webpackJsonp([2],{769:function(t,e,a){function i(t){a(777)}var n=a(389)(a(779),a(780),i,null,null);t.exports=n.exports},777:function(t,e,a){var i=a(778);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(767)("4b937d68",i,!0,{})},778:function(t,e,a){e=t.exports=a(766)(!1),e.push([t.i,".fq-detail-page .van-list .van-cell.active{background-color:#d83636}.fq-detail-page .van-list .van-cell.active .van-cell__value{color:#fff}.fq-detail-page .van-list .van-cell .van-cell__value{display:-webkit-box;display:flex}",""])},779:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(165),n=a.n(i),r=a(50);e.default={name:"fq-detail-page",components:{},data:function(){return{condition:{keywords:""},id:this.$route.params.id,name:decodeURIComponent(this.$route.query.name),articleList:[]}},mounted:function(){this.getArticleList()},computed:{cartoonMap:function(){return this.$store.getters.getCartoonMap||{}}},methods:{jumpToPrevewPage:function(t){var e=this;e.$store.dispatch("setCartoonMapByItem",{id:e.id,articleId:t.id,articleName:t.title}),e.jumpPage("preview",{id:e.id,aId:t.id},{name:encodeURIComponent(e.name)})},getArticleList:function(){var t=this,e=this.$route.params.id;t.$store.dispatch("queryList",{id:e}).then(function(a){var i=a.data,r=n()(i),o=r.find("div.pmedium.plist>ul li"),l=[];n.a.each(o,function(t,a){var i=n()(a).find("a"),r=i.attr("href");e=r.substring(r.lastIndexOf("/")+1,r.lastIndexOf(".html"));var o=i.attr("title");l.push({id:e,title:o})}),t.articleList=l,t.$nextTick(function(){t.scrollToCurrentArticle()})}).catch(function(e){t.dataLoadingStatus=!1,r.a.error("[Index][fq-global][webMyApiMarket]",e)})},scrollToCurrentArticle:function(){var t=this,e=t.$route.params.id,a=t.cartoonMap,i=a[e];if(i){var n=i.articleId,r=document.getElementById("article_"+n);r&&r.scrollIntoView()}}}}},780:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fq-detail-page"},[a("van-nav-bar",{attrs:{"z-index":99}},[a("van-icon",{staticClass:"touch-event",attrs:{slot:"left",name:"arrow-left"},on:{click:function(e){return t.historyBack()}},slot:"left"}),t._v(" "),a("template",{slot:"title"},[t._v("   \n            "+t._s(t.name)+"             \n        ")])],2),t._v(" "),a("van-list",{staticClass:"flex-content"},t._l(t.articleList,function(e,i){return a("van-cell",{key:i,class:{active:t.cartoonMap[t.id]&&t.cartoonMap[t.id].articleId==e.id},attrs:{"is-link":"",id:"article_"+e.id},on:{click:function(a){return t.jumpToPrevewPage(e)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])}),1)],1)},staticRenderFns:[]}}});