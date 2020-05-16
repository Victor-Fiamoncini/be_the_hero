<template>
	<div class="logon-container">
		<section class="form">
			<img src="../assets/logo.svg" alt="Be The Hero" title="Be The Hero">
			<form v-on:submit="handleFormSubmit">
				<h1>Faça seu logon</h1>
				<input type="text" v-model="id" placeholder="Seu ID">
				<button class="button" type="submit">Entrar</button>
				<router-link class="back-link" to="/cadastro">
					<feather type="log-in" size="16" stroke="#e02041" />
					Não tenho cadastro
				</router-link>
			</form>
		</section>
		<img src="../assets/heroes.png" alt="Heroes" title="Heroes">
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Logon',
	data: () => ({
		id: ''
	}),
	methods: {
		...mapActions(['login']),
		handleFormSubmit(event) {
			event.preventDefault()

			this.login(this.id)
		}
	},
}
</script>

<style lang="scss">
.logon-container {
	width: 100%;
	max-width: 1120px;
	height: 100vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	section.form {
		width: 100%;
		max-width: 350px;
		margin: 0 30px 0 0;
		form {
			margin: 100px 0 0;
			h1 {
				font-size: 2rem;
				margin: 0 0 32px;
			}
		}
	}
}
</style>
