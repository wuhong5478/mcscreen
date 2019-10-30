import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/global.less'

import * as filters from './filters' // global filters

Vue.config.productionTip = false

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
