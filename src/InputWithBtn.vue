<template>
	<form class="login" @submit.prevent="addNewName">
		<div v-if="errors.length" class="login-err">
			<b>Пожалуйста заполните поле имя...</b>
		</div>

		<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input v-model="newNameText" @keyup.enter.prevent="addNewName" class="mdl-textfield__input" type="text" pattern="[A-Z,a-z,А-Я,а-я]*" id="username" />
			<input type="text" style="display:none;">
			<label class="mdl-textfield__label" for="username">Введите имя</label>
			<span class="mdl-textfield__error">Введите имя только буквами и без пробелов!</span>
		</div>
		
		<div v-if="newNameText === ''" @click="addNewName" :style="{pointerEvents: 'none'}" class="add-button add-button_disabled">-DISABLED-</div> 
		<div v-else @click="addNewName" :style="{pointerEvents: 'auto'}" class="add-button">-ENABLED-</div>

	</form>
</template>

<script>
export default {
	props: ["name"],
	data () {
		return {
			newNameText: '',
			newId: this.name.length + 1,
			errors: []
		}
	},
	methods: {
		addNewName: function (e) {
			e.preventDefault();

			if(this.newNameText === '') {
				this.errors.push('Name required.');
				return
			}

			this.errors = [];

			this.name.push({
				id: this.newId,
				name: this.newNameText
			})
			this.newNameText = ''
			this.newId = this.name.length + 1
		},
		inputValid: function() {
			if(this.newNameText === '') {
				return true
			}
		}
	}
}
</script>

<style lang="sass">
	.login
		margin-top: 2rem
		display: flex
		flex-wrap: wrap
		align-items: center
		width: 400px

	.login-err
		width: 100%
		border: 1px solid
		text-align: center
		margin: 10px 0px
		padding: 15px 5px 15px 5px
		color: #D8000C
		background-color: #FFBABA

	.add-button
		display: flex
		align-content: center
		align-items: center
		height: 50%
		position: relative
		cursor: pointer
		font-size: 90%
		font-weight: 700
		color: #ffffff
		text-decoration: none
		text-shadow: 0 -1px 2px rgba(0,0,0,.2)
		padding: .5em 1em
		margin-left: 10px
		outline: none
		border-radius: 3px
		background: linear-gradient(rgb(110,112,120), rgb(81,81,86)) rgb(110,112,120)
		box-shadow: 0 1px rgba(255,255,255,.2) inset, 0 3px 5px rgba(0,1,6,.5), 0 0 1px 1px rgba(0,1,6,.2)
		transition: .2s ease-in-out

		&:hover:not(:active) 
			background: linear-gradient(rgb(126,126,134), rgb(70,71,76)) rgb(126,126,134)
	
		&:active 
			top: 1px
			background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82)
			box-shadow: 0 0 1px rgba(0,0,0,.5) inset, 0 2px 3px rgba(0,0,0,.5) inset, 0 1px 1px rgba(255,255,255,.1)

		.add-button_disabled
			background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898 
			background-blend-mode: multiply,multiply

	.mdl-textfield
		width: 73%

	.mdl-layout 
		align-items: center
		justify-content: center

	.mdl-layout__content 
		padding: 24px
		flex: none

	.mdl-textfield__error 
		width: 100%
		left: 0
		text-align: left

	.mdl-textfield__input
		margin-bottom: 8px


</style>