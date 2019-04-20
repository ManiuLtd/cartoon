<!--这里是头部工具条组件-->
<template>
	<div class="fq-tools-component">
		<ul class="left">
            <li @click="jumpPage('ubi')" v-text="langKey('APP下载')"></li>
            <li class="no-click" v-text="langKey('欢迎来到UBi')"></li>
            <li v-if="!userInfo||!userInfo.userId" class="no-login-box">
                <span @click="visitorLogin" v-text="langKey('游客登录')"></span>
                |
                <span @click="jumpPage('login')" v-text="langKey('登录')"></span>
                |
                <span @click="jumpPage('reg')" v-text="langKey('注册')"></span>
            </li>            
            <li v-if="userInfo&&userInfo.userId" class="user-info">
                <!-- {{userInfo}}            -->
                <span v-text="userInfo.guest==1?userInfo.nickName:userInfo.mail"></span> <i class="el-icon-arrow-down"></i>
                <ul class="list">
                    <li @click="jumpPage('accountInfo')">{{langKey('用户中心')}}<i class="el-icon-arrow-right"></i></li>
                    <li @click="logout" v-text="langKey('退出')"></li>
                </ul>
            </li>
        </ul>
		<ul class="right">
            <li v-if="!!userInfo&&userInfo.userId" @click="jumpPage('orders')">
                <span v-text="langKey('委托管理')"></span>
            </li>
            <li v-if="!!userInfo&&userInfo.userId" class="list-box">
                <span v-text="langKey('资产管理')"></span> <i class="el-icon-arrow-down"></i>
                <ul class="list">
                    <li @click="jumpPage('myassets')" v-text="langKey('我的资产')"></li>
                    <li @click="qJumpPage('record',{type:'deposit'})" v-text="langKey('充值记录')"></li>
                    <li @click="qJumpPage('record',{type:'withdraw'})" v-text="langKey('提现记录')"></li>
                </ul>
            </li>
            <li v-if="!!userInfo&&userInfo.userId">
                <span v-text="langKey('资产估值')+':'+(currencyRate?currencyRate[1]:'')+(currencyRate&&totalAssets&&totalAssets.currency?legalFormat(Big(totalAssets.currency).times(Big(currencyRate[0])).toFixed()):'--')"></span> <i class="iconfont icon-shangsheng"></i>
            </li>
            <li class="msg-box" v-if="!!userInfo&&userInfo.userId">
                <el-popover
                    placement="bottom"
                    width="320"
                    popper-class="fq-tools-tooltip"
                    trigger="hover">
                    <ul class="msg-list">
                        <li class="title">
                            <span v-text="langKey('新消息')"></span>
                            <span class="red" v-text="unReadCount"></span>
                        </li>
                        <template v-if="userMsgList&&userMsgList.length>0">
                            <li v-for="(item,index) in userMsgList" :key="index">
                                <p class="msg" v-text="langKey(item.combinationInfo)"></p>
                                <p class="time" v-text="formatTime(Number(item.createTime),'YYYY-MM-DD HH:mm')"></p>
                            </li>
                        </template>
                        <li class="no-msg" v-if="!userMsgList||userMsgList.length<1">
                            <i class="fa fa-meiyouxiaoxiziyuan"></i>
                        </li>
                        <li class="btn-box">
                            <el-button type="text" @click="jumpPage('messagelist')" v-text="langKey('查看全部')"></el-button>
                            <el-button type="text" @click="markMsg" v-text="langKey('设置全部消息已读')" v1-if="unReadCount>0"></el-button>
                        </li>
                    </ul>
                    <div type="text" slot="reference">
                        <i class="el-icon-message"></i><span v-text="langKey('消息')"></span>
                        <i class="circle" v-if="unReadCount>0"></i>
                    </div>
                    <!-- <div class="msg-box" slot="reference">
                        <i class="el-icon-message"></i><span v-text="langKey('消息')"></span>
                        <i class="circle" v-if="unReadCount>0"></i>
                    </div> -->
                </el-popover>
            </li>
            <li class="list-box lang">
                <!-- <span v-text="langKey('CNY')"></span> <i class="el-icon-arrow-down"></i> -->
                <div class="title" :style="langMap[lang]&&langMap[lang].icon?'background-image:url('+langMap[lang].icon+')':''">{{langMap[lang]?langMap[lang].name:''}}<i class="el-icon-arrow-down"></i></div>
                <ul class="list">
                    <li v-for="(item,key,index) in langMap"
                        :key="index" @click="selectLang(key)" :style="item.icon?'background-image:url('+item.icon+')':''">{{item.name}}</li>
                </ul>
            </li>
            <li class="list-box currency">
                <!-- <span v-text="langKey('简体中文')"></span> <i class="el-icon-arrow-down"></i> -->
                <div class="title">{{currency}}<i class="el-icon-arrow-down"></i></div>
                <ul class="list" v-if="indexRate">
                    <li v-for="(item,key,index) in indexRate" :key="index" @click="selectCurrency(key)">{{key}}</li>
                </ul>
            </li>
            <li @click="clear" v-text="langKey('清除缓存')"></li>
        </ul>
	</div>
</template>

<script>
import fqCommon from '@/common/common';
import {Constants} from '@/common/env'
import { userInfo } from 'os';
	export default {
		name: 'fq-tools-component',
		data() {
			return {
                langMap: this.$store.state.langMap,
                unReadCount:0,//未读消息数
            }
		},
		props: [],
		computed:{
			indexRate(){
				return this.$store.getters.getIndexRate;
            },
            lang(){
				return this.$store.state.lang;
			},
			currency(){
				return this.$store.getters.getCurrentCurrency;
            },
            totalAssets(){
                return this.$store.state.totalAssets||{};
			},
            //当前货币兑换对象
            currencyRate(){
                return this.$store.state.currentRate;
            },
			userInfo(){                
				return this.$store.getters.getUserInfo||{}
            },
            //消息列表
            userMsgList(){
                let msgList=this.$store.state.userMsgList;
                if(msgList){
                    msgList=msgList.filter(item=>{
                        return item.isRead
                    })
                }
                return msgList
            }
        },
        created(){
          this.init()
        },
		mounted(){

		},
		methods: {
            init(){
                this.queryUserMsg()
                if(userInfo&&userInfo.userId){
                    this.queryUserUreadMsg()
                    this.assetsListFunc()
                }
            },
            visitorLogin(){
                let that=this
                that.$store.dispatch('visitorLogin').then(({data,headers})=>{
                    if(data.code=='02_001_0_002_01_005'){
                        let userInfo=data.data;
                        let token=headers[Constants.AUTHORIZATION]
                        userInfo.token=token;
                        userInfo.guest=1  //1代表为游客登录
                        that.$store.commit('setUserInfo',userInfo);
                        //初始化用户相关的websocket连接
                        that.$store.dispatch("initUserWebsocket",{});                        
                        that.jumpPage('accountInfo');
                    }else{
                        let errMsg=that.langKey(data.msg)
                        that.$notify({
                            message: that.langKey(errMsg),
                            type: 'error'
                        });
                    }
				}).catch(err=>{
                    
                })
            },
			selectCurrency(item){
				this.$store.commit("setCurrentCurrency",item)
				// fqCommon.log("selectCurrency---",item);
				// this.callInitialize();
			},
			selectLang(item){
				// this.currentLang=item
				this.$store.commit("setCurrentLang",item)
				// this.getIndexBanner()
				// fqCommon.log("selectLang---",item);
			},
			// getIndexBanner(){
			// 	this.$store.dispatch("getIndexBanner",{});
            // },
			// assetsListFunc(){
			// 	let that=this;
			// 	that.$store.dispatch('assetsList',{}).then(({data})=>{
			// 		if(data.err==0){
			// 			data=data.data||{}
			// 			let totalAssets={
			// 				btc: data.totalBtcVal, 
			// 				currency: data.totalUsdtVal
			// 			}
            //             that.$store.commit('setTotalAssets',totalAssets)
            //             that.$store.commit('setMyAssetsMap',myAssetsList)
			// 		}
			// 	}).catch(err=>{
			// 		fqCommon.error('[fq-tools][assetsList]',err)
			// 	})
			// },
            logout(){
                let that=this;
                that.$store.dispatch("logout",{}).then(data=>{
                    that.jumpPage('login')//退出登录 跳到登录界面
                }).catch(err=>{
                    fqCommon.error('[fq-tools][logout]',err)
                });                
            },
            queryUserMsg(){
                let that=this;
                that.$store.dispatch("queryUserMsg").then(({data})=>{
                    // if(data.code=='02_01_0_001_01_008'){
                    //     that.msgList=data.data?data.data.filter(item=>{
                    //         return item.isRead
                    //     }):null
                    // }
                }).catch(err=>{
                    fqCommon.error('[fq-tools][queryUserMsg]',err)
                }); 
            },
            queryUserUreadMsg(){
                let that=this;
                that.$store.dispatch("queryUserUreadMsg").then(({data})=>{
                    if(data.err==0){
                        data=data.data
                        that.unReadCount=data?data.unReadCount:0
                    }
                }).catch(err=>{
                    fqCommon.error('[fq-tools][queryUserUreadMsg]',err)
                }); 
            },
            //将未读消息设置为已读
            markMsg(){
                let that=this;
                that.$store.dispatch("markMsg").then(({data})=>{                    
                    that.unReadCount=0;
                    that.jumpPage('messagelist')
                }).catch(err=>{
                    fqCommon.error('[fq-tools][markMsg]',err)
                }); 
            },
            //清除所有缓存 
            clear(){
                let that=this
                localStorage.clear()
                that.$notify({
                    message: that.langKey('缓存清理成功'),
                    type: 'success'
                })
            }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/less/components/common/fq-tools.less";
</style>
