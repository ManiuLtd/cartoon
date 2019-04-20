<!--这里是loading组件-->
<template>
	<div class="fq-loading-component" :class="type==1?'no-bg':''">
        <!-- <div class="fq-loading-component-box">
            <object type="image/svg+xml" data="/static/images/logo_loading.svg">
                <img src="/static/images/logo.png" width="78" height="78">
            </object>
        </div> -->
		<div class="loader">
			<div class="loader-inner">
				<div class="loader-line-wrap">
					<div class="loader-line"></div>
				</div>
				<div class="loader-line-wrap">
					<div class="loader-line"></div>
				</div>
				<div class="loader-line-wrap">
					<div class="loader-line"></div>
				</div>
				<div class="loader-line-wrap">
					<div class="loader-line"></div>
				</div>
				<div class="loader-line-wrap">
					<div class="loader-line"></div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
    import fqCommon from '@/common/common'
	export default {
		name: 'fq-loading-component',
		data() {
			return {
            }
		},
		props: ['type'],
		mounted(){
		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/less/components/common/fq-loading.less";
</style>
