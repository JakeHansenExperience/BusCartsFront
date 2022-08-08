import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _728f6e2f = () => interopDefault(import('../pages/birthdays.vue' /* webpackChunkName: "pages/birthdays" */))
const _414ff91d = () => interopDefault(import('../pages/busCartAnalytics.vue' /* webpackChunkName: "pages/busCartAnalytics" */))
const _08684d60 = () => interopDefault(import('../pages/createBirthday.vue' /* webpackChunkName: "pages/createBirthday" */))
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
    path: "/birthdays",
    component: _728f6e2f,
    name: "birthdays"
  }, {
    path: "/busCartAnalytics",
    component: _414ff91d,
    name: "busCartAnalytics"
  }, {
    path: "/createBirthday",
    component: _08684d60,
    name: "createBirthday"
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
