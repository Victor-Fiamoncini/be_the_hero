<template>
	<div class="logon-container">
		<section class="form">
			<img
				src="../assets/logo.svg"
				alt="Be The Hero"
				title="Be The Hero"
			/>
			<form v-on:submit="submit">
				<h1>Faça seu logon</h1>
				<input
					type="email"
					name="email"
					placeholder="Seu e-mail"
					required
					v-model="form.email"
				/>
				<input
					type="password"
					name="password"
					placeholder="Sua senha"
					required
					v-model="form.password"
				/>
				<button class="button" type="submit">
					Entrar
				</button>
				<router-link class="back-link" to="/cadastro">
					<feather
						type="log-in"
						size="16"
						stroke="#e02041"
					/>
					Não tenho cadastro
				</router-link>
			</form>
		</section>
		<img
			src="../assets/heroes.png"
			alt="Heroes"
			title="Heroes"
		/>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Logon',
	data: () => ({
		form: {
			email: 'apad@mail.com',
			password: 'adminadmin',
		}
	}),
	methods: {
		...mapActions('ong', ['actionLogin']),

		submit(event) {
			event.preventDefault()

			this.actionLogin(this.form)
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
			input {
				margin: 0 0 8px;
			}
		}
	}
}
</style>
