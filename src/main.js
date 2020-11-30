import Vue from 'vue'
import router from './router'
import store from './store/index.js'

// Vue instance
new Vue({
  el: "#app",
  router,
  store,
  render: h => h('router-view')
});