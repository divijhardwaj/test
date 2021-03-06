import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from "jquery";

Vue.config.productionTip = false
//dependency injection
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
