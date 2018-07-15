import Vue from 'vue'

import VueFire from 'vuefire'
import simpleList from './simpleList.vue'
Vue.use(VueFire)

// import BootstrapVue from "bootstrap-vue"
// import NavPils from './NavPils.vue'
// import InputWithBtn from './InputWithBtn.vue'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"
// Vue.use(BootstrapVue)

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
// Vue.use(VueMaterial)



new Vue({
  el: '#app',
  //render: h => h(NavPils)
  render: h => h(simpleList)
})

