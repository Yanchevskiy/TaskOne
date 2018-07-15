<template>
  <div class="app">
    <object type="image/svg+xml" data="src/assets/sprite.svg" v-show="false"></object>
    <h1 class="app__head">Разделы</h1> 
    <transition-group appear name="show" tag="ul">
      <icon 
        v-for="item in items"
        :element="item"
        :key="item.id"
      ></icon>
    </transition-group>
  </div>    
</template>

<script>
import iconItem from './icon.vue';
import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyDhB4k_7SxZKZh22IuK484YStDaQOtVybM",
  authDomain: "test-project-775bb.firebaseapp.com",
  databaseURL: "https://test-project-775bb.firebaseio.com",
  projectId: "test-project-775bb",
  storageBucket: "test-project-775bb.appspot.com",
  messagingSenderId: "749999676845"
};

let app = Firebase.initializeApp(config)
let db = app.database()
let dataItem = db.ref('dataArr')

export default {
  data () {
    return {
      dataArr: []         
    }
  },
  components: {
    'icon': iconItem
  },
  firebase: {
    items: dataItem
  }
}
</script>

<style lang="sass">
  $color-background: #424C52
  $color-text-complimentary: #F1EBE4
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
    background-color: $color-background
    color: $color-text-complimentary

    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;

    .app__head 
      margin-bottom: 5%
      font-size: calc( (100vw - 210px)/(1920 - 210) * (80 - 40) + 40px)

  .show-enter-active, .show-leave-active 
    transition: opacity .5s

  .show-enter, .show-leave-to 
    opacity: 0

</style>