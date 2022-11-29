//端口跨域
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.45.5:12313',
                changeOrigin: true, // 虚拟的站点需要更管origin
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
}