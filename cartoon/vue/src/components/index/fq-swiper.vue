<template>
    <!-- swiper -->
    <div class="fq-index-swiper-component" :lang="lang">
      <swiper class="swiper-box" ref="fq_swiper" :options="swiperOption" v-if="bannerList&&bannerList.length>0">
        <swiper-slide v-for="(item,index) in bannerList" :key="index">
            <!-- <div class="fq-swiper-banner" v-for="(item,index) in 4" :key="index" v-lazy:background-image="'https://pubimgs.0e.io/fqpie/ubi/admin/20180920/03dd66e5-adf7-4d14-aedb-bbff638bcb06.png'"></div> -->
            <div class="fq-swiper-banner" v-for="(banner,bIndex) in item" :key="'banner-'+bIndex" :title="banner.title" @click="jumpPage(banner.url,true)" :style="banner.content?'background-image:url('+banner.content+')':''">
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import fqCommon from '@/common/common'
export default {
    name: 'fq-index-swiper',
    components:{
        swiper,
        swiperSlide,
    },
    data() {
        return {
            // lang:this.$store.state.lang,
            swiperOption: {
                direction: 'vertical',
                slidesPerView: 1,
                loop : true,
                // loopAdditionalSlides:1,
                observer:true,
                observeParents:true,
                autoplay: {
                    delay: 3000,
                    // stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // on: {
                //     slideChangeTransitionEnd: function(){
                //     alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                //     },
                // },
                // spaceBetween: 30,
                // mousewheel: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            bannerList:[],
        }
    },
    // props: ['headTitle', 'goBack', 'goUrl', 'wechat', 'cmall', 'rightText','grayText'],
    mounted(){

    },
    // watch:{
    //     lang(newVal,oldVal){
    //         if(newVal!=oldVal){
    //             alert('切换语言')
    //             this.getIndexBanner()
    //         }
    //     }
    // },
    computed:{
        lang(){
            let lang=this.$store.state.lang
            this.getIndexBanner()
            return lang
            // return this.$store.state.getLang
        },
        // bannerList(){
        //     let bannerList=this.$store.state.indexBannerList||[];
        //     if(bannerList&&bannerList.length>1){
        //         this.swiperOption.autoplay=true
        //         this.swiperOption.pagination={
        //             el: '.swiper-pagination',
        //             clickable: true
        //         }
        //     }else{
        //         this.swiperOption.autoplay=false
        //         this.swiperOption.pagination=false
        //     }
        //     return bannerList
        // }
    },
    created() {
        // this.getIndexBanner()
    },
    destroyed(){
        let fq_swiper=this.$refs.fq_swiper
        if(fq_swiper){
            fq_swiper.swiper.destroy(true,true)
        }
    },
    methods: {
        getIndexBanner(){
            let that=this
            that.$store.dispatch("getIndexBanner",{}).then(({data})=>{
                // fqCommon.log("$$$$$$$$$$$$$$$",data)
                let {records}=data
                if(records){
                    let a_len = records.length;
                    let bannerList = [];   
                    let len=4;
                    for(let i=0;i<a_len;i+=len){
                        let arr=records.slice(i,i+len);
                        let aLen=arr?arr.length:0;
                        if(aLen<len){
                            for(let j=0;j<len-aLen;j++){
                                arr.push({});
                            }
                        }
                        bannerList.push(arr); 
                    }
                    if(bannerList&&bannerList.length>1){
                        that.swiperOption.autoplay=true
                        that.swiperOption.pagination={
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    }else{
                        that.swiperOption.autoplay=false
                        that.swiperOption.pagination=false
                    }
                    that.bannerList=bannerList
                }
            }).catch(err=>{
                fqCommon.error('[Index][fq-swiper][getIndexBanner]',err)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
// @import "../assets/less/common.less";
@import '../../assets/less/common/swiper.less';
@import '../../assets/less/components/index/fq-swiper.less';
</style>

