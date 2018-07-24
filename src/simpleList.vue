<template>
  <div class="app-list">
    <object type="image/svg+xml" data="src/assets/sprite.svg" v-show="false"></object>
    <h1 class="app__head">Разделы</h1>
    <transition-group appear name="show" tag="ul">
      <icon
        v-for="item in dataArr"
        :element="item"
        :key="item.id"
      ></icon>
    </transition-group>
  </div>
</template>

<script>
import icon from './icon.vue'
import axios from 'axios'

export default {
  data () {
    return {
      dataArr: []
    }
  },
  components: {
    'icon': icon
  },
  mounted() {
    axios
      .get("https://test-project-775bb.firebaseio.com/dataArr.json")
      .then(response => this.dataArr = response.data)
      .catch(error => console.log(error))
  }
}
</script>