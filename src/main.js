import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue({
  router,
  render: h => h(App)
})
