import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _37ebcb08 = () => interopDefault(import('..\\pages\\event\\create.vue' /* webpackChunkName: "pages/event/create" */))
const _16ba7b6a = () => interopDefault(import('..\\pages\\event\\_id.vue' /* webpackChunkName: "pages/event/_id" */))
const _73306e38 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/event/create",
    component: _37ebcb08,
    name: "event-create"
  }, {
    path: "/event/:id?",
    component: _16ba7b6a,
    name: "event-id"
  }, {
    path: "/",
    component: _73306e38,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
