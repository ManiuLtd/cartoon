let fs = require('fs')
let path = require('path')
let scripts=['../static/js/lib/vue/vue.min.js',
            // '../static/js/lib/common/rem.js',
            '../static/js/lib/axios/axios.min.js',
            '../static/js/lib/vuex/vuex.min.js',
            '../static/js/lib/vue-router/vue-router.min.js',
            '../static/js/lib/moment/moment.min.js']

module.exports = {
    getScriptContent(){
        let content=[]
        let len=scripts.length
        for(let i=0;i<len;i++){
            let file=path.join(__dirname,scripts[i])
            // console.log('当前文件：'+file)
            let data = fs.readFileSync(file, 'utf8')
            content.push('<script>'+data+'</script>')
        }
        // console.log(JSON.stringify(content))
        return content.join('')
    }
}