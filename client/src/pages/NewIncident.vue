<template>
	<div class="new-incident-container">
		<div class="content">
			<section>
				<img src="../assets/logo.svg" alt="Be The Hero" title="Be The Hero">
				<h1>Cadastrar novo caso</h1>
				<p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
				<router-link class="back-link" to="/perfil">
					<feather type="arrow-left" size="16" stroke="#e02041" />
					Voltar para home
				</router-link>
			</section>
			<form>
				<input
					type="text"
					name="title"
					placeholder="Título do caso"
					v-model="title"
				>
				<textarea
					type="text"
					name="description"
					placeholder="Descrição"
					v-model="description"
				></textarea>
				<input
					type="text"
					name="value"
					placeholder="Valor em reais"
					v-model="value"
				>
				<button class="button" type="submit">Cadastrar</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NewIncident',
	data: () => ({
		title: '',
		description: '',
		value: '',
	}),
}
</script>

<style lang="scss">
.new-incident-container {
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
			input,
			textarea {
				margin: 8px 0 0;
			}
		}
	}
}
</style>
