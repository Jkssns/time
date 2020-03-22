import Vue from 'vue'
import App from './App.vue'
import time from './time'

Vue.use(time)

new Vue({
  el: '#app',
  render: h => h(App)
})
