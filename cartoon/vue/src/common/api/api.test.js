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
    // routerMode:'history',
    routerMode:'',
    google: {
      ga: ['UA-123596532-1'],
      geo: 'AIzaSyAKC1v-OCZBXWsD6E4efT6b0Op2mYNXcjM'
    },
    lang: '',
    ws: '',
    imageServer:'',
    otcImageServer:'http://47.91.153.112/imgCoinPaySource/',
    // webSocket: 'wss://stream.ubi.bi/api/v1/pie/user/{uid}',
    webSocket: 'wss://stream.ubi.bi/api/v1/pie',
    phpHost:'http://47.91.153.112',
    apiHost:'http://111.231.200.106:8087/api/v1',//本地抓取内容接口
    // ticker: 'wss://stream.ubi.bi/api/v1/pie/ticker/{code}',
    // kline: 'wss://stream.ubi.bi/api/v1/pie/kline/{code}',
    // exchange: 'wss://stream.ubi.bi/api/v1/pie/kline/{code}',
    host: 'http://10.45.0.54:8765/pie/api/',
    sale: 'https://api.ubi.bi/pie/sale/',
    extion: 'https://api.ubi.bi/pie/extion/',
    debug: false
  }
  