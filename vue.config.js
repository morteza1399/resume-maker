module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/styles/scss/_variables.scss';
          @import '@/styles/scss/_mixins.scss';
        `
      }
    }
  }
}