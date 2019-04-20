// import {Constants} from '@/common/env'
import Big from 'big.js'
import Vue from 'vue'
//设置处理不做 四舍五入
Big.RM = 0
//变量池
let variablePool = { //变量池
    // userId() {
    //     let userInfo=localStorage.getItem(Constants.LOCALSTORAGEKEY.USERKEY.USERINFO);
    //     if(userInfo){
    //         userInfo=JSON.parse(userInfo);
    //     }
    //     return userInfo?userInfo.userId:null;
    // },
    language: (function() {
        var lang = (navigator.language || '').toLowerCase();
        var language = lang.indexOf('zh') > -1 ? 'ZH-CN' : 'EN';
        return language.toUpperCase();
    })(),
    isPC: (function() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
        var flag = true;
        for (var i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) > 0) { flag = false; break; }
        }
        return flag;
    })(),
    token() {
        // return cookie.getItem("toKen")
    },
    // language:'zh-cn',
    isWechat: false,
    countdownTimeIds:{//存储倒计时定时器id

    },
    regs:{
        email:/^[A-Za-zd0-9]+([-_.][A-Za-zd0-9]+)*@([A-Za-zd0-9]+[-.])+[A-Za-zd]{2,5}$/,//电子邮件
        pass:/^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!`@#$%^&*()_+|[\]\-={};':"<>?,./]+$)^[0-9A-Za-z~!`@#$%^&*()_+|[\]\-={};':"<>?,./]{8,32}$/,//密码
        name:/^(?=.*[a-zA-Z0-9])[^]{1,50}$/,//姓名
        mobile:/^[\d]+\.?\d*$/,//手机号 国内外
        number:/^[0-9]+$/,//数字
        passport:/^(?=.*[a-zA-Z0-9])[^]{4,18}$/,//护照
        companyAddress:/^[\d\w\u4e00-\u9fa5,.-]{1,200}$/,//公司地址
        applicantName:/^[\d\w\u4e00-\u9fa5,.-]{1,30}$/,//申请人姓名
        fundPass:/^[0-9]{6}$/,//资金密码
        noChinese:/[^\x00-\xff]/gi,
    }
}

let common = {
    //是否为debug模式
    debugMode:(function() {
        var flag = true
        // if (process.env.NODE_ENV == 'development') {
        //     flag = true;
        // } else
        if (process.env.NODE_ENV == 'production') {
            flag = false;
        }
        console.log("current env is ",flag)
        return flag;
    })(),
    //链接地址池
    // URL: URL,
    //变量池
    variablePool: variablePool,
    log() {
        let that=this;
        if (console) {
            that.debugMode && (console.log.apply(console,arguments))
        }
    },
    error () {
        let that=this;
        if (console) {
            console.error.apply(console,arguments);
        }
    },
    warn () {
        let that=this;
        if (console) {
            that.debugMode && console.warn.apply(console,arguments);
        }
    },
    info () {
        let that=this;
        if (console) {
            that.debugMode && console.info.apply(console,arguments);
        }
    },
    debug () {
        let that=this;
        if (console) {
            that.debugMode && console.debug.apply(console,arguments);
        }
    },
    //处理状态栏,与原生交互
    setStatus(that,bool){
        try{
            let $bridge = that.$bridge?that.$bridge:Vue.prototype.$bridge
            $bridge.callHandler('native_handle', bool?"white":"black")
        }catch (err){}
    },
    openPage(url,flag){
        if(!url){
            return
        }
        // if(flag){
        //     window.open(url)
        // }else{
        //     window.location.href=url
        // }
        common.openWebView(url,()=>{},flag)
    },
    openWebView(that,callback,bool){
        let $bridge = Vue.prototype.$bridge
        if($bridge){
            //打开第三方网页,与原生交互        
            try {
                let url
                try {
                    url = $(that).attr("data-href")
                } catch (err1) {
                    url = that
                }
                let is_full = !!bool
                common.warn('外部链接地址为:'+url)
                $bridge.callHandler('native_handle', "webview_"+encodeURIComponent(url)+":"+is_full,function(){
                    //关闭webview回调事件
                    $bridge.registerHandler('call_back_js_webview_closed',function(data,responseCallback){
                        if(data["msg"] === "webview is closed" || !data) {
                            //已经关闭
                        }
                        //删除通知
                        responseCallback("get ok")
                        //重新设置状态栏风格
                        let is_call_back = (typeof(callback) != "undefined" && typeof(eval(callback)) == "function");
                        if(is_call_back) callback()
                    });
                });
            } catch (err) {}
        }else{
            let url
            try {
                url = $(that).attr("data-href")
            } catch (err1) {
                url = that
            }
            common.openPage(url,true)
        }
    },
    is_iphone(that,success,error){
        try{
            that.$bridge.callHandler('native_handle','device',
                function(data){
                    let is_iphone = false
                    if(data && data["system_name"].toUpperCase().indexOf('IOS')>=0) is_iphone = true
                    if(success){
                        success(is_iphone)
                    }
                }
            )
        }catch (err){
            if(error){
                error(err)
            }
        }
    },
    //全屏处理
    orientation(that,success,error,str){
        try{
            str = str?str:"portrait"
            str="orientation_"+str
            console.error(str,'--------')
            that.$bridge.callHandler('native_handle',str,
                function(){
                    if(success){
                        success()
                    }
                    that.$bridge.callHandler('native_handle',str==portrait?"show":"hidden")
                }
            )
        }catch (err){
            if(error){
                error(err)
            }
        }
    },
    //复制
    copy(that,success,error,str){
        try{
            if(!str) return error('str is empty')
            that.$bridge.callHandler('native_handle','copy_'+str,
                function(data){
                    if(success){
                        that.$toast({
                            message: that.langKey('复制成功'),
                        })
                        success()
                    }
                }
            )
        }catch (err){
            if(error){
                error(err)
            }
        }
    },
    //扫一扫
    scanQrcode(that,success,error,call_success){
        try{
            that.$bridge.callHandler('native_handle', "scan_#2a2a2f_white")
            //js-oc交互 返回扫一扫回调
            that.$bridge.registerHandler('call_back_js_scan',(data,responseCallback)=>{
                //返回了什么
                //alert(JSON.stringify(data));
                common.error(data)
                if(data["msg"] === "取消" || !data) {
                    if(success){
                        success()
                    }
                }else{
                    // that.address_obj.innerHTML = decodeURIComponent(data["msg"]);
                    // that.$toast(decodeURIComponent(data["msg"]))
                    if(success){
                        success(decodeURIComponent(data["msg"]))
                    }
                }
                //删除通知
                responseCallback("get ok")
                //重新设置状态栏风格
                //setTimeout(function(){
                //    that.$bridge.callHandler("native_handle","white");
                //},500);
            })
        }catch (err){
            if(error){
                error(err)
            }
        }
    },
    //从相册获取图片
    getPhotoFromAlbums(that,success,error){
        try{
            //从本地相册单选一张照片,与原生交互
            that.$bridge.callHandler('native_handle', "photo_albums_single",(data)=>{
                console.log(data["msg"]);
            })
            that.$bridge.registerHandler('call_back_js_albums_single',(data,responseCallback)=>{
                if(data["msg"] === "cancel" || !data) {
                    //取消处理
                    if(success){
                        success()
                    }
                }else{
                    //选择的图片
                    // console.log("选择的图片base64是="+data["msg"]);
                    if(success){
                        success(data["msg"])
                    }
                }
            })
            setTimeout(function(){
                //处理状态栏,与原生交互
                that.$bridge.callHandler('native_handle', "black")
            },100)
        }catch (err){
            if(error){
                error(err)
            }
        }
    },
    //上传图片
    uploadImage(vm,success=()=>{},error=()=>{}){
        let that=this
        let formData = new FormData()
        let data=vm.uploadCondition
        for(let i in data){
            formData.append(i, data[i])
        }
        vm.uploadHeaders['Content-Type']='multipart/form-data'
        vm.$store.dispatch('uploadImage',{url:vm.uploadUrl,formData:formData,headers:vm.uploadHeaders}).then(({data})=>{
            if(success){
                success(data)
            }
        }).catch((err)=>{
            // that.$emit('onError',err)
            if(error){
                error(err)
            }
        })
    },
    //从相机获取图片
    getPhotoFromCamera(that,success,error){
        try{
            //拍照,与原生交互
            that.$bridge.callHandler('native_handle', "take_a_photo_false",(data)=>{
                console.log(data["msg"]);
            })
            that.$bridge.registerHandler('call_back_js_take_a_photo',(data,responseCallback)=>{
                if(data["msg"] === "cancel" || !data) {
                    //取消处理
                    if(success){
                        success()
                    }
                }else{
                    //选择的图片
                    // console.log("选择的图片base64是="+data["msg"])
                    if(data.err==0){
                        if(success){
                            success(data["msg"],data['frontCamera'])
                        }
                    }else{
                        if(error){
                            error(data)
                        }
                    }
                }
            })
            setTimeout(function(){
                //处理状态栏,与原生交互
                that.$bridge.callHandler('native_handle', "black")
            },100)
        }catch (err){
            if(error){
                error(err)
            }
        }
    },
    //将base64转换为文件
    dataURLtoFile : function(dataurl, filename) {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1]
        console.log(arr,mime)
        let bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], filename, {type:mime})
    },
    /**
     * 格式化为 亿、万，万亿
     * number  需要格式化的数字
     * n 保留几位小数
     * return 返回字符串
     * */
    format_large_number(num,n){
        if(num == 0 || !num) return 0
        var moneyUnits = ["", "万", "亿", "万亿"]
        var dividend = 10000
        var curentNum = num.toString() //转换数字
        var curentUnit = moneyUnits[0]
        // 转换单位
        for (var i = 0 ;i <4; i++) {
            curentUnit = moneyUnits[i]
            if(this.strNumSize(curentNum)<5) break
            curentNum = curentNum / dividend
        }
        if(n){
            return Big(curentNum).toFixed(n)+curentUnit
        }
        return Big(curentNum).toFixed()+curentUnit
    },
    strNumSize(tempNum){
        var stringNum = tempNum.toString()
        var index = stringNum.indexOf(".")
        var newNum = stringNum
        if(index!=-1){
            newNum = stringNum.substring(0,index)
        }
        return newNum.length
    },
    group (msg) {
        let that=this
        if (console) {
            that.debugMode && console.group.apply(console,arguments);
        }
    },
    substitute(str, data) {
        if (data && typeof(data) == 'object') {
            return str.replace(/\{([^{}]+)\}/g, function(match, key) {
                var value = data[key];
                return (value !== undefined) ? '' + value : '';
            });
        } else {
            return str.toString();
        }
    },
    //js-oc交互
    setupWebViewJavascriptBridge(callback) {
        if(typeof(callback) != "undefined" && typeof(eval(callback)) == "function") {
            if (window.WebViewJavascriptBridge) {
                return callback(WebViewJavascriptBridge);
            }
            if (window.WVJBCallbacks) {
                return window.WVJBCallbacks.push(callback);
            }
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            //WVJBIframe.src = e.indexOf("iOS ") == 0?'https://__bridge_loaded__':'wvjbscheme://__BRIDGE_LOADED__';
            WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function () {
                document.documentElement.removeChild(WVJBIframe)
            }, 0);
        }
    },
    // getCurrentToken(item){
    //     let that=item;
    //     let indexTradeTicker=that.$store.getters.getIndexTradeTicker||{}
    //     let route=that.$route;
    //     let {basicToken,targetToken}=route.params;
    //     let currentToken=indexTradeTicker[basicToken+targetToken];
    //     return currentToken||{}
    // },
    //设置本地存储数据
    setItem(key,value,type){
        if(!value){
            value=null
        }
        if(window.$vm&&window.$vm.$bridge){
            try {
                window.$vm.$bridge.callHandler('native_handle',`localStorage_set_${key}:${value}`,function(result){
                    //设置成功
                    common.error('缓存设置成功',key,value,type)
                })
            }catch (err){}
        }else{
            if(type==1){
                sessionStorage.setItem(key,value)
            }else if(type==2){
                localStorage.setItem(key,value)
            }else{
                localStorage.setItem(key,value)
            }
        }
    },
    //获取本地存储数据
    getItem(key,type,callback){
        let item=null
        if(type==1){
            item= sessionStorage.getItem(key)
        }else if(type==2){
            item= localStorage.getItem(key)
        }else{
            item= localStorage.getItem(key)
        }
        if(item=='undefined'){
            item=null
        }
        if(!item&&window.$vm&&window.$vm.$bridge){
            try {
                window.$vm.$bridge.callHandler('native_handle',`localStorage_get_${key}`,function(result){
                    if(result["code"] == 1 && result["err"] == 1){
                        let msg=result["msg"]
                        if(msg&&callback){
                            callback(msg)
                        }
                    }
                    // console.log("取到的值为："+result["msg"]);
                    common.error('缓存获取成功',key,result["msg"])
                })
            }catch (err){}
        }
        return item
    },
    getZooms: function(touch) {
        let touch1 = touch.point1,
            touch2 = touch.point2;

        let x = touch1.x - (touch2 ? touch2.x : 0),
            y = touch1.y - (touch2 ? touch2.y : 0)
        return Math.sqrt((x * x) + (y * y))
    },
    getTouchedPosition: function(e, offset) {
        if (!offset) {
            offset = { x: 0, y: 0, ratio: 1 }
        }
        if (!offset.ratio) {
            offset.ratio = 1
        }
        let length = e.touches.length
        switch (length) {
            case 1:
                return { point1: { x: (e.touches[0].pageX - offset.x) / offset.ratio, y: (e.touches[0].pageY - offset.y) / offset.ratio }, length: length }
            case 2:
                // m[0].set(e.touches[0].pageX, e.touches[0].pageY, 0)
                // m[1].set(e.touches[1].pageX, e.touches[1].pageY, 0)
                return {
                    point1: { x: (e.touches[0].pageX - offset.x) / offset.ratio, y: (e.touches[0].pageY - offset.y) / offset.ratio },
                    point2: { x: (e.touches[1].pageX - offset.x) / offset.ratio, y: (e.touches[1].pageY - offset.y) / offset.ratio },
                    length: length
                }
            default:
                return { point1: { x: (e.changedTouches[0].pageX - offset.x) / offset.ratio, y: (e.changedTouches[0].pageY - offset.y) / offset.ratio }, length: length }
        }
    },
    /**
     * id 倒计时场景id
     * time 倒计时时间
     * intervalCallback  每次时间递减执行需要执行的函数
     * callback  倒计时完成需要执行的函数
     */
    countdownTime(id,time,intervalCallback,callback){
        let that=this;
        // if(!id){
        //     that.error("The function countdownTime params id is no found!")
        //     return;
        // }
        if(time<1){
            clearTimeout(variablePool.countdownTimeIds[id]);
            if(callback){
                callback()
            }
            return;
        }
        variablePool.countdownTimeIds[id]=setTimeout(()=>{
            time--;
            if(intervalCallback){
                intervalCallback(time)
            }
            that.countdownTime(id,time,intervalCallback,callback)
        },1000)
    },
    //获取语言
    langKey(langObj,key,options){
        let str=key
        if(langObj&&langObj[key]){
            str=langObj[key]
        }
        if(options){
            str=common.substitute(str,options)
        }
        return str
    },
    // deferLoad (component, time = 0) {
    //     return (resolve) => {
    //         window.setTimeout(() => resolve(component), time)
    //     };
    // },
    //判断输出小数
    toDigits(item,num){
        let amount=Big(item).toFixed()
        if(num){
            item=String(item)
            let strs=item.split('.');
            let digits=0;
            if(strs.length>1){
                digits=strs[strs.length-1].length
            }
            if(digits>0){
                amount=Big(item).toFixed(digits)
            }else{
                amount=Big(item).toFixed()
            }
            if(digits>=num){
                if(num>0){
                    amount=Big(item).toFixed(num)
                }else{
                    amount=Big(item).toFixed(num)
                }
            }
        }
        return amount
    },
    preventDefault(e,num){
        if(e){
            let target=e.target
            let value=target.value
            let key=e.key
            let subVal=''
            if(window.getSelection){
                subVal=window.getSelection().toString()
            }
            if(value){
                if(value.indexOf('.')>-1){
                    value=value.substring(value.indexOf('.')+1)
                    // common.warn('key=',key,'=,subVal.length=',subVal.length)
                    // target.select()
                    let len=value.length-(subVal?subVal.length:0)+key.length
                    // let len=value.length
                    if((len>num&&(key!='Backspace'&&key!='ArrowLeft'&&key!='ArrowRight'))||key=='.'){
                        e.preventDefault()
                    }
                }
            }
        }
    },
    getLastTradeMaxNumber(){
        let w_height=window.innerHeight
        if(w_height<=667){
            return 8
        }else if(w_height<=736){
            return 9
        }else if(w_height<=812){
            return 12
        }else if(w_height<=1024){
            return 22
        }else{
            return 35
        }
    },
    cleanWhitespace: function(obj) {
        if (obj) {
            for (var i = 0; i < obj.childNodes.length; i++) {
                var node = obj.childNodes[i];
                if (node.nodeType == 3 && !/\S/.test(node.nodeValue)) {
                    node.parentNode.removeChild(node)
                }
            }
        }
    },
    findObj : function(e,className){
        let tag = e.target;
        let that = this;
        let str = className?className:"touch-event";
        let result_obj;
        let max_find = 10;
        let find_num = 1;
        if(tag.className.indexOf(str)>=0){
            result_obj = tag;
        }else{
            //往下找
            //if(tag.innerHTML.indexOf(str)>0) down_find(tag);
            //往上找
            up_find(tag.parentNode);
        }

        return result_obj;

        function up_find(e){
            try {
                if(find_num<max_find) {
                    if (e && e.className && e.className.indexOf(str) >= 0) {
                        result_obj = e;
                        find_num = 0;
                    } else {
                        find_num++;
                        if(e && e.parentNode) up_find(e.parentNode);
                    }
                }
            }catch (err) {
                console.log(err);
            }
        }

        function down_find(obj) {
            try {
                that.cleanWhitespace(obj);
                for (let i in obj.childNodes) {
                    if (obj.childNodes[i].className &&
                        obj.childNodes[i].className.indexOf(str) >= 0) {
                        return tag.childNodes[i];
                    } else {
                        down_find(obj.childNodes[i]);
                    }
                }
            }catch (err) {
                console.log(err);
            }
        }
    }
}
export default common
