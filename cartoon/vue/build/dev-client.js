/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  //热更新
  // if (event.action === 'reload') {
  //   window.location.reload()
  // }
})
