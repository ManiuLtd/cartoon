module.exports = {
    aliyun: {
      nocaptcha: {
        // feng-qun ali-yun captcha appkey
        // 500,000 times per year
        appkey: 'FFFF0N00000000005EE7',
        h5appkey: 'FFFF00000000017CFA78'
      }
    },
    pizza:{
      apikey:'A9888F50C737359BB8A1F6BDC5ED2FE0',
    },
    google: {
      ga: ['UA-123596532-1'],
      geo: 'AIzaSyAKC1v-OCZBXWsD6E4efT6b0Op2mYNXcjM'
    },
    // routerMode:'history',
    axioTimeout:1000*15,//超时时间为15s
    lang: '',
    ws: '',
    imageServer:'',
    otcImageServer:'http://47.91.153.112/imgCoinPaySource',
    coinPayHost:'https://api.coinpay.do',//coinpay api host
    phpHost:'http://47.91.153.112',

     webSocket: 'wss://stream.ubi.bi/api/v1/pie',//websocket地址
     host: 'http://www.chuixue.net/',//后端接口地址
     extion: 'https://api.ubi.bi/pie/extion',
     sale: 'https://api.ubi.bi/pie/sale',
    //  apiHost:'http://111.231.200.106:8087/api/v1',//线上抓取内容接口
     apiHost:'http://192.168.0.104:8087/api/v1',//本地抓取内容接口
    //  apiHost:'http://10.45.0.136:8087/api/v1',//本地抓取内容接口
    
    // webSocket: 'ws://10.45.0.21:8008/api/v1/pie',
    // host: 'http://10.45.0.20:8765/pie/api',
    // extion: 'http://10.45.0.20:8765/pie/extion',
    // sale: 'http://10.45.0.20:8765/pie/sale',
    // apiHost:'http://10.45.0.164:8081/api/v1',//本地抓取内容接口
    // apiHost:'http://localhost:8081/api/v1',//本地抓取内容接口

    debug: false
}
