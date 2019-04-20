<!--这里是输入框步进组件-->
<template>
	<div class="fq-stepper-component">
        <slot name="minus">
            <i class="fq-stepper-minus" @click="handlerMinus"></i>
        </slot>
        <input class="fq-stepper-input"
        :type="type"
        v-bind="$attrs"
        :disabled="disabled"
        :readonly="readonly"
        ref="input"
        :autocomplete="autocomplete"
         @change="handlerChange"
         @clear="clear"
         @input="handlerInput"
         @blur="handlerBlur"
         @focus="handlerFocus">
        <!-- <van-icon name="cross"></van-icon> -->
        <slot name="plus">
            <i class="fq-stepper-plus" @click="handlerPlus"></i>
        </slot>
	</div>
</template>

<script>
import fqCommon from '@/common/common';
	export default {
		name: 'fq-stepper-component',
		data() {
			return {}
		},
		props: {
            value: [String, Number],
            size: String,
            form: String,
            disabled: Boolean,
            readonly: Boolean,
            type: {
                type: String,
                default: 'text'
            },
            autocomplete: {
                type: String,
                default: 'off'
            },
            validateEvent: {
                type: Boolean,
                default: true
            },
            label: String,
            clearable: {
                type: Boolean,
                default: false
            },
            tabindex: String
        },
		mounted(){

		},
		methods: {
            handlerMinus(){
                let that=this
                let input=that.$refs.input
                let val=input.value
                let attrs=that.$attrs
                let step=attrs['step']
                let min=attrs['min']
            },
            handlerPlus(){
                let that=this
                let input=that.$refs.input
                let attrs=that.$attrs

            },
			handlerChange($event){
                this.$emit('change', $event.target.value);
            },
			handlerInput($event){
                const value = $event.target.value;
                this.$emit('input', value);
            },
			handlerFocus($event){
                this.$emit('focus', $event);
            },
			handlerBlur($event){
                 this.$emit('blur', $event);
            },
            clear(){
                this.$emit('input', '');
                this.$emit('change', '');
                this.$emit('clear');
            }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/less/components/common/fq.stepper.less";
</style>
