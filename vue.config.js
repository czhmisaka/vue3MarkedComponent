/*
 * @Date: 2022-01-14 08:56:05
 * @LastEditors: CZH
 * @LastEditTime: 2022-02-27 18:01:14
 * 
 * @FilePath: /vue3MarkedComponent/vue.config.js
 */
let publicPath = process.env.NODE_ENV == 'production' ? "/guild" : "/";

let exp = {
    publicPath: publicPath,
    pages: {
        index: {
          entry: 'example/main.ts',
          template: 'public/index.html',
          filename: 'index.html'
        }
      },
    configureWebpack: {
        module: {
            rules: [{
                test: /\.md$/,
                use: ["text-loader"]
            }]
        },
    },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add(__dirname + 'packages') // 注意这里需要绝对路径，所有要拼接__dirname
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    }
}


module.exports = {
    ...exp
};