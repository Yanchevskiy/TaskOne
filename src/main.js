import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import axios from 'axios'

Vue.use(BootstrapVue, axios)

import app from './App.vue'

new Vue({
  el: '#app',
  render: h => h(app)
})

