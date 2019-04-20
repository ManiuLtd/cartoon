const Kline={
    klineMap:{
		'18144000000':{klineType:'MONTHS',interval:1,unit:'M'},//1月
		'604800000':{klineType:'WEEKS',interval:1,unit:'w'},//1周
		'259200000':{klineType:'DAY',interval:3,unit:'d'},//3天
		'86400000':{klineType:'DAY',interval:1,unit:'d'},//1天
		'43200000':{klineType:'HOUR',interval:12,unit:'h'},//12时
		'21600000':{klineType:'HOUR',interval:6,unit:'h'},//6时
		'14400000':{klineType:'HOUR',interval:4,unit:'h'},//4时
		'7200000':{klineType:'HOUR',interval:2,unit:'h'},//2时
		'3600000':{klineType:'HOUR',interval:1,unit:'h'},//1时
		'1800000':{klineType:'MINUTE',interval:30,unit:'m'},//30分
		'900000':{klineType:'MINUTE',interval:15,unit:'m'},//15分
		'300000':{klineType:'MINUTE',interval:5,unit:'m'},//5分
		'180000':{klineType:'MINUTE',interval:3,unit:'m'},//3分
		'60000':{klineType:'MINUTE',interval:1,unit:'m'},//1分
    }
}
export default Kline