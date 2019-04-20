<template>
  <div id="app" style="height:100%">
    <transition :name="transitionName">
      <router-view class="child-view flex-content-box"></router-view>
    </transition>
  </div>
</template>

<script>
import fqCommon from '@/common/common'
import {URL} from '@/common/env'
import FastClick from '@/common/lib/fastclick'
export default {
  name: 'app',
  data() {
    return {
      apiMarketListsTimeoutId:'',
    }
  },
  created() {
    let that=this
    that.initEvent()
  },
  computed:{
    transitionName(){
      return this.$store.state.transitionName
    }
  },
  mounted() {
    let that=this
    document.addEventListener('DOMContentLoaded', that.domLoadedEvent, false)
     // FastClick.prototype.onTouchEnd = function(event) {
		// 		if(event.target.hasAttribute("type") && event.target.getAttribute("type") == "text") {
		// 			event.preventDefault();　　　
		// 			return false;　　
		// 		}
		// 	}
    window.addEventListener("popstate",that.popstateEvent,false)
  },
  beforeDestroy(){
    document.removeEventListener('visibilitychange',this.pageChangeEvent)
    document.removeEventListener('popstate',this.popstateEvent)
    document.removeEventListener('DOMContentLoaded',this.domLoadedEvent)
  },
  destroyed(){

  },
  methods:{
    domLoadedEvent(){
        fqCommon.log('domLoaded加载完毕 ')
        FastClick.attach(document.body)

        window.addEventListener("touchstart",touchstart,false);
        window.addEventListener("touchmove",touchmove,false);
        window.addEventListener("touchend",touchend,false);
        window.addEventListener("touchcancel",touchend,false);

        function touchstart(){
          try {
            let the = fqCommon.findObj(event)
            if (!the || the.className.indexOf("touch-event") < 0) return
            $(the).removeClass("touch-event-active")
            $(the).addClass("touch-event-active")
          }catch (e) {}
        }
        function touchmove(){
          try {
            let the = fqCommon.findObj(event)
            if(!the || the.className.indexOf("touch-event")<0) return
            $(the).removeClass("touch-event-active")
          }catch (e) {}
        }
        function touchend(){
          try {
            let the = fqCommon.findObj(event)
            if(!the || the.className.indexOf("touch-event")<0) return
            setTimeout(function(){
              $(the).removeClass("touch-event-active")
            },100);
          }catch (e) {}
        }
    },
    popstateEvent(){
      this.$store.commit("setTransitionName", "turn-off")
    },
    pageChangeEvent(){
      let variablePool={
        startTime:Date.now()
      }
      let time=600  //超时时间定义  看具体需要多长时间
      if(document.visibilityState=='hidden') { //可以加上 如果页面切换时间停留超过1分钟，重新reload
        variablePool.startTime=Date.now()
        fqCommon.warn('页面切换出去,当前时间记录为：'+variablePool.startTime);
        // if(ws){
        //   ws.close(); //关闭websocket
        // }
      }else {
        variablePool.endTime=Date.now()
        let between=(variablePool.endTime-variablePool.startTime)/1000
        fqCommon.warn('页面切换回,当前时间记录为：'+variablePool.endTime,",时间相差了"+between+'秒钟');
        if(between>time){
          fqCommon.warn('切回来的时间停留超过了'+time+'秒，强制刷新');
          location.reload() //刷新页面
        }else{
          fqCommon.error('切回来的时间停留没有超过'+time+'秒，不做刷新');
        }
      }
    },
    initEvent(){
      // document.addEventListener('visibilitychange',this.pageChangeEvent);
    }
  }
}
</script>

<style lang="less">
@import './assets/less/main.less';
</style>
