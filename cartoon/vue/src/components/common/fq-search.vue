<!--这里是头部组件-->
<template>
	<div class="fq-index-search-component">
		<div class="logo pointer" @click="jumpPage('index')">

		</div>
		<div class="logo-txt" v-text="langKey('UBi.Bi')">

		</div>
		<!-- <el-input :placeholder="langKey('请输入内容')">
			<template slot="append">{{langKey('搜索')}}</template>
		</el-input> -->
		<el-select filterable @change="selectMarket" popper-class="el-select-fq-search" value-key="pid" v-model="condition.trade" slot="prepend" placeholder="">
			<el-option :label="item.s0+'/'+item.s1" :value="item" v-for="(item,key) in indexTradeTicker" :key="key">
				<div class="left">
					<span v-text="item.s0"></span>/<span v-text="item.s1"></span>
				</div>
				<div class="right">
					<span :class="{'up':item.cp&&item.cp.c0>item.cpp,'down':item.cp&&item.cp.c0<item.cpp}" v-text="item.cp?toBig(item.cp.c0):'0.00'"></span>&nbsp;
					<span v-text="currencyRate&&item.cp?currencyRate[1]+legalFormat(Big(item.cp.c1).times(Big(currencyRate[0])).toFixed()):'--'"></span>
				</div>
			</el-option>
		</el-select>
		<el-button slot="append" icon="el-icon-search"></el-button>
		<div class="qrcode" v-text="langKey('下载手机UBi')">
			
		</div>
	</div>
</template>

<script>
import fqCommon from '@/common/common';
	export default {
		name: 'fq-index-search-component',
		data() {
			return {
				condition:{
					trade:null,
				}
			}
		},
		props: [],
		computed:{
			indexTradeTicker(){
				return this.$store.state.indexTradeTicker||{}
			},
            //当前货币兑换对象
            currencyRate(){
                return this.$store.state.currentRate;
            },
		},
		mounted(){

		},
		methods: {
			selectMarket(item){
				let indexTradeTicker=this.indexTradeTicker
                window.open('/exchange/exchange/'+item.s0+'/'+item.s1+'/'+item.pid+'/'+item.mid);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/less/components/common/fq-search.less";
</style>