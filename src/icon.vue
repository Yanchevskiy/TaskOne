<template>
  <li class="item">
    <div class="svg-box">
      <svg  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink">
        <use :xlink:href=svgFullDir></use>
      </svg>
    </div>
    <p>{{element.title}}</p>
    <div class="counter-box" :style="{backgroundColor: element.color}">
      <span class="counter-box__value">{{element.value}}</span>
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
      return "src/assets/sprite.svg" + this.element.icon
    } 
  }
}
</script>

<style lang="sass">
  $white: #FFFFFF
  $color-svg: #F1EBE4

  .item 
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
    align-items: center
    margin-bottom: 5%
    font-size: calc( (100vw - 210px)/(1920 - 210) * (30 - 15) + 15px)

    p 
      padding-left: 5%

  .counter-box 
    border-radius: 5px
    padding: 2%
    margin-left: 5%

    .counter-box__value 
      color: $white

  .svg-box 
    height: 0
    width: 10%
    padding-top: 10%
    position: relative

    svg 
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      fill: $color-svg

</style>