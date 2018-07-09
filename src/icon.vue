<template>
  <li class="item__box">
    <a href="#" class="icon__box">
      <svg  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink">
        <use :xlink:href=svgFullDir></use>
      </svg>
    </a>
    <p>{{element.title}}</p>
    <div class="counter__box" :style="{backgroundColor: element.color}"">
      <span class="counter__value">{{element.value}}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: ["element"],
  data () {
    return {
      
    }
  },
  computed: {
    svgFullDir: function () {
      return 'src/assets/sprite.svg' + this.element.icon
    } 
  }
}
</script>

<style lang="sass">
  $white: #FFFFFF

  .item__box 
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
    align-items: center
    margin-bottom: 5%
    font-size: calc( (100vw - 210px)/(1920 - 210) * (30 - 15) + 15px)

    svg 
      width: 16px
      height: 16px
      overflow: hidden

    p 
      margin-left: 5%

    .counter__box 
      border-radius: 5px
      padding: 2%
      margin-left: 5%

      .counter__box span 
        color: $white
</style>