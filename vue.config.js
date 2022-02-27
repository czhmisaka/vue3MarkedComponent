/*
 * @Date: 2022-01-14 08:56:05
 * @LastEditors: CZH
 * @LastEditTime: 2022-02-27 09:54:03
 * 
 * @FilePath: /vue3MarkedComponent/vue.config.js
 */
let publicPath = process.env.NODE_ENV == 'production' ? "/guild" : "/"
console.log(process.env.NODE_ENV)
let exp = {
    publicPath: publicPath,
    configureWebpack: {
        module: {
            rules: [{
                test: /\.md$/,
                use: ["text-loader"]
            }]
        },
    }
}


module.exports = {
    ...exp
};