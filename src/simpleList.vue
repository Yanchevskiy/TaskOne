<template>
  <div class="app">
  <object type="image/svg+xml" data="src/assets/sprite.svg" style="display: none;">
  </object>
    <h1 class="app__head">Разделы</h1>
    <ul>  
      <icon 
        v-for="item in dataArr"
        :element="item"
        :key="item.id"
      ></icon>
    </ul>
  </div>    
</template>

<script>
import iconItem from './icon.vue';

export default {
  data () {
    return {
      dataArr: [{id: 0, icon: "#icon-bars", title: "На рассмотрении", value: 12, color: "#70B7EB" },
                {id: 1, icon: "#icon-pause", title: "Одобренный", value: 2, color: "#55B48A"},
                {id: 2, icon: "#icon-eye", title: "Оплаченные", value: 7, color: "#4CBDCB"},
                {id: 3, icon: "#icon-checkmark", title: "Приостановленные", value: 22, color: "#FBA842"},
                {id: 4, icon: "#icon-trashcan", title: "Удаленные", value: 0, color: "#63B0DA"},
                {id: 5, icon: "#icon-database", title: "График платежей", value: 5, color: "#70B7EB"}]  
    }
  },
  components: {
    'icon': iconItem
  }
}
</script>

<style lang="sass">
  $dark-grey: #424c52
  $light-gray: #767F7E
  $white: #FFFFFF

  * 
    box-sizing: border-box

  html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video 
    margin: 0
    padding: 0
    border: 0
    font-size: 100%
    font: inherit
    vertical-align: baseline

  body 
    line-height: 1

  html 
    font-size: 62.5%

  ol, ul 
    list-style: none

  .app 
    width: 30vw
    min-width: 210px
    margin: 0 auto
    padding: 2%
    font-size: 2rem
    border-radius: 10px
    background-color: $dark-grey
    color: $light-gray

    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;

    .app__head 
      margin-bottom: 5%
      font-size: calc( (100vw - 210px)/(1920 - 210) * (80 - 40) + 40px)
</style>