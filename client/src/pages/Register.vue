<template>
	<div class="register-container">
		<div class="content">
			<section>
				<img src="../assets/logo.svg" alt="Be The Hero" title="Be The Hero">
				<h1>Cadastro</h1>
				<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
				<router-link class="back-link" to="/">
					<feather type="arrow-left" size="16" stroke="#e02041" />
					Voltar para o logon
				</router-link>
			</section>
			<form>
				<input
					type="text"
					name="name"
					placeholder="Nome da ONG"
					v-model="name"
				>
				<input
					type="email"
					name="email"
					placeholder="E-mail"
					v-model="email"
				>
				<input
					type="email"
					name="whatsapp"
					placeholder="Whatsapp"
					v-model="whatsapp"
				>
				<div class="input-group">
					<input
						type="text"
						name="city"
						placeholder="Cidade"
						v-model="city"
					>
					<input
						type="text"
						name="uf"
						placeholder="UF"
						v-model="uf"
						v-bind:style="{ width: '80px' }"
						maxlength="2"
					>
				</div>
				<button class="button" type="submit">Cadastrar</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Register',
	data: () => ({
		name: '',
		email: '',
		whatsapp: '',
		city: '',
		uf: '',
	}),
}
</script>

<style lang="scss">
.register-container {
	width: 100%;
	max-width: 1120px;
	height: 100vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	.content {
		width: 100%;
		padding: 96px;
		background: #f0f0f5;
		box-shadow: 0 0 100px rgba($color: #000, $alpha: 0.1);
		border-radius: 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		section {
			width: 100%;
			max-width: 380px;
			h1 {
				margin: 64px 0 32px;
				font-size: 2rem;
			}
			p {
				font-size: 1.125rem;
				color: #737380;
				line-height: 1.4;
			}
		}
		form {
			width: 100%;
			max-width: 450px;
			input {
				margin: 8px 0 0;
			}
			.input-group {
				display: flex;
				input:first-of-type {
					margin-right: 8px;
				}
			}
		}
	}
}
</style>
