/*
 * @Date: 2022-02-27 08:34:43
 * @LastEditors: CZH
 * @LastEditTime: 2022-02-27 08:59:05
 * @FilePath: /vue3MarkedComponent/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TestPage',
    component: () => import('../views/markDownPageList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
