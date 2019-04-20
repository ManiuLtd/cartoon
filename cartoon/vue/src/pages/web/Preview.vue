<!--首页组件-->
<template>
    <div class="fq-preview-page">
        <van-nav-bar :z-index="99">
            <!-- <van-icon class="touch-event" name="arrow-left" slot="left" @click="jumpPage('detail',{id:id})"/> -->
            <van-icon class="touch-event" name="arrow-left" slot="left" @click="historyBack()"/>
            <template slot="title">  
                <p>{{name}}</p>
                <p class="sub-title">{{articleName}} </p>
            </template>
            <van-icon name="replay" slot="right" @click="refresh"/>
        </van-nav-bar>
        <fq-loading v-if="dataLoadingStatus"></fq-loading>
        <van-list class="flex-content">
            <img v-lazy="item" v-for="(item, index) in imageList" :key="index" @click="imagePreview(index)">
        </van-list>
    </div>
</template>

<script>
    import $ from "jquery"
    import { ImagePreview } from 'vant'
    import fqCommon from '@/common/common'
    import FqLoading from '@/components/common/fq-loading'
    import {URL} from '@/common/env'
    import { Base64 } from 'js-base64'
    export default {
        name: 'fq-preview-page',
        components: { //组件传入
            // FqFooter,
            FqLoading,
        },
        data() {
            return {
                dataLoadingStatus:true,
                name:decodeURIComponent(this.$route.query.name),
                articleName:decodeURIComponent(this.$route.query.articleName),
                condition:{
                    keywords:''
                },
                id:this.$route.params.id,    
                lyhzh:'',            
                imageList:[
                ]
            }
        },
        mounted() {
            this.cartoonPreview()
        },
        computed: {
        },
        methods: {
            refresh(){
                this.cartoonPreview()
            },
            getImageServer(){
                let that=this
                let {id,aId}=that.$route.params
                let imageServer="http://pic.csc1998.com/"
                //if (current_img_base.indexOf('2017/12/05/12/') != -1  ) {
                let lyhzh=that.lyhzh
                if (aId>=519253) {
                    imageServer="http://2.csc1998.com/"
                }else{
                    if (lyhzh=="zj"||lyhzh=="517"||lyhzh=="930"||lyhzh=="zjurl"||lyhzh=="zjwb") {
                        imageServer="http://pic.csc1998.com/"                
                    }
                }
                return imageServer
            },
            imagePreview(index){
                let that=this
                ImagePreview({
                    images: that.imageList,
                    startPosition:index,
                    onClose() {
                        // do something
                    }
                });
            },
            cartoonPreview(){
                let that=this
                let {id,aId}=this.$route.params
                that.dataLoadingStatus=true
                that.$store.dispatch('cartoonPreview',{id:id,articleId:aId}).then(({data})=>{
                    that.dataLoadingStatus=false
                    // var comicname = "食色大陆";
                    // var viewid = "488363";
                    // var viewtype = "1";
                    // var lyhzh = "zjwb";
                    // var viewname = "221、京城大少！";
                    // fqCommon.error('packed',packed)
                    let info=data.substring(data.indexOf('var ret_classurl'),data.indexOf('var photosr = new Array();'))
                    let comicname=info.substring(info.indexOf('var comicname'),info.indexOf('var viewid')).replace(/.*comicname\s*=\s*"(.*?)".*/gi,($0,$1)=>{
                        return $1
                    })
                    let viewid=info.substring(info.indexOf('var viewid'),info.indexOf('var viewtype')).replace(/.*viewid\s*=\s*"(.*?)".*/gi,($0,$1)=>{
                        return $1
                    })
                    let lyhzh=info.substring(info.indexOf('var lyhzh'),info.indexOf('var viewname')).replace(/.*lyhzh\s*=\s*"(.*?)".*/gi,($0,$1)=>{
                        return $1
                    })
                    that.lyhzh=lyhzh
                    let viewname=info.substring(info.indexOf('var viewname')).replace(/.*viewname\s*=\s*"(.*?)".*/gi,($0,$1)=>{
                        return $1
                    })
                    // fqCommon.error(comicname,viewid,lyhzh,viewname)
                    // fqCommon.error('##########',comicname)
                    let photosr=[]
                    let packed=data.substring(data.indexOf('packed="'),data.indexOf('eval(eval(base64decode(packed)'))
                    if(packed){
                        packed=packed.replace(/.*packed\s*=\s*"(.*?)".*/gi,($0,$1)=>{
                            return $1
                        })
                        packed=Base64.decode(packed)
                        eval(eval(packed.slice(4)))
                        photosr&&(photosr=photosr.filter((item)=>{
                            return !!item
                        }).map((item)=>{
                            return URL.cartoonPreviewImgUrl+encodeURIComponent(that.getImageServer()+item)
                        }))
                        // fqCommon.error('##########',photosr)
                    }else{
                        let script=data.substring(data.indexOf('photosr['),data.indexOf('var maxpages=photosr'))               
                        let scripts=script.split(';')
    
                        scripts.forEach((item,index)=>{
                            let img=item.replace(/photosr\[\d+\]\s*=\s*"(.*)"/,($0,$1)=>{
                                return URL.cartoonPreviewImgUrl+encodeURIComponent(that.getImageServer()+$1)
                            })
                            if(img){
                                photosr.push(img)
                            }
                        })
                    }
                    that.imageList=photosr
                }).catch(err=>{
                    that.dataLoadingStatus=false
                    fqCommon.error('[Index][fq-global][webMyApiMarket]',err)
                })
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/less/pages/web/preview.less";
</style>
