

Vue.component('icon', {
  props: ['element'],
  template: '<li><a href="#" class="icon"><svg  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"><use v-bind:xlink:href="element.icon"></use></svg></a><p>{{element.title}}</p><div class="counter__box" v-bind:style="{backgroundColor: element.color}"><span class="counter__value">{{element.value}}</span></div></li>'
})

new Vue ({
  el: ".app",
  data: {
    dataArr: [{id: 0, icon: "#icon-bars", title: "На рассмотрении", value: 12, color: "#70B7EB" },
              {id: 1, icon: "#icon-pause", title: "Одобренный", value: 2, color: "#55B48A"},
              {id: 2, icon: "#icon-eye", title: "Оплаченные", value: 7, color: "#4CBDCB"},
              {id: 3, icon: "#icon-checkmark", title: "Приостановленные", value: 22, color: "#FBA842"},
              {id: 4, icon: "#icon-trashcan", title: "Удаленные", value: 0, color: "#63B0DA"},
              {id: 5, icon: "#icon-database", title: "График платежей", value: 5, color: "#70B7EB"}]  
  }
});
