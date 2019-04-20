import apiConfig from './index'
export default {
    queryListUrl:apiConfig.apiHost+'/cartoon/detail/{id}',//获取漫画章节
    cartoonPreviewUrl:apiConfig.apiHost+'/cartoon/preview/{id}/{aId}',//获取章节漫画
    cartoonPreviewImgUrl:apiConfig.apiHost+'/cartoon/img/preview/img/',//获取章节漫画
    cartoonContentUrl:apiConfig.apiHost+'/cartoon/content/{url}',//获取章节漫画
//     initializeUrl:apiConfig.host+'/base/user/v1/initialize',//初始化配置
//     queryKLineUrl:apiConfig.host+'/business/trade/v1/queryKLine',//获取交易对K线数据
//     queryDepthUrl:apiConfig.host+'/business/trade/v1/queryDepth',//获取交易对深度图数据
//     queryPageTradeUrl:apiConfig.host+'/business/trade/v1/queryPageTrade',//获取交易对交易数据

//     queryNoticeMsgUrl:apiConfig.host+'/business/home/v1/queryNoticeMsg',//获取通告
//     valMailExistUrl:apiConfig.host+'/base/user/v1/valMailExist',//获取用户邮箱是否可用
//     sendMailVerCodeUrl:apiConfig.host+'/base/user/v1/sendMailVerCode',//发送邮箱验证码
//     forgetPassWordSendMailUrl:apiConfig.host+'/base/user/v1/forgetPassWordSendMail',//找回密码
//     // 需要登录接口
//     queryUserMsgUrl:apiConfig.host+'/base/msg/v1/queryUserMsg',//获取用户消息
//     queryUserUreadMsgUrl:apiConfig.host+'/base/msg/v1/queryUserUreadMsg',//获取用户未读消息
//     logoutUrl:apiConfig.host+'/base/user/v1/logout',//退出登录
//     getAccountAmountUrl:apiConfig.host+'/business/account/v1/getAccountAmount',//获取账户余额
//     queryPageOrderUrl:apiConfig.host+'/business/order/v1/queryPageOrder',//获取当前委托
//     queryPageFinishOrderUrl:apiConfig.host+'/business/order/v1/queryPageFinishOrder',//获取当前历史成交
//     queryPageHisOrderUrl:apiConfig.host+'/business/order/v1/queryPageHisOrder',//获取24H历史委托
//     undoOrderUrl:apiConfig.host+'/business/order/v1/undoOrder',//取消订单
//     createSaleOrderUrl:apiConfig.host+'/business/order/v1/createSaleOrder',//创建卖出订单
//     createBuyOrderUrl:apiConfig.host+'/business/order/v1/createBuyOrder',//创建买入订单
//     querySubaccountByUserIdUrl:apiConfig.host+'/base/agency/v1/querySubaccountByUserId',//获取子账户
//     sendSmsWithdrawUrl:apiConfig.host+'/business/wallet/v1/sendSmsWithdraw',//获取提现发送短信验证码
//     accountQueryUrl:apiConfig.host+'/base/agency/v1/accountQuery',//子账户查询
//     subaccountDelUrl:apiConfig.host+'/base/agency/v1/subaccountDel',//删除子账户
//     tranPairQueryByUidUrl:apiConfig.host+'/base/agency/v1/tranPairQueryByUid',//获取子账户权限
//     subaccountAuthUrl:apiConfig.host+'/base/agency/v1/subaccountAuth',//设置子账户权限
//     shelfCurrencyUrl:apiConfig.host+'/base/user/v1/shelfCurrency',//上币申请
//     undoWithdrawUrl:apiConfig.host+'/business/wallet/v1/undoWithdraw',//取消提币
//     confirmWithdrawUrl:apiConfig.host+'/business/notify/v1/confirmWithdraw',//获取提现记录接口

//     //我的账户
//     uploadUrl:apiConfig.host+'/base/file/v1/upload',//上传用户头像
//     uploadResetUrl:apiConfig.host+'/base/file/v1/uploadReset',//上传图片 非登录
//     editUserInfoUrl:apiConfig.host+'/base/user/v1/editUserInfo',//编辑用户信息
//     personAuthUrl:apiConfig.host+'/base/user/v1/personAuth',//个人认证
//     agencyAuthUrl:apiConfig.host+'/base/user/v1/agencyAuth',//机构认证
//     assetsListUrl:apiConfig.host+'/base/assets/v1/assetsList',//我的资金
//     verifyStatusInfoUrl:apiConfig.host+'/base/user/v1/verifyStatusInfo',//认证状态信息
//     queryUserLoginInfoUrl:apiConfig.host+'/base/user/v1/queryUserLoginInfo',//获取用户登录日志信息
//     certifiedAuditLogsUrl:apiConfig.host+'/base/user/v1/certifiedAuditLogs',//获取用户认证信息
//     userLeverInfoUrl:apiConfig.host+'/base/user/v1/userLeverInfo',//获取用户等级信息
//     personDefaultSettingUrl:apiConfig.host+'/base/user/v1/personDefaultSetting',//获取用户设置信息
//     personSettingUrl:apiConfig.host+'/base/user/v1/personSetting',//保存用户设置信息
//     editPwdUrl:apiConfig.host+'/base/user/v1/editPwd',//修改用户密码
//     creGoogleAuthUrl:apiConfig.host+'/base/user/v1/creGoogleAuthUrl',//创建谷歌验证
//     editGoogleAuthUrl:apiConfig.host+'/base/user/v1/editGoogleAuth',//修改谷歌验证
//     visitorRegisterUrl:apiConfig.host+'/base/user/v1/visitorRegister',//游客绑定邮箱验证
//     googleAuthUrl:apiConfig.host+'/base/user/v1/googleAuth',//保存谷歌验证
//     bindPhoneUrl:apiConfig.host+'/base/user/v1/bindPhone',//绑定手机号
//     markMsgUrl:apiConfig.host+'/base/msg/v1/markMsg',//将消息设置为已读
//     editBindAuthPhoneUrl:apiConfig.host+'/base/user/v1/editBindAuthPhone',//更换绑定手机授权
//     editBindPhoneUrl:apiConfig.host+'/base/user/v1/editBindPhone',//更换绑定手机号
//     resetBindInfoUrl:apiConfig.host+'/base/verifiy/v1/resetBindInfo',//重置绑定手机号
//     getRechargeAddressUrl:apiConfig.host+'/business/wallet/v1/getRechargeAddress',//获取充值地址
//     queryPageAddressUrl:apiConfig.host+'/business/wallet/v1/queryPageAddress',//获取地址列表
//     computeWithdrawSumUrl:apiConfig.host+'/business/wallet/v1/computeWithdrawSum',//获取当前提币可用数
//     createAddressUrl:apiConfig.host+'/business/wallet/v1/create',//添加地址
//     removeAddressUrl:apiConfig.host+'/business/wallet/v1/remove',//移除地址
//     queryPageRechargeRecordUrl:apiConfig.host+'/business/wallet/v1/queryPageRechargeRecord',//查询充值记录地址
//     queryPageWithdrawRecordUrl:apiConfig.host+'/business/wallet/v1/queryPageWithdrawRecord',//查询提现记录地址
//     applyWithdrawUrl:apiConfig.host+'/business/wallet/v1/applyWithdraw',//提现地址
//     setFundsPwdProUrl:apiConfig.host+'/base/user/v1/setFundsPwdPro',//设置资金密码  验证设置
//     editFundsPwdProUrl:apiConfig.host+'/base/user/v1/editFundsPwdPro',//重置资金密码验证
//     editFundsPwdUrl:apiConfig.host+'/base/user/v1/editFundsPwd',//重置资金密码
//     verifiyFundMobileCodeUrl:apiConfig.host+'/base/verifiy/v1/verifiyFundMobileCode',//资金备用手机号
//     setFundsPwdUrl:apiConfig.host+'/base/user/v1/setFundsPwd',//资金密码设置
//     personThemeSettingUrl:apiConfig.host+'/base/user/v1/personThemeSetting',//主题设置
//     addSubaccountUrl:apiConfig.host+'/base/agency/v1/addSubaccount',//添加子账号

//     //推广
//     generalizeInvitationsListUrl:apiConfig.extion+'/generalize/v1/invitations/list',//推广邀请列表
//     generalizeIndexUrl:apiConfig.extion+'/generalize/v1/index',//推广列表
//     generalizeDividendListUrl:apiConfig.extion+'/generalize/v1/dividend/list',//推广分润列表

//     //售卖相关
//     tokenSaleListUrl:apiConfig.sale+'/v1/list',//社区售卖列表
//     tokenSaleDetailUrl:apiConfig.sale+'/v1/details/{id}',//社区售卖详情
//     tokenSaleInvestDetailUrl:apiConfig.sale+'/project/v1/invest_page/{projectId}',//社区售卖购买详情
//     tokenSaleInvestUrl:apiConfig.sale+'/project/v1/invest',//社区售卖购买
//     tokenSaleApplyDetailUrl:apiConfig.sale+'/project/v1/edit_page/{id}',//社区售卖发起详情
//     tokenSaleApplyUrl:apiConfig.sale+'/project/v1/add',//社区售卖发起
//     tokenSaleUploadUrl:apiConfig.sale+'/project/v1/upload',//社区售卖上传图片
//     tokenSaleInvestListUrl:apiConfig.sale+'/project/v1/invest/list',//我投资的项目
//     tokenSaleApplyListUrl:apiConfig.sale+'/project/v1/release/list',//我发起的项目
//     deleteTokenSaleApplyUrl:apiConfig.sale+'/project/v1/del/{projectId}',//删除发起的项目
    
    
//     // 游戏相关
//     crowdIndexUrl:apiConfig.sale+'/crowd/v1/index',//游戏众筹首页设置
//     crowdPayUrl:apiConfig.sale+'/crowd/v1/pay',//游戏参与众筹
//     allRecordListUrl:apiConfig.sale+'/crowd/order/v1/all_list',//所有参与众筹记录
//     personalRecordListUrl:apiConfig.sale+'/crowd/order/v1/oneself_list',//个人参与众筹记录
//     crowdSuggestListUrl:apiConfig.sale+'/crowd/suggest/v1/list',//所有建议记录
//     addCrowdSuggestUrl:apiConfig.sale+'/crowd/order/v1/add',//添加建议
//     //     langKey: EN
//     // accessToken: Bearer 15e791020e799fe1328cdb2a185cac04
//     // operatorId: 5824
//     visitorLoginUrl:apiConfig.host+'/base/user/v1/visitorLogin',//游客登录
//     loginUrl:apiConfig.host+'/base/user/v1/login',//登录
//     sendMobileVerCodeUrl:apiConfig.host+'/base/user/v1/sendMobileVerCode',//发送短信验证码  登录场景
//     sendResetMobileVerCodeUrl:apiConfig.host+'/base/user/v1/sendResetMobileVerCode',//重置手机号
//     editGooglePreAuthUrl:apiConfig.host+'/base/user/v1/editGooglePreAuth',//更换谷歌密钥
//     resetMobileUrl:apiConfig.host+'/base/verifiy/v1/resetMobile',//重置手机号
//     resetGoogleUrl:apiConfig.host+'/base/verifiy/v1/resetGoogle',//重置谷歌
//     resetGoogleAuthUrl:apiConfig.host+'/base/verifiy/v1/resetGoogleAuthUrl',//重置谷歌验证码
//     resetPasswordUrl:apiConfig.host+'/base/user/v1/resetPassword',//重置密码
//     batchCollectUrl:apiConfig.host+'/base/user/v1/batchCollect',//批量收藏  登录场景
//     cancelCollectUrl:apiConfig.host+'/base/user/v1/cancelCollect',//取消收藏   登录场景
//     collectUrl:apiConfig.host+'/base/user/v1/collect',//收藏   登录场景
//     queryPageCollectUrl:apiConfig.host+'/base/user/v1/queryPageCollect',//查询用户收藏   登录场景
//     tradeSignUrl:apiConfig.host+'/business/order/v1/tradeSign',//获取交易认证
//     getOrdersUrl:apiConfig.host+'/business/order/v1/getOrders',//获取场外交易订单

//     //注册
//     registeredUrl:apiConfig.host+'/base/user/v1/registered',//注册


//     // 外部接口
//     //币种介绍  code:'eos' 币种
//     exchangeCoinIntroduceUrl:apiConfig.apiHost+'/coin/introduce/{code}',
//     /**
//      币种信息 name	: bitcoin   币种
//             currency:	cny  货币类型
//      *  */
//     exchangeCoinProfileUrl:apiConfig.apiHost+'/coin/profile/{name}/{currency}',
//     //币种新闻  code:'eos' 币种    lang:'zh' 语言代码   page: 0  当前页
//     exchangeCoinNewsUrl:apiConfig.apiHost+'/coin/news/{code}/{lang}/{page}/{size}',
//     //币种详情    name:bitcoin 币种名称
//     exchangeCoinHqzUrl:apiConfig.apiHost+'/coin/token/info/{name}',
//     //获取短链接
//     shortUrlGenerateUrl:apiConfig.apiHost+'/short/url/generate/{url}/{channel}',
//     //币种详情 mytoken   code:USDT 币种代码 coinid:币种id
//     exchangeCoinMyTokenUrl:apiConfig.apiHost+'/coin/ticker/currencydetail/{code}/{id}',
//     //  name: ubi 域名前缀    local: 'zh-cn' 语言代码  pageNo: 1 当前页
//     queryActivitiesListUrl:apiConfig.apiHost+'/zendesk/activities/{name}/{locale}/{pageNo}',
//     //  name: ubi 域名前缀    local: 'zh-cn' 语言代码  pageNo: 1 当前页  articleId 文章id   pageSize:页数
//     queryNoticesListUrl:apiConfig.apiHost+'/zendesk/notice/{name}/{locale}/{articleId}/{pageNo}/{pageSize}',
//     // interval  daily   count: 5
//     exchangeCoinSwjUrl:apiConfig.apiHost+'/swj/{interval}/{count}',
//     //
//     exchangeCoinGcicomUrl:apiConfig.apiHost+'/gcicom',

//     //coin pay host api
//     //确认订单
//     otcOrderConfirmUrl:apiConfig.coinPayHost+'/otc/order/confirm',
//     // 取消订单
//     otcOrderCancelUrl:apiConfig.coinPayHost+'/otc/order/cancel',


//     //php 相关接口  初始化接口
//     webMyApiInitUrl:apiConfig.phpHost+'/webMyApi/init.php',
//     webMyApiMarketTickerUrl:apiConfig.phpHost+'/webMyApi/market_ticker.php',//外部币种行情数据
//     webMyApiCoinInfoUrl:apiConfig.phpHost+'/webMyApi/coin_info.php',//外部币种行情数据
//     webMyApiCoinNewsUrl:apiConfig.phpHost+'/webMyApi/coin_news.php',//外部币种相关资讯
//     webMyApiCoinAddressStatisticsUrl:apiConfig.phpHost+'/webMyApi/coin_address_statistics.php',//持币详情
//     webMyApiCoinWalletUrl:apiConfig.phpHost+'/webMyApi/coin_wallet.php',//钱包支持
//     webMyApiMarketChartsUrl:apiConfig.phpHost+'/webMyApi/market_charts.php',//外部K线数据 
//     webMyApiMarketUrl:apiConfig.phpHost+'/webMyApi/market.php',//交易所行情
//     webMyApiSearchHotUrl:apiConfig.phpHost+'/webMyApi/search_hot.php',//交易所热搜版
//     webMyApiExchangeDetailUrl:apiConfig.phpHost+'/webMyApi/exchange_detail.php',//交易所详情
//     webMyApiFlashNewsUrl:apiConfig.phpHost+'/webMyApi/FlashNews.php',//新闻
//     webMyApiMomentsUrl:apiConfig.phpHost+'/webMyApi/moments.php',//币友圈
//     // http://47.91.153.112/webMyApi/market.php?lang=zh&subject=%25E5%25B8%2582%25E5%2580%25BC
//     // webMyApiMarketUrl:apiConfig.phpHost+'/webMyApi/market.php',//获取全球相关主题

//     //php otc 相关接口
//     webCoinPayApiMarketListsUrl:apiConfig.phpHost+'/webCoinPayApi/gw/coinMarketList/getCoinMarketList', //获取市场
//     webCoinPayApiIndexSearchUrl:apiConfig.phpHost+'/webCoinPayApi/gw/index/search',//获取交易

//     // https://ubi.zendesk.com/hc/api/internal/recent_activities?&page=1
//     // queryOutTokenIntroduceUrl:apiConfig.infoHost+'/index/coin',//获取币种信息外部接口地址 币种介绍
//     // queryOutTokenIntroduceUrl:apiConfig.infoHost+'/coin/get',//获取币种信息外部接口地址 币种介绍
//     // apiUrl:apiConfig.apiHost,// str=BTC&lang=zh&page=0 获取币种讯息
//     // queryOutTokenInfoUrl:apiConfig.infoHost+'https://mifengcha.com/api/v1/news/search?str=BTC&lang=zh&page=0',//获取币种讯息

//     // websocket 接口
//     wsTokenUrl:apiConfig.webSocket+'/ticker/{code}',//交易数据websocket
//     wsTokenKlineUrl:apiConfig.webSocket+'/kline/{basicToken}{targetToken}_{time}',//交易数据websocket
//     wsTokenDepthUrl:apiConfig.webSocket+'/kline/{basicToken}{targetToken}',//深度数据websocket
//     wsUserInfoUrl:apiConfig.webSocket+'/user/{userId}',//用户数据websocket
// //https://ubi.zendesk.com/hc/zh-cn/articles/360006112794-Terms-of-service
//     helpUrl:'https://ubi.zendesk.com',
}
