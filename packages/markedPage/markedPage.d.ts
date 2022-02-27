/*
 * @Date: 2022-02-27 17:49:17
 * @LastEditors: CZH
 * @LastEditTime: 2022-02-27 17:51:43
 * @FilePath: /vue3MarkedComponent/packages/markedPage/markedPage.d.ts
 */


declare module '*.vue' {
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
  }