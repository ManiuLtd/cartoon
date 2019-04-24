<!--首页组件-->
<template>
    <div class="fq-index-page">
        <van-nav-bar :z-index="99">
            <template slot="title">
                {{'漫画首页'}}
            </template>            
            <van-icon name="replay" slot="right" @click="refresh"/>
        </van-nav-bar>
        <fq-loading v-if="dataLoadingStatus"></fq-loading>
        <div class="flex-content">
            <h2>当前正在看的漫画为:</h2>
            <div class="van-list">
                <van-cell v-for="(item,key,index) in cartoonMap" :key="index" @click="jumpToDetail(item)">
                    <div class="img-box">
                        <img v-lazy="item.logo"/>
                        <p>{{item.name}}</p>
                        <p v-if="item.articleName"> {{item.articleName?'已看到'+item.articleName:''}}</p>
                    </div>
                </van-cell>
            </div>

            <h2>热门漫画列表:</h2>
            <van-list>
                <van-cell v-for="(item, index) in courselist" :key="index" @click="jumpToDetail(item)">
                    <div class="img-box">
                        <img v-lazy="item.logo"/>
                        {{item.name}}
                    </div>
                </van-cell>
            </van-list>
            <h2>好看的漫画热门更新推荐:</h2>
            <van-list>
                <van-cell v-for="(item, index) in hotUpdateList" :key="index" @click="jumpToDetail(item)">
                    <div class="img-box">
                        <img v-lazy="item.logo"/>
                        {{item.name}}
                    </div>
                </van-cell>
            </van-list>
            <h2>最近更新漫画:</h2>
            <van-list>
                <van-cell v-for="(item, index) in newUpdateList" :key="index" @click="jumpToDetail(item)">
                    <div class="img-box">
                        <img v-lazy="item.logo"/>
                        {{item.name}}
                    </div>
                </van-cell>
            </van-list>
            <van-tabs v-model="firstActive">
                <van-tab title="热门连载漫画" >
                    <van-list v-if="icmd_list&&icmd_list.length>0&&icmd_list[0]&&icmd_list[0].length>0">
                        <van-cell v-for="(item, index) in icmd_list[0]" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
                <van-tab title="经典完结漫画">
                    <van-list v-if="icmd_list&&icmd_list.length>0&&icmd_list[1]&&icmd_list[1].length>0">
                        <van-cell v-for="(item, index) in icmd_list[1]" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
                <van-tab title="最新上架漫画">
                    <van-list v-if="icmd_list&&icmd_list.length>0&&icmd_list[2]&&icmd_list[2].length>0">
                        <van-cell v-for="(item, index) in icmd_list[2]" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
                <van-tab title="全彩精选漫画">
                    <van-list v-if="icmd_list&&icmd_list.length>0&&icmd_list[3]&&icmd_list[3].length>0">
                        <van-cell v-for="(item, index) in icmd_list[3]" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
                <van-tab title="热门完结漫画">
                    <van-list v-if="icmd_list&&icmd_list.length>0&&icmd_list[4]&&icmd_list[4].length>0">
                        <van-cell v-for="(item, index) in icmd_list[4]" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
            </van-tabs>      

            <van-tabs v-model="topActive" sticky>
                <van-tab title="日本动漫排行">
                    <van-list v-if="topList&&topList.length>0&&topList[0]&&topList[0].length>0">
                        <van-cell v-for="(item, index) in topList[0]" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
                <van-tab title="国产漫画排行"> 
                    <van-list v-if="topList&&topList.length>0&&topList[1]&&topList[1].length>0">
                        <van-cell v-for="(item, index) in topList[1]" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
                <van-tab title="欧美漫画排行">
                    <van-list v-if="topList&&topList.length>0&&topList[2]&&topList[2].length>0">
                        <van-cell v-for="(item, index) in topList[2]" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                  </van-tab>
            </van-tabs>   
            <van-tabs v-model="secondActive" sticky>
                <van-tab title="日本好看的漫画">                    
                    <van-list v-if="icmd_txt_list&&icmd_txt_list.length>0&&icmd_txt_list&&icmd_txt_list.length>0">
                        <van-cell v-for="(item, index) in icmd_txt_list" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
                <van-tab title="国产好看的漫画">                    
                    <van-list v-if="icmd_cover_list&&icmd_cover_list.length>0&&icmd_cover_list[0]&&icmd_cover_list[0].length>0">
                        <van-cell v-for="(item, index) in icmd_cover_list[0]" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
                <van-tab title="欧美好看的动漫">
                    <van-list v-if="icmd_cover_list&&icmd_cover_list.length>0&&icmd_cover_list[1]&&icmd_cover_list[1].length>0">
                        <van-cell v-for="(item, index) in icmd_cover_list[1]" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
            </van-tabs>       
            <h2>漫画大全 - 按字母索引推荐</h2>     
            <van-tabs v-model="thirdActive" sticky>
                <van-tab :title="key" v-for="(list, key,index) in ichr_listMap" :key="index">                    
                    <van-list v-if="list&&list.length>0&&list&&list.length>0">
                        <van-cell v-for="(item, index) in list" :key="index" @click="jumpToDetail(item)">
                            <div class="img-box">
                                <img v-lazy="item.logo"/>
                                {{item.name}}
                            </div>
                        </van-cell>
                    </van-list>
                </van-tab>
            </van-tabs> 
        </div>
    </div>
</template>

<script>
    import fqCommon from '@/common/common'
    import FqLoading from '@/components/common/fq-loading'
    export default {
        name: 'fq-index-page',
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
                courselist:[
                    {logo:'http://www.chuixue.net/uploads/b/26754/20171126054854412.jpg',id:'26754',name:'食色大陆'},
                    {logo:'http://www.chuixue.net/uploads/b/26798/20171126054932300.jpg',id:'26798',name:'一人之下'},
                    {logo:'http://www.chuixue.net/uploads/b/20180421/20180421175154892.jpg',id:'30281',name:'重生之都市修仙'},
                ],
                hotUpdateList:[],//好看的漫画热门更新推荐
                icmd_list:[],//热门连载漫画
                newUpdateList:[],//最近更新漫画
                topList:[],//左边排行
                icmd_txt_list:[],//日本好看的动漫
                icmd_cover_list:[],//国产，欧美好看动漫
                ichr_listMap:{},//字母排序动漫
                firstActive:0,
                topActive:0,
                secondActive:0,
                thirdActive:0,
            }
        },
        mounted() {
            // fqCommon.setStatus(this,false)
            let that=this
            let indexData=this.$store.getters.getIndexData
            if(!indexData){
                that.cartoonContent()
            }else{
                let count=0
                for(let i in indexData){
                    if(i!='courselist'&&i!='ichr_listMap'){
                        let list=indexData[i]
                        that[i]=list
                        if(list&&list.length>0){
                            count++
                            break
                        }
                    }
                }
                // if(count>0){
                //     that.dataLoadingStatus=false
                //     setTimeout(()=>{
                //         that.cartoonContent()
                //     },1000*60)//1分钟后再获取数据
                // }else{
                //     that.cartoonContent()
                // }
            }
            that.dataLoadingStatus=false
        },
        computed: {
            cartoonMap(){
                return this.$store.getters.getCartoonMap
            },
        },
        methods: {
            // changeTab(index,title){
            //     // location.hash=index
            //     this.jumpPage('index',{type:index})
            // }
            refresh(){
                this.cartoonContent()
            },
            jumpToDetail(item){
                let that=this
                that.$store.dispatch('setCartoonMapByItem',{id:item.id,name:item.name,logo:item.logo})
                that.jumpPage('detail',{id:item.id},{name:encodeURIComponent(item.name)})
            },
            cartoonContent(){
                let that=this
                let url=encodeURIComponent('http://www.chuixue.net/')
                that.dataLoadingStatus=true
                that.$store.dispatch('cartoonContent',{url:url}).then(({data})=>{
                    that.dataLoadingStatus=false
                    // fqCommon.log(data)
                    let doc=$(data)
                    let hotUpdateListObj=doc.find('#hotUpdateList>ul>li')                    
                    let hotUpdateList=[]
                    $.each(hotUpdateListObj,(index,item)=>{
                        let a=$(item).find('a')
                        let img=$(a).find('img')
                        let href=a.attr('href')||''
                        let id=href.replace(/\/.*\/(\d+)\//g,($0,$1)=>{
                            return $1
                        })
                        let logo=img.attr('src')
                        if(logo.indexOf('loading.gif')>-1){
                            logo=img.attr('_src')
                        }
                        let name=img.attr('alt')
                        hotUpdateList.push({logo:logo,id:id,name:name})
                    })
                    that.hotUpdateList=hotUpdateList

                    let newUpdateObj=doc.find('.newUpdate>ul>li')
                    let newUpdateList=[]
                    $.each(newUpdateObj,(index,item)=>{
                        let a=$(item).find('.video')
                        let href=a.attr('href')||''
                        let id=href.replace(/\/.*\/(\d+)\//g,($0,$1)=>{
                            return $1
                        })
                        let logo='http://www.chuixue.net/'+a.attr('i')                       
                        let name=a.html()
                        newUpdateList.push({logo:logo,id:id,name:name})
                    })
                    that.newUpdateList=newUpdateList

                    let icmd_txt_listObj=doc.find('.icmd_txt_list li')
                    let icmd_txt_list=[]
                    $.each(icmd_txt_listObj,(index,item)=>{
                        let a=$(item).find('.video')
                        let href=a.attr('href')||''
                        let id=href.replace(/\/.*\/(\d+)\//g,($0,$1)=>{
                            return $1
                        })
                        let imgurl=a.attr('i')
                        let logo=imgurl.indexOf('http://')<0?'http://www.chuixue.net/'+imgurl:imgurl                   
                        let name=a.html()
                        icmd_txt_list.push({logo:logo,id:id,name:name})
                    })
                    that.icmd_txt_list=icmd_txt_list

                                        
                    let icmd_listObj=doc.find('#icmd_list>ul')
                    let icmd_list=[]
                    $.each(icmd_listObj,(index,item)=>{
                        let lis=$(item).find('li')
                        let list=[]
                        $.each(lis,(j,li)=>{
                            let a=$(li).find('.pic')
                            let img=$(a).find('img')
                            let href=a.attr('href')||''
                            let id=href.replace(/\/.*\/(\d+)\//g,($0,$1)=>{
                                return $1
                            })
                            let logo=img.attr('src')
                            if(logo.indexOf('loading.gif')>-1){
                                logo=img.attr('_src')
                            }
                            let name=img.attr('alt')
                            list.push({logo:logo,id:id,name:name})
                        })
                        icmd_list[index]=list
                    })
                    that.icmd_list=icmd_list


                    let topListObj=doc.find('.topList ul')
                    let topList=[]
                    $.each(topListObj,(index,item)=>{
                        let lis=$(item).find('li')
                        let list=[]
                        $.each(lis,(j,li)=>{
                            let a=$(li).find('.vtip')
                            // let img=$(a).find('i')
                            let href=a.attr('href')||''
                            let id=href.replace(/\/.*\/(\d+)\//g,($0,$1)=>{
                                return $1
                            })
                            let imgurl=a.attr('i')
                            let logo=imgurl.indexOf('http://')<0?'http://www.chuixue.net/'+imgurl:imgurl
                            // if(logo.indexOf('loading.gif')>-1){
                            //     logo=img.attr('_src')
                            // }
                            let name=a.html()
                            list.push({logo:logo,id:id,name:name})
                        })
                        topList[index]=list
                    })
                    that.topList=topList

                    let icmd_cover_listObj=doc.find('.icmd_cover_list ul')
                    let icmd_cover_list=[]
                    $.each(icmd_cover_listObj,(index,item)=>{
                        let lis=$(item).find('li')
                        let list=[]
                        $.each(lis,(j,li)=>{
                            let a=$(li).find('.pic')
                            let img=$(a).find('img')
                            let href=a.attr('href')||''
                            let id=href.replace(/\/.*\/(\d+)\//g,($0,$1)=>{
                                return $1
                            })
                            let logo=img.attr('src')
                            if(logo.indexOf('loading.gif')>-1){
                                logo=img.attr('_src')
                            }
                            let name=img.attr('alt')
                            list.push({logo:logo,id:id,name:name})
                        })
                        icmd_cover_list[index]=list
                    })
                    that.icmd_cover_list=icmd_cover_list

                    let ichr_listObj=doc.find('.ichr_list')
                    let ichr_listMap={}
                    $.each(ichr_listObj,(index,item)=>{
                        let lis=$(item).find('ul>li')
                        let h5=$(item).find('h5')
                        let key=h5.html()                      
                        let list=[]
                        $.each(lis,(j,li)=>{
                            let a=$(li).find('.video')
                            // let img=$(a).find('img')
                            let href=a.attr('href')||''
                            let id=href.replace(/\/.*\/(\d+)\//g,($0,$1)=>{
                                return $1
                            })
                            let imgurl=a.attr('i')
                            let logo=imgurl.indexOf('http://')<0?'http://www.chuixue.net/'+imgurl:imgurl
                            let name=a.html()
                            list.push({logo:logo,id:id,name:name})
                        })
                        ichr_listMap[key]=list
                    })
                    that.ichr_listMap=ichr_listMap

                    // fqCommon.error('icmd_cover_list',that.icmd_cover_list)
                    // let list=doc.find('div.pmedium.plist>ul li')
                    // let articleList=[]
                    // $.each(list,(index,item)=>{
                    //     let a= $(item).find('a')
                    //    let href=a.attr('href')
                    //    id=href.substring(href.lastIndexOf('/')+1,href.lastIndexOf('.html'))                       
                    //    let title=a.attr('title')

                    //     // fqCommon.log(id,title)
                    //    articleList.push({id:id,title:title})
                    // })
                    // that.articleList=articleList
                    // that.$nextTick(()=>{
                    //     that.scrollToCurrentArticle()
                    // })
                    that.$store.commit('setIndexData',{
                        hotUpdateList:that.hotUpdateList,
                        icmd_list:that.icmd_list,
                        courselist:that.courselist,
                        newUpdateList:that.newUpdateList,
                        topList:topList,//左边排行
                        icmd_txt_list:icmd_txt_list,//日本好看的动漫
                        icmd_cover_list:icmd_cover_list,//国产，欧美好看动漫
                        ichr_listMap:ichr_listMap,//字母排序动漫
                    })
                }).catch(err=>{
                    that.dataLoadingStatus=false
                    fqCommon.error('[Index][cartoonContent]',err)
                })
            },
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../assets/less/pages/index.less";
</style>
