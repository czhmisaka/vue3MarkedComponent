/*
 * @Date: 2022-01-14 10:56:17
 * @LastEditors: CZH
 * @LastEditTime: 2022-11-23 09:59:28
 * @FilePath: /vue3MarkedComponent/example/assets/index.ts
 */


const upperFirst = (str: string): string => {
    return str.replace(/^\S/, s => s.toUpperCase())
}
const camelCase = function (str: string): string {
    return str.replace(/(^\w|(\s+\w))/g, (_, $1) => {
        return $1.trim().toUpperCase()
    })
}


// 这里规定了文件扫描的范围
const requireModule = [require.context(
    './',
    true,   
    /\.md$/
)]

const publicPath = '/'

// 文档预处理
const markDownDealFunction = (doc: string) => {
    doc.replace(/\/image\//g, publicPath + 'image/');
    return doc
}

interface doc {
    name?: string,
    doc?: string
}

let docList: Array<doc> = []

function returnString(str: string): string {
    return str.split('/').pop() || ''
}

requireModule.map(rm => {
    rm.keys().map((fileName: string) => {
        if (fileName) {
            const config_info = rm(fileName);
            const config_name = upperFirst(camelCase(returnString(fileName).replace(/\.\w+$/, '')))
            docList.push({
                name: config_name,
                doc: markDownDealFunction(config_info)
            })
        }
    })
})



export default {
    docList
}