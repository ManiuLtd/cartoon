<!--这里是头部组件-->
<template>
    <div class="fq-themes-tips-component" v-if="themeStatus!=1">
        <div class="theme-content">
            <div class="theme-title" v-text="langKey('亲爱的{name}，为了保护您的眼睛，系统智能为您切换界面风格。您也可以在 个人设置 里设置。',{name:userInfo?userInfo.nickName:''})"></div>
            <div class="theme-btn-box">
                <el-button @click="switchTheme('auto')">
                    <i class="el-icon-loading" v-if="!!submitStatus"></i>{{langKey('喜欢，请为我自动切换')}}
                </el-button>
                <el-button @click="switchTheme('light')">
                    <i class="el-icon-loading" v-if="!!submitStatus"></i>{{langKey('不喜欢，改回浅色版本')}}
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
import fqCommon from '@/common/common'
	export default {
		name: 'fq-themes-tips-component',
		data() {
			return {
                submitStatus:false,
            }
		},
		props: [],
        computed:{
            userInfo(){
                let userInfo= this.$store.getters.getUserInfo
                return userInfo
            },
            themeStatus(){
                return this.$store.getters.getThemeStatus
            }
        },
        destroyed(){
            clearTimeout(that.timeWatchTimeoutId)
            clearTimeout(that.autoThemeTimeWatchTimeTimeoutId)
        },
        created(){
        },
		mounted(){
            this.initEvent()
        },
		methods: {
            //时间监控事件
            timeWatch(){
                let that=this
                let userInfo=that.$store.getters.getUserInfo
                let themeStatus=that.$store.getters.getThemeStatus//存储切换主题弹窗状态
                if(themeStatus==1){
                    clearTimeout(that.timeTimeoutId)
                    return 
                }
                if(themeStatus!=1&&userInfo&&userInfo.userId&&userInfo.userTheme!='auto'){
                    let hour=new Date().getHours()
                    let userInfo=that.$store.getters.getUserInfo
                    let themeStatus=that.themeStatus
                    if(hour<8||hour>=19){//切换为深色
                        themeStatus=0
                    }else{//切换为浅色
                        themeStatus=1
                    }
                    that.$store.commit('setThemeStatus',themeStatus)
                    that.timeWatchTimeoutId=setTimeout(()=>{
                        that.timeWatch()
                    },60*1000)//1分钟跑一次
                }
            },
            switchTheme(theme){
                this.personThemeSetting(theme)
            },
            personThemeSetting(theme){
				let that=this
				that.submitStatus=true
				that.$store.dispatch('personThemeSetting',{
					userThemeTypeEnum: theme?theme.toUpperCase():''
				}).then(({data})=>{
					that.submitStatus=false
					if(data.err==0){
                        let userInfo=that.$store.getters.getUserInfo||{}
                        userInfo.userTheme=theme
                        if(theme=='auto'){
                            let hour=new Date().getHours()
                            if(hour<8||hour>=19){//切换为深色
                                userInfo.pageUserTheme='dark'
                            }else{//切换为浅色
                                userInfo.pageUserTheme='light'
                            }
                        }else{
                            userInfo.pageUserTheme=theme
                        }
                        that.$store.commit('setUserInfo',userInfo)
                        that.$store.commit('setThemeStatus',1)
						that.$notify({
							message: that.langKey('设置成功'),
							type: 'success'
						});
					}else{
						that.$notify({
							message: that.langKey('设置失败'),
							type: 'error'
						});
					}
				}).catch(err=>{
					fqCommon.error('[fq-themes-tips][personSetting]',err)
					that.submitStatus=false
				})
			},
            //自动切换主题监控
            autoThemeTimeWatch(){
                let that=this
                let userInfo=that.$store.getters.getUserInfo
                let themeStatus=that.$store.getters.getThemeStatus//存储切换主题弹窗状态
                if(themeStatus==1&&userInfo&&userInfo.userId&&userInfo.userTheme=='auto'){
                    let hour=new Date().getHours()
                    let userInfo=that.$store.getters.getUserInfo
                    if(hour<8||hour>=19){//切换为深色
                        userInfo.pageUserTheme='dark'
                        that.$store.commit('setUserInfo',userInfo)
                    }else{//切换为浅色
                        userInfo.pageUserTheme='light'
                        that.$store.commit('setUserInfo',userInfo)
                    }
                    that.autoThemeTimeWatchTimeTimeoutId=setTimeout(()=>{
                        that.autoThemeTimeWatch()
                    },60*1000)//1分钟跑一次
                }
            },
            initEvent(){
                let that=this
                that.autoThemeTimeWatch()
                that.timeWatch()                
            }
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/less/components/common/fq-themes-tips.less";
</style>
