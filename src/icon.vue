<template>
  <li class="item">
    <div class="svg-box svg-box_normal">
      <svg  class="svg-box__item" xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink">
        <use :xlink:href=svgFullDir></use>
      </svg>
    </div>

    <p class="item__title">{{element.title}}</p>

    <div class="counter-box" :style="{backgroundColor: element.color}">
      <span class="counter-box__value">{{element.value}}</span>
    </div>
  </li>
</template>

<script>

export default {
  props: ["element"],
  computed: {
    svgFullDir: function () {
      return "src/assets/sprite.svg" + this.element.icon
    }
  }
}
</script>