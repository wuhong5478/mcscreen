import Vue from 'vue'
import ElementUI from 'element-ui'
import ECharts from 'vue-echarts'
import App from './App.vue'
import router from './router'
import utils from './utils/utils'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/global.less'
import * as filters from './filters'

Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.prototype.$utils = utils;
Vue.use(ElementUI)
Vue.component('v-chart', ECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
