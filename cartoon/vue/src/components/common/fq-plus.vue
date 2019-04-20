<!--这里是头部加号组件-->
<template>
	<div class="fq-plus-component">
        <div class="plus-box">
            <van-icon name="plus" class="icon-plus pointer" @click.stop="showSelectListStatus=!showSelectListStatus"/>
            <ul class="item-box" v-if="!!showSelectListStatus">
                <li @click.stop="scan()">
                    <van-icon name=" icon icon-wallet-scan"/>
                    {{langKey('扫一扫')}}
                </li>
                <li @click.stop="">
                    <van-icon name=" icon icon-wallet-pay"/>
                    {{langKey('付币')}}
                </li>
                <li @click.stop="">
                    <van-icon name=" icon icon-wallet-cash"/>
                    {{langKey('收币')}}
                </li>
                <li @click.stop="">
                    <van-icon name=" icon icon-wallet-transfer"/>
                    {{langKey('划转')}}
                </li>
            </ul>
        </div>
	</div>
</template>

<script>
import fqCommon from '@/common/common';
	export default {
		name: 'fq-index-search-component',
		data() {
			return {
                showSelectListStatus:false,//显示下拉列表
				// condition:{
				// 	trade:null,
				// }
			}
		},
		props: [],
		computed:{
			// indexTradeTicker(){
			// 	return this.$store.state.indexTradeTicker||{}
			// },
            // //当前货币兑换对象
            // currencyRate(){
            //     return this.$store.state.currentRate;
            // },
		},
		mounted(){
            let that=this
            document.addEventListener('click',that.initEvent)
        },        
		destroyed() {
            let that=this
			document.removeEventListener('click',that.initEvent)
		},
		methods: {
            initEvent(){
				let that=this
				that.showSelectListStatus=false
            },
            scan(){
                let that=this
                fqCommon.scanQrcode(that,(msg)=>{
                    if(msg){
                        that.$toast(msg)
                    }
                    that.initEvent()
                },(err)=>{
                    that.initEvent()
                })
            },
			// selectMarket(item){
			// 	let indexTradeTicker=this.indexTradeTicker
            //     window.open('/exchange/exchange/'+item.s0+'/'+item.s1+'/'+item.pid+'/'+item.mid);
            // }            
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/less/components/common/fq-plus.less";
</style>