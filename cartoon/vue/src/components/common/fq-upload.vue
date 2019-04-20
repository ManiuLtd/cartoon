<!--这里是头部组件-->
<template>
        <!-- :show-file-list="showFileList||false" -->
        <!-- :auto-upload="autoUpload" -->
        <!-- :action="action" -->
        <!-- :headers="uploadHeaders" -->
        <!-- :data="data" -->
	<van-uploader
        class="fq-upload-component"
        :disabled="disabled"
        :accept="accept"
        @oversize="onExceed"
        :after-read="onSuccess"        
        :before-read="beforeUpload">
        <!-- <i class="el-icon-plus"></i> -->
        <slot></slot>
    </van-uploader>
</template>

<script>
import fqCommon from '@/common/common';
import {Constants} from '@/common/env'
	export default {
		name: 'fq-upload-component',
		data() {
			return {}
		},
        props: {
            accept:{
                type:String,
                default:'jpg,gif,png'
            },
            action:{
                type:String,
                required:true,
            },
            autoUpload:{
                type:Boolean,
                default:true,
            },
            data:{
                type:Object,
            },   
            uploadHeaders:{
                type:Object,
                default:function(){
                    return {}
                } 
            },
            disabled:{
                type:Boolean,
                default:false,
            }
        },
        computed:{
            // userInfo(){
			// 	let userInfo=this.$store.getters.getUserInfo||{}
			// 	this.uploadHeaders[Constants.AUTHORIZATION]=userInfo.token;				
			// 	return userInfo;
			// },
        },
        created(){
        },
		mounted(){
            // let userInfo=this.$store.getters.getUserInfo||{}
            // if(!this.uploadHeaders){
            //     this.uploadHeaders={};                
            // }
            // this.uploadHeaders[Constants.AUTHORIZATION]=userInfo.token
            // fqCommon.warn("upload components==>",this.uploadHeaders)
		},
		methods: {
			beforeUpload(file){//上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
                fqCommon.log('beforeUpload',file)
                this.$emit('beforeUpload',file)
                return true
			},
			// onChange(file,fileList){//文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
            //     fqCommon.log('onChange')
            //     this.$emit('onChange',file,fileList)
			// },
			// onProgress(event, file, fileList){//文件上传时的钩子
            //     fqCommon.log('onProgress')
            //     this.$emit('onProgress',event,file,fileList)
			// },
			onExceed(file, content){//文件超出个数限制时的钩子
                fqCommon.log('onExceed')
                this.$emit('onExceed',file,content)
			},
			onSuccess(file, content){//文件上传成功时的钩子
                fqCommon.log('onSuccess',file,content)
                this.data.file=file.file
                if(this.autoUpload){
                    this.uploadImage()
                }
			},
			// onError(err, file, fileList){//文件上传失败时的钩子
            //     fqCommon.error('fq-upload[onError]',err)
            //     this.$emit('onError',err, file,fileList)
            // },
            uploadImage(){
                let that=this
                let data=that.data
                let formData = new FormData()
                for(let i in data){
                    formData.append(i, data[i])
                }
                that.uploadHeaders['Content-Type']='multipart/form-data'
                that.$store.dispatch('uploadImage',{url:that.action,formData:formData,headers:that.uploadHeaders}).then(({data})=>{
                    that.$emit('onSuccess',data)
                }).catch((err)=>{
                    that.$emit('onError',err)
                    fqCommon.error('[fq-upload][uploadImage]',err)
                })
            }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/less/components/common/fq-upload.less";
</style>