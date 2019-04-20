<!--这里是尾部组件-->
<template>
	<van-tabbar v-model="active" @change="selectTab" class="fq-footer-component" :z-index="100">
		<van-tabbar-item icon=" icon icon-market">{{langKey('行情')}}</van-tabbar-item>
		<van-tabbar-item icon=" icon icon-info">{{langKey('微讯')}}</van-tabbar-item>
		<van-tabbar-item icon=" icon icon-exchange">{{langKey('交易')}}</van-tabbar-item>
		<van-tabbar-item icon=" icon icon-wallet">{{langKey('钱包')}}</van-tabbar-item>
		<van-tabbar-item icon=" icon icon-my">{{langKey('我的')}}</van-tabbar-item>
	</van-tabbar>
</template>

<script>
    import fqCommon from '@/common/common'
	export default {
		name: 'fq-footer',
		data() {
			return {
				active:0,
			}
		},
		props: [
			'nav'
		],
		created(){
			this.active=Number(this.nav||0)
		},
		mounted(){
		},
		computed:{
		},
		methods: {
			selectTab(index){
				let that=this
				switch(index){
					case 0:
						that.replacePage('index')
						break
					case 1:
						that.replacePage('news')
						break
					case 2:
						that.jumpExchange()
						break;
					case 3:
						that.replacePage('wallet')
						break;
					case 4:
						that.replacePage('my')
						break;
					default:
						that.replacePage('index')
				}
			},
			jumpExchange(){
				let ticker=this.$store.state.indexTradeTicker;
				if(ticker){
					let tickerObj={}				
					for(let i in ticker){
						tickerObj=ticker[i]
						break;
					}
					this.replacePage('exchange',{
						basicToken:tickerObj.s0,
						targetToken:tickerObj.s1,
						pairId:tickerObj.pid,
						bazaarId:tickerObj.mid,
						// tokenId:tickerObj.id,
					})
				}
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/less/components/common/fq-footer.less";
</style>
