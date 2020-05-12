<template>
	<div class="logon-container">
		<section class="form">
			<img src="../assets/logo.svg" alt="Be The Hero" title="Be The Hero">
			<form>
				<h1>Faça seu logon</h1>
				<input type="text" placeholder="Seu ID">
				<button class="button" type="submit">Entrar</button>
				<a href="/cadastro">
					<feather type="log-in" size="16" stroke="#e02041" />
					Não tenho cadastro
				</a>
			</form>
		</section>
		<img src="../assets/heroes.png" alt="Heroes" title="Heroes">
	</div>
</template>

<script>
export default {
	name: 'Logon',
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
	justify-content: center;
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
			a {
				display: flex;
				align-items: center;
				margin: 40px 0 0;
				color: #41414d;
				font-size: 1.125rem;
				font-weight: 500;
				text-decoration: none;
				transition: opacity .2s;
				&:hover {
					opacity: 0.8;
				}
				svg {
					margin: 0 10px 0 0;
				}
			}
		}
	}
}
</style>
