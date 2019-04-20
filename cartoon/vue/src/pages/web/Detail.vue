<!--首页组件-->
<template>
    <div class="fq-detail-page">        
        <van-nav-bar :z-index="99">
            <!-- <van-icon class="touch-event" name="arrow-left" slot="left" @click="jumpPage('index')"/> -->
            <van-icon class="touch-event" name="arrow-left" slot="left" @click="historyBack()"/>
            <template slot="title">   
                {{name}}             
            </template>
            <van-icon name="replay" slot="right" @click="refresh"/>
        </van-nav-bar>
        <fq-loading v-if="dataLoadingStatus"></fq-loading>
        <van-list class="flex-content">
            <van-cell :class="{'active':cartoonMap[id]&&cartoonMap[id].articleId==item.id}" is-link v-for="(item, index) in articleList" :id="'article_'+item.id" :key="index" @click="jumpToPrevewPage(item)">
                {{item.title}}
            </van-cell>
        </van-list>
    </div>
</template>

<script>    
    // import FqFooter from '@/components/common/fq-footer'
    // import FqPlus from '@/components/common/fq-plus'
    // import parse5 from 'parse5'
    import FqLoading from '@/components/common/fq-loading'
    import $ from "jquery"
    import fqCommon from '@/common/common'
    export default {
        name: 'fq-detail-page',
        components: { //组件传入
            // FqFooter,
            FqLoading,
        },
        data() {
            return {
                dataLoadingStatus:true,
                condition:{
                    keywords:''
                },
                id:this.$route.params.id,                
                name:decodeURIComponent(this.$route.query.name),
                articleList:[
                ]
            }
        },
        mounted() {
            // this.getArticleList()
            let that=this
            let articleList=that.$store.getters.getArticleList
            that.articleList=articleList
            that.$nextTick(()=>{
                that.scrollToCurrentArticle()
            })
            that.dataLoadingStatus=false
        },
        computed: {
            cartoonMap(){
                return this.$store.getters.getCartoonMap||{}
            }
        },
        methods: {
            refresh(){
                this.getArticleList()
            },
            jumpToPrevewPage(item){
                let that=this
                that.$store.dispatch('setCartoonMapByItem',{id:that.id,articleId:item.id,articleName:item.title})
                that.jumpPage('preview',{id:that.id,aId:item.id},{name:encodeURIComponent(that.name),articleName:encodeURIComponent(item.title)})
            },
            getArticleList(){
                let that=this
                let {id}=this.$route.params
                that.dataLoadingStatus=true
                that.$store.dispatch('queryList',{id:id}).then(({data})=>{
                    that.dataLoadingStatus=false
                    let doc=$(data)
                    let list=doc.find('div.pmedium.plist>ul li')
                    // fqCommon.log(list)
                    let articleList=[]
                    $.each(list,(index,item)=>{
                        let a= $(item).find('a')
                       let href=a.attr('href')
                       id=href.substring(href.lastIndexOf('/')+1,href.lastIndexOf('.html'))                       
                       let title=a.attr('title')

                        // fqCommon.log(id,title)
                       articleList.push({id:id,title:title})
                    })
                    that.articleList=articleList
                    that.$store.commit('setArticleList',articleList)
                    that.$nextTick(()=>{
                        that.scrollToCurrentArticle()
                    })
                }).catch(err=>{
                    that.dataLoadingStatus=false
                    fqCommon.error('[Index][fq-global][webMyApiMarket]',err)
                })
            },
            scrollToCurrentArticle(){
                let that=this
                let {id}=that.$route.params
                let cartoonMap=that.cartoonMap
                let item=cartoonMap[id]
                if(item){
                   let articleId=item.articleId
                   let articleObj=document.getElementById('article_'+articleId)
                   articleObj&&articleObj.scrollIntoView()
                }
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/less/pages/web/detail.less";
</style>
