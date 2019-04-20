<!--这里是语言切换组件-->
<template>
	<div class="fq-language-component">
		<div class="la-title" :style="langMap[lang]&&langMap[lang].icon?'background-image:url('+langMap[lang].icon+')':''">{{langMap[lang].name}}<i class="el-icon-caret-bottom"></i></div>
        <ul class="la-list">
            <li v-for="(item,key,index) in langMap"
                :key="index" @click="selectLang(key)" :style="langMap[key]&&langMap[key].icon?'background-image:url('+langMap[key].icon+')':''">{{item.name}}</li>
        </ul>
	</div>
</template>

<script>
 import fqCommon from '@/common/common'

	export default {
		name: 'fq-language-component',
		data() {
			return {
				langMap: this.$store.state.langMap,
			}
		},
        components:{
        },
		// props: ['nav'],
		mounted() {
			
		},
        computed:{			
            lang(){
				return this.$store.state.lang;
			},
        },
		created() {
		},
		methods: {
			selectLang(item){
				this.$store.commit("setCurrentLang",item)
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/less/components/common/fq-language.less";
</style>
