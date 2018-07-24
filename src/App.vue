<template>
  <div class="global-wrap">
    <simpleList></simpleList>
    <navPills></navPills>
  </div>
</template>

<script>
import simpleList from './simpleList.vue'
import navPills from './navPills.vue'

export default {
  components: {
    'simpleList': simpleList,
    'navPills': navPills
  }
}
</script>

<style lang="scss">
  @import 'sass/main.sass'
</style>