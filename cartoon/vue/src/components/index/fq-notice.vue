<!--这里是首页公告组件-->
<template>
	<div class="fq-index-notice-component" :lang="lang">
        <div class="title" v-text="langKey('公告')">
        </div>
        <swiper class="swiper-box" ref="fq_swiper" :options="swiperOption" v-if="noticeList&&noticeList.length>0">
            <swiper-slide v-for="(item,index) in noticeList" :key="index">
                <li class="fq-swiper-notice" v-for="(notice,bIndex) in item" :key="'notice-'+bIndex" v-text="notice.title" @click="helpPage(notice.url,true,true)">
                </li>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>		
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import fqCommon from '@/common/common';
	export default {
		name: 'fq-index-notice-component',
		components:{
            swiper,
            swiperSlide,
        },
        data() {
            return {
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
                    // spaceBetween: 30,
                    // mousewheel: true,
                    pagination: false,
                },
                noticeList:[
                    // [
                    //     {name:'2018-10-31  DLE上线交易支付'},
                    //     {name:'2018-10-31  DLE上线交易支付'},
                    //     {name:'2018-10-31  DLE上线交易支付'},
                    // ],
                    // [
                    //     {name:'2019-10-31  DLE上线交易支付'},
                    //     {name:'2019-10-31  DLE上线交易支付'},
                    //     {name:'2018-10-31  DLE上线交易支付'},
                    // ],
                ],
            }
        },
        props: [],
        computed:{
            lang(){
                let lang=this.$store.state.lang
                this.queryNoticesList()
                return lang
                // return this.$store.state.getLang
            },
        },
		mounted(){            
            // this.queryNoticesList()
        },        
        destroyed(){
            let fq_swiper=this.$refs.fq_swiper
            if(fq_swiper){
                fq_swiper.swiper.destroy(true,true)
            }
        },
		methods: {
			queryNoticesList(){
                let that=this
                that.$store.dispatch('queryNoticesList',{
                    name:'ubi',
                    pageNo:1,
                }).then(({data})=>{
                    let {activities}=data
                    let a_len = activities.length
                    let noticeList = []
                    let len=3;
                    for(let i=0;i<a_len;i+=len){
                        let arr=activities.slice(i,i+len)
                        let aLen=arr?arr.length:0
                        // if(aLen<len){
                        //     for(let j=0;j<len-aLen;j++){
                        //         // arr.push({})
                        //     }
                        // }
                        noticeList.push(arr); 
                    }
                    if(noticeList&&noticeList.length>1){
                        that.swiperOption.autoplay=true
                    }else{
                        that.swiperOption.autoplay=false
                    }
                    that.noticeList=noticeList
                }).catch(err=>{
                    fqCommon.error('[Index][fq-notice][queryNoticesList]',err)
                })
            },
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../../assets/less/common/swiper.less';
@import "../../assets/less/components/index/fq-notice.less";
</style>
