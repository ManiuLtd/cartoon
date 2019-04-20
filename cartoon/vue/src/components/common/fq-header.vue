<!--这里是头部组件-->
<template>
	<div class="fq-header-component">		
		<!-- <fq-tools/>
        <fq-search/>
        <fq-nav :nav="nav"/>
        <fq-themes-tips/> -->
	</div>
</template>

<script>
 import fqCommon from '@/common/common'

import FqTools from  '@/components/common/fq-tools'
import FqSearch from  '@/components/common/fq-search'
import FqNav from  '@/components/common/fq-nav'
import FqThemesTips from  '@/components/common/fq-themes-tips'

	export default {
		name: 'fq-header',
		data() {
			return {
				
			}
		},
        components:{
            FqTools,
            FqSearch,
            FqNav,
            FqThemesTips,
        },
		props: ['nav'],
		mounted() {
			
		},
        computed:{
			userInfo(){                
				return this.$store.getters.getUserInfo;
            },
        },
		created() {
		},
		methods: {
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/less/components/common/fq-header.less";
</style>
