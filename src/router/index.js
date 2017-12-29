import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../views/homepage/homepage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: 'homepage'},
    {path: '/homepage', component: homepage}
  ]
})
