module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  },
  devServer:{
    open:true,
    host:'localhost',
    port:8080,
    https:false,
    hotOnly:false,
    proxy:{
      '/api': {
        target:'https://ele-interface.herokuapp.com/api/',
        ws:true,
        changeOrigin: true,
        pathRewrite: {
          '^/api':''
        }
      }
    },
    before:app =>{}
  }
}
