import Vue from 'vue'
import Router from 'vue-router'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

Vue.use(Router)
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: routes
  })
}


// import Vue from 'vue'
// import { createRouter } from './router'
// export function createApp () {
//   // 创建 router 实例
//   const router = createRouter()
//   const app = new Vue({
//     // 注入 router 到根 Vue 实例
//     router,
//     render: h => h(App)
//   })
//   // 返回 app 和 router
//   return { app, router }
// }