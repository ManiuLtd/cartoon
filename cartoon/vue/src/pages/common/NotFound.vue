<!--这里是头部组件-->
<template>
	<div class="fq-404-component">
		<!-- <fq-header/> -->
		<van-nav-bar :z-index="99">
			<van-icon class="touch-event" name="arrow-left" slot="left" @click="historyBack()"/>
		</van-nav-bar>
		<div class="content">
			<div class="image-box">
				<img src="/static/images/common/404.png" />
			</div>
			<div class="text-box">
				<div class="texts" v-text="langKey('很抱歉，您访问的页面不存在！')"></div>
				<!--<div class="texts">-->
					<!--<el-button class="btns backs" @click="$router.back()" v-text="langKey('返回上一页')"></el-button>-->
					<!--&lt;!&ndash;<el-button class="btns" @click="jumpPage('index')" v-text="langKey('返回首页')"></el-button>&ndash;&gt;-->
				<!--</div>-->
			</div>
		</div>
		<!-- <fq-footer/> -->
	</div>
</template>

<script>
	// import FqHeader from '@/components/common/fq-header'
	// import FqFooter from '@/components/common/fq-footer'
	export default {
		name: 'fq-404-component',
		data() {
			return {
			}
		},
		// props: [],
		components:{
			// FqHeader,
            // FqFooter,
		},
		methods: {
		}
	}
</script>
<style lang="less">
@import "../../assets/less/pages/common/notFound.less";
</style>
