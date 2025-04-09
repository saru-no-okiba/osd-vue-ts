const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: '../dist/osd-vue-ts',

  // ファイル名にハッシュ値をつけない
  filenameHashing: false,

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // チャンクファイルを生成しないようにする
      config.optimization.splitChunks(false);
    }
  },

  configureWebpack: {
    resolve: {
      fallback: {
        timers: require.resolve('timers-browserify')
      },
    },
  },

  css: {
    loaderOptions: {
      sass: {
        //additionalData: `@import "../assets/scss/style.scss";`
        //additionalData: `@import "@/assets/scss/style.scss";`
      }
    }
  }
});
