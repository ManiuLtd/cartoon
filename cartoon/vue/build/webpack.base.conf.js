var path = require('path')
var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var assetsPublicPath=config.dev.assetsPublicPath;
if(process.env.NODE_ENV == 'production'){
  assetsPublicPath=config.build.assetsPublicPath;
}else if(process.env.NODE_ENV =='sandbox'){
  assetsPublicPath=config.sandbox.assetsPublicPath
}
module.exports = {
  entry: {
    app: './src/main.js'
  },
  //前一个key 是引用的第三方库名 后一个value是你在项目中起的别名
  // externals: {
  //   'vue': 'Vue',
  //   'vue-router': 'VueRouter',
  //   'vuex': 'Vuex',
  //   'axios': 'axios',
  //   'moment':'moment',
  //   // 'big':'Big',
  // },
  output: {
    path: config.build.assetsRoot,
    filename: process.env.NODE_ENV == 'production' ? '[name].js?[chunkhash]' : '[name].js',
    chunkFilename: 'chunk[id].js?[chunkhash]',
    publicPath: assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json','.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          // name: utils.assetsPath('images/[name].[hash:7].[ext]')
          name: utils.assetsPath('images/[name].[ext]?v=[hash:5]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          name: utils.assetsPath('fonts/[name].[ext]?v=[hash:5]')
        }
      }
    ]
  },
  plugins:[
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
    })
  ]
}
