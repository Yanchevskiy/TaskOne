<template>
  <div class="app-pills">
    <inputWithBtn :name="names"></inputWithBtn>
    <b-nav pills>
      <b-nav-item
        v-for="element in names"
        :key="element.id"
        :name="element.name"
      >{{element.name}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import inputWithBtn from './inputWithBtn.vue'

export default {
  props: ["element"],
  data () {
    return {
      names: []
    }
  },
  components: {
    'inputWithBtn': inputWithBtn
  }
}
</script>