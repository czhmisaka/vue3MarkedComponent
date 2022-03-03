/*
 * @Date: 2022-02-27 17:06:07
 * @LastEditors: CZH
 * @LastEditTime: 2022-02-27 19:02:13
 * @FilePath: /vue3MarkedComponent/packages/index.ts
 */



import markedPage from "./markedPage"

// 存储组件列表
const components = [
    markedPage
] 
/* 
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const install = function (Vue:any) {
  components.map(item => {
    Vue.component(item.name,item)
  })
}

export default {
  install,
  markedPage
}
