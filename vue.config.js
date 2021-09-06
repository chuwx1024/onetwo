module.exports = {
  devServer: {
    proxy: {
      '/xativa/*': {
        target: 'http://172.16.0.157:3000/mock/30'
      }
    }
  }
}
