<!--这里是头部组件-->
<template>
	<div class="fq-index-nav-component">
		<ul class="left">
			<li :class="{'active':nav=='index'}" @click="jumpPage('index')" v-text="langKey('首页')"></li>
            <li :class="{'active':nav=='exchange'}" @click="jumpExchange" v-text="langKey('现货交易')"></li>
            <li :class="{'active':nav=='otcorder'}"  @click="jumpPage('otcorder')" v-text="langKey('法币入场')"></li>
            <!-- <li :class="{'active':nav=='otc'}" @click="openPage('https://bita.io/',true)"  v-text="langKey('场外交易')"></li> -->
            <li :class="{'active':nav=='contract'}" @click="jumpPage('contract')" v-text="langKey('差价合约')"></li>
            <li :class="{'active':nav=='game'}" @click="jumpPage('game')" v-text="langKey('区块链游戏')"></li>

            <!-- <li :class="{'active':nav=='index'}">
				<router-link :to="{name:'index'}" v-text="langKey('首页')"></router-link>
			</li>
            <li :class="{'active':nav=='exchange'}" @click="jumpExchange" v-text="langKey('现货交易')">
			</li>
            <li :class="{'active':nav=='otcorder'}" >
				<router-link :to="{name:'otcorder'}" v-text="langKey('法币入场')"></router-link>
			</li>
            <li :class="{'active':nav=='otc'}">
				<a href="https://coinpay.do" target="_blank" v-text="langKey('场外交易')"></a>
			</li>
            <li :class="{'active':nav=='contract'}">
				<router-link :to="{name:'contract'}" v-text="langKey('差价合约')"></router-link>
			</li>
            <li :class="{'active':nav=='game'}">
				<router-link :to="{name:'game'}" v-text="langKey('区块链游戏')"></router-link>
			</li> -->
        </ul>
		<ul class="right">
            <li v-text="langKey('在线客服')"></li>
            <li v-text="langKey('公告中心')"></li>
            <li @click="jumpPage('merchant')" v-text="langKey('做市商')"></li>
            <!-- <li v-text="langKey('全自动上币')"></li> -->
            <li v-text="langKey('上币计划')"></li>
            <li  @click="openPage('https://tool.ubi.bi/',true)" v-text="langKey('区块链浏览器')"></li>
            <li @click="jumpPage('history')" v-text="langKey('历史版本')"></li>
        </ul>
	</div>
</template>

<script>
import fqCommon from '@/common/common';
	export default {
		name: 'fq-index-nav-component',
		data() {
			return {}
		},
		props: ['nav'],
		mounted(){

		},
		methods: {
			jumpExchange(){
				let ticker=this.$store.state.indexTradeTicker;
				if(ticker){
					let tickerObj={}				
					for(let i in ticker){
						tickerObj=ticker[i];
						break;
					}
					this.jumpPage('exchange',{
						basicToken:tickerObj.s0,
						targetToken:tickerObj.s1,
						pairId:tickerObj.pid,
						bazaarId:tickerObj.mid,
						// tokenId:tickerObj.id,
					})
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/less/components/common/fq-nav.less";
</style>
