<template>
  <form class="login" @submit.prevent="addNewName">
    <div v-if="errors.length" class="login-err">
      <b>Пожалуйста заполните поле имя...</b>
    </div>

    <div class="btn-wrap">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input v-model="newNameText" @keyup.enter.prevent="addNewName" class="mdl-textfield__input" type="text" pattern="[A-Z,a-z,А-Я,а-я]*" id="username" />
        <input type="text" style="display:none;">
        <label class="mdl-textfield__label" for="username">Введите имя</label>
        <span class="mdl-textfield__error">Введите имя только буквами и без пробелов!</span>
      </div>
    
      <div v-if="inputValid" @click="addNewName" :style="{pointerEvents: 'none'}" class="add-button add-button_disabled">-DISABLED-</div>
      <div v-else @click="addNewName" :style="{pointerEvents: 'auto'}" class="add-button">-ENABLED-</div>
    </div>
  </form>
</template>

<script>

import axios from 'axios'

export default {
  props: ["name"],
  data () {
    return {
      newNameText: '',
      newId: this.name.length + 1,
      errors: [],
      serverArr: []
    }
  },
  computed: {
    inputValid: function() {
      if(this.newNameText === "" || /\s/.test(this.newNameText) || /\d/.test(this.newNameText)) {
        return true
      }
      else {
        return false
      }
    }
  },
  methods: {
    addNewName: function (e) {
      e.preventDefault()

      if(this.newNameText === '') {
        this.errors.push('Name required.')
        return
      };

      this.errors = []

      this.name.push({
        id: this.newId,
        name: this.newNameText
      });

      axios.post("https://test-project-775bb.firebaseio.com/inputData.json", {
        id: this.newId,
        name: this.newNameText
      }) 
      .then(response => console.log(response))

      this.newNameText = ''
      this.newId = this.name.length + 1
    }
  },
  mounted() {
    axios
      .get("https://test-project-775bb.firebaseio.com/inputData.json")
      .then(response => {
        this.serverArr = Object.values(response.data)
        for (let i = 0; i < this.serverArr.length; i++) {
          this.name.push(this.serverArr[i])
        }
        this.newId = this.serverArr.length + 1
      })
      .catch(error => console.log(error))
  }
}
</script>