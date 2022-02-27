/*
 * @Date: 2022-02-27 08:34:43
 * @LastEditors: CZH
 * @LastEditTime: 2022-02-27 17:56:57
 * @FilePath: /vue3MarkedComponent/example/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import markedPage from '../packages/index'

const app = createApp(App)
app.use(markedPage)
app.use(ElementPlus).use(router).mount('#app')
