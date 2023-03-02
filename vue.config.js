// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 16
})


module.exports = {
    publicPath: './',
    devServer: {
        proxy: 'http://localhost:57910'
    },
    chainWebpack: config => {
        //发布模式
        config.when(process.env.NODE_ENV === 'production', config => {
                config.entry('app').clear().add('./src/main-prod.js')

                config.set('externals', {
                    vue: 'Vue',
                    'vue-router': 'VueRouter',
                    axios: 'axios',
                    lodash: '_',
                    nprorgress: 'NProrgress'

                })
                config.plugin('html').tap(args => {
                    args[0].isPord = true;
                    return args;
                })
            })
            //开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')

            config.plugin('html').tap(args => {
                args[0].isPord = false;
                return args;
            })
        })
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    }
}