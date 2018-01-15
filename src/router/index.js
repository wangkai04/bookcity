import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../views/homepage/homepage.vue'
import booksdetails from '../views/details/booksdetails.vue'
import bookjump from '../views/bookjump/bookjump.vue'
import gouwuche from '../views/gouwuche/gouwuche.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: 'homepage'},
    {path: '/homepage', component: homepage},
    {path: '/booksdetails/:id', component: booksdetails},
    {path: '/bookjump/:id', component: bookjump},
    {path: '/gouwuche', component: gouwuche}
  ]
})
