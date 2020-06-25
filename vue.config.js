const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
    publicPath: './',
    devServer: {
        open: true, //浏览器自动打开页面
        host: "0.0.0.0", //如果是真机测试，就使用这个IP
        port: 8018,
        https: false,
        hotOnly: false, //热更新（webpack已实现了，这里false即可）
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('styles', resolve('src/styles'))
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    // 配置主题样式
                    modifyVars: {
                        // 'primary-color': '#1DA57A',
                        // 'link-color': '#1DA57A',
                        // 'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                }
            }
        }
    }
}