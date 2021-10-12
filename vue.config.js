//vue.config.js
const resolve = dir => require('path').join(__dirname, dir);
module.exports = {
  publicPath: '/suppermall/',
  outputDir: 'dist/suppermall/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  devServer: {
  proxy: {
    '/api': {
      target: 'http://106.52.236.120:8080',
      ws: true,
      changeOrigin: true
    }
    // assetsDir:'',//自定义所有css、img、js等资源输出的目录，相对于outputDir，就是默认在输出目录的根目录下。
    // indexPath:''//自定义index.html输出的位置，相对于outputDir。
    }
  }
}