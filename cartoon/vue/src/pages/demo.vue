<!--demo页面-->
<template>
    <div class="fq--page">
        <fq-header nav=""/>

        <fq-footer/>
    </div>
</template>

<script>    
    import FqHeader from '@/components/common/fq-header'
    import FqFooter from '@/components/common/fq-footer'
    import fqCommon from '@/common/common'
    export default {
        name: 'fq--page',
        components: { //组件传入
            FqHeader,
            FqFooter,
        },
        data() {
            return {
            }
        },
        mounted() {
            // this.$refs.fq_index_kline.init();
        },
        computed: {

        },
        methods: {

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
// @import "../assets/less/pages/index.less";
</style>
