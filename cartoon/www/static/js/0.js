webpackJsonp([0],{768:function(t,e,n){function o(t){n(773)}var a=n(389)(n(775),n(776),o,null,null);t.exports=a.exports},771:function(t,e,n){function o(t){n(785)}var a=n(389)(n(787),n(788),o,null,null);t.exports=a.exports},773:function(t,e,n){var o=n(774);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(767)("5e3d7034",o,!0,{})},774:function(t,e,n){e=t.exports=n(766)(!1),e.push([t.i,".fq-index-page .van-list{display:-webkit-box;display:flex;flex-wrap:wrap}.fq-index-page .van-list .van-cell{margin-bottom:1rem;padding:0;max-width:50%;min-width:50%}.fq-index-page .van-list .van-cell .van-cell__value{display:-webkit-box;display:flex}.fq-index-page .van-list .van-cell .van-cell__value .img-box{margin:.5rem;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.fq-index-page .van-list .van-cell .van-cell__value .img-box img{width:100%}",""])},775:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(50);e.default={name:"fq-index-page",components:{},data:function(){return{condition:{keywords:""},courselist:[{logo:"http://www.chuixue.net/uploads/b/26754/20171126054854412.jpg",id:"26754",name:"食色大陆"},{logo:"http://www.chuixue.net/uploads/b/26798/20171126054932300.jpg",id:"26798",name:"一人之下"},{logo:"http://www.chuixue.net/uploads/b/20180421/20180421175154892.jpg",id:"30281",name:"重生之都市修仙"}]}},mounted:function(){},computed:{cartoonMap:function(){return this.$store.getters.getCartoonMap}},methods:{jumpToDetail:function(t){var e=this;e.$store.dispatch("setCartoonMapByItem",{id:t.id,name:t.name,logo:t.logo}),e.jumpPage("detail",{id:t.id},{name:encodeURIComponent(t.name)})}}}},776:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fq-index-page"},[n("van-nav-bar",{attrs:{"z-index":99}},[n("template",{slot:"title"},[t._v("\n            "+t._s(t.漫画首页)+"              \n        ")])],2),t._v(" "),n("div",{staticClass:"flex-content"},[n("h2",[t._v("当前正在看的漫画为:")]),t._v(" "),n("div",t._l(t.cartoonMap,function(e,o,a){return n("van-cell",{key:a,on:{click:function(n){return t.jumpToDetail(e)}}},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:e.logo}}),t._v(" "),n("p",[t._v(t._s(e.name))]),t._v(" "),e.articleName?n("p",[t._v(" "+t._s(e.articleName?"已看到"+e.articleName:""))]):t._e()])])}),1),t._v(" "),n("h2",[t._v("热门漫画列表:")]),t._v(" "),n("van-list",t._l(t.courselist,function(e,o){return n("van-cell",{key:o,on:{click:function(n){return t.jumpToDetail(e)}}},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:e.logo}}),t._v("\n                    "+t._s(e.name)+"\n                ")])])}),1)],1)],1)},staticRenderFns:[]}},785:function(t,e,n){var o=n(786);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(767)("3971bdd8",o,!0,{})},786:function(t,e,n){e=t.exports=n(766)(!1),e.push([t.i,".fq-404-component{padding-top:40%}.fq-404-component .content{background-color:#fff;overflow:hidden}.fq-404-component .image-box{overflow:hidden;margin:1.25rem auto;text-align:center}.fq-404-component .image-box img{width:65%;margin:0 auto}.fq-404-component .text-box{text-align:center;margin:2.5rem auto 1.5rem}.fq-404-component .text-box .van-button{margin-top:1rem}",""])},787:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"fq-404-component",data:function(){return{}},components:{},methods:{}}},788:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fq-404-component"},[n("van-nav-bar",{attrs:{"z-index":99}},[n("van-icon",{staticClass:"touch-event",attrs:{slot:"left",name:"arrow-left"},on:{click:function(e){return t.historyBack()}},slot:"left"})],1),t._v(" "),n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("div",{staticClass:"text-box"},[n("div",{staticClass:"texts",domProps:{textContent:t._s(t.langKey("很抱歉，您访问的页面不存在！"))}})])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-box"},[n("img",{attrs:{src:"/static/images/common/404.png"}})])}]}}});