const config = require('./task/task.config.json');
let publicPath = config.publicPath;
if (process.env.NODE_ENV === 'development') {
    publicPath = '/';
}
module.exports = {
    publicPath: publicPath,
    // 不启用hash值
    filenameHashing: false,
    // 生产环境不启用sourcemap，优化体积
    productionSourceMap: false,
    configureWebpack: {
        devServer: {
            // mock数据
            before(app) {
                // app.get("/api/goods", function (req, res) {
                //     res.json({
                //         code: 0,
                //         list: [{
                //                 id: 1,
                //                 text: "Web全栈架构师",
                //                 price: 1000
                //             },
                //             {
                //                 id: 2,
                //                 text: "Python架构师",
                //                 price: 1000
                //             }
                //         ]
                //     });
                // });
            }
        }
    }
};