<!--这里是头部组件-->
<template>
	<div class="fq-no-captcha-component" ref="fq_no_captcha_component" :lang="lang">
		
	</div>
</template>

<script>
import fqCommon from '@/common/common'
let variablePool={}
variablePool.languageMap={
	'ZH-CN':'cn',//简体中文
	'EN':'en',//英文
	'ar_SA':'ar_SA',//阿拉伯文
	'ar_SA':'de_DE',//德文
	'ar_SA':'es_ES',//西班牙文
	'ar_SA':'fr_FR',//法文
	'ar_SA':'in_ID',//印尼语
	'ar_SA':'it_IT',//意大利文
	'ar_SA':'iw_HE',//希伯来语
	'ar_SA':'ja_JP',//日文
	'ar_SA':'ko_KR',//韓文
	'ar_SA':'nl_NL',//荷蘭文
	'ar_SA':'pt_BR',//波蘭文
	'ar_SA':'ru_RU',//俄文
	'ar_SA':'th_TH',//泰文
	'ar_SA':'tr_TR',//土耳其文
	'ar_SA':'vi_VN',//越南文
	'ar_SA':'tw',//繁体中文
}
	export default {
		name: 'fq-no-captcha-component',
		data() {
			return {
				noCaptcha:null,
			}
		},
		//appkey 控件使用appkey  scene 使用场景  enabled 是否启用   language 语言
		props: ['appkey','scene','enabled','language'],
		created(){
						
		},
		mounted(){
			let that=this
			let id='UBi_h5_no_captcha'
			let dom = document.getElementById(id)
			if(dom){
				that.init()
				return
			}
			let c = document.createElement('script')
			c.type = 'text/javascript'
			c.async = true
			c.id=id
			let date=new Date(),year=date.getFullYear(),month=date.getMonth()+1,day=date.getDate()
			let t=year+''+month+''+day
			c.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + (that.lang=='ZH_CN'?'g.alicdn.com/sd/ncpc/nc.js?t=':'aeis.alicdn.com/sd/ncpc/nc.js?t=')+t
			let s = document.getElementsByTagName('script')[0]
			s.parentNode.insertBefore(c, s)
			c.onload=function(){
				that.init()
			}
			c.onerror=function(){
				fqCommon.error('error')
			}
		},
		computed:{
			lang(){
				let that=this
				let lang=that.$store.state.lang||''
				let language=variablePool.languageMap&&variablePool.languageMap[lang]||'en'
				if(that.noCaptcha){
					that.init(language)
				}
				return language
			}
		},
		destroyed(){
			variablePool.language=''
			if(this.noCaptcha){//退出销毁用例
				this.noCaptcha.destroy()
			}
		},
		methods: {
			init(lang){
				let that=this
				let langTemp=(lang||that.language||that.lang).toLowerCase()
				if(variablePool.language==langTemp){
					return
				}
				variablePool.language=langTemp
				let $fq_no_captcha_component=that.$refs['fq_no_captcha_component']
				let time=new Date().getTime()
				let id='fq_no_captcha_component'+time
				if($fq_no_captcha_component){
					$fq_no_captcha_component.id=id
				}
				let nc_token = [that.appkey, time, Math.random()].join(':')
				let enabled=that.enabled
				if(!enabled){
					enabled=true
				}
				if(that.noCaptcha){
					that.noCaptcha.destroy()
				}
				// fqCommon.error(document.getElementById(id),'00000000000000')
				that.noCaptcha=new noCaptcha({
					renderTo: '#'+id,// required
					appkey: that.appkey,// required
					scene: that.scene,// required
					token: nc_token,// required
					// trans: {"key1": "code200"},//业务键字段。您可以不写此字段，也可以按照下文中”问题排查与错误码”部分文档配置此字段，便于线上问题排查
					// elementID: ["usernameID"],//通过Dom的ID属性自动填写trans业务键，您可以不写此字段，也可以按照下文中”问题排查与错误码”部分文档配置此字段，便于线上问题排查
					// is_Opt: 0,//是否自己配置底层采集组件。如无特殊场景请保持写0或不写此项。默认为0
					// customWidth:300,//滑动条的长度，建议预留300像素以上
					language: langTemp,//语言。PC场景默认支持18国语言，详细配置方法请见下方”自定义文案与多语言”部分。默认为cn(中文)
					isEnabled: enabled,//是否启用，无特殊场景请默认写true。默认为true
					timeout: 10000,//内部网络请求的超时时间，一般不需要改，默认值为3000ms
					times: 5,//允许服务器超时重复次数，默认5次
					apimap: {//用于自己指定滑动验证各项请求的接口地址。如无特殊情况，请不要配置这里的apimap
						// 'analyze': '//a.com/nocaptcha/analyze.jsonp',
						// 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
					},
					callback: function (data) {//前端滑动验证通过时会触发此回调，您可以在这个回调中将token、sessionid、sig记录下来，随业务请求带到您的server端调用验签
						fqCommon.log(data)
			            //此处需注意：获取回调值后，请求接口时一并传过去，可能设置变量时要设置全局 
						if(!data.scene){
							data.scene=that.scene
						}
						that.$emit("noCaptchaCallback",data)
					}
				})

				// that.noCaptcha.upLang('cn', {
				// 	'_startTEXT':that.langKey("请按住滑块，拖动到最右边"),
				// 	'_yesTEXT': that.langKey("验证通过"),
				// 	'LOADING':that.langKey("加载中..."),//加载
				// 	'_error300': that.langKey("哎呀，出错了，点击")+"<a href=\"javascript:__nc.reset()\">"+that.langKey("刷新")+"</a>再来一次",
    			// 	'_errorNetwork': that.langKey("网络不给力，请")+"<a href=\"javascript:__nc.reset()\">"+that.langKey("点击刷新")+"</a>",
				// 	'SLIDER_LABEL': that.langKey("请向右滑动验证"),//等待滑动
				// 	'CHECK_Y':that.langKey("验证通过"),//通过
				// 	'ERROR_TITLE':that.langKey("非常抱歉，这出错了..."),//拦截
				// 	'CHECK_N':that.langKey("验证未通过"), //准备唤醒二次验证
				// 	'OVERLAY_INFORM':that.langKey("经检测你当前操作环境存在风险，请输入验证码"),//二次验证
				// 	'TIPS_TITLE':that.langKey("验证码错误，请重新输入")//验证码输错时的提示
				// })

				that.noCaptcha.reset()//请务必确保这里调用一次reset()方法			
			},
			reset(){
				let that=this
				if(that.noCaptcha){
					that.noCaptcha.reset()
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/less/components/common/fq-no-captcha.less";
</style>
