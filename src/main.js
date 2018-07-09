import Vue from 'vue'
import App from './App.vue'
import simpleList from './simpleList.vue'

Vue.component('app-example', simpleList)

new Vue({
  el: '#app',
  render: h => h(simpleList)
})
