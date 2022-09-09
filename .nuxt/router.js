import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _429f1af6 = () => interopDefault(import('../pages/caddieView.vue' /* webpackChunkName: "pages/caddieView" */))
const _981775cc = () => interopDefault(import('../pages/dishpit.vue' /* webpackChunkName: "pages/dishpit" */))
const _cb5a24f2 = () => interopDefault(import('../pages/statusBusCart.vue' /* webpackChunkName: "pages/statusBusCart" */))
const _b57d2f60 = () => interopDefault(import('../pages/updateBusCart.vue' /* webpackChunkName: "pages/updateBusCart" */))
const _623a53eb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/caddieView",
    component: _429f1af6,
    name: "caddieView"
  }, {
    path: "/dishpit",
    component: _981775cc,
    name: "dishpit"
  }, {
    path: "/statusBusCart",
    component: _cb5a24f2,
    name: "statusBusCart"
  }, {
    path: "/updateBusCart",
    component: _b57d2f60,
    name: "updateBusCart"
  }, {
    path: "/",
    component: _623a53eb,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
