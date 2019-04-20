var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var sourceMap=config.dev.cssSourceMap;
if(process.env.NODE_ENV === 'production'){
  sourceMap=config.build.productionSourceMap;
}else if(process.env.NODE_ENV == 'sandbox'){
  sourceMap=config.sandbox.productionSourceMap
}
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap:sourceMap,
    extract: isProduction
  })
}
