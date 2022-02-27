/*
 * @Date: 2022-02-27 17:06:46
 * @LastEditors: CZH
 * @LastEditTime: 2022-02-27 17:52:38
 * @FilePath: /vue3MarkedComponent/packages/markedPage/index.ts
 */



import markedPage from './markedPage.vue'

markedPage.install = function(Vue:any){
    Vue.component(markedPage.name,markedPage)
}


export default markedPage