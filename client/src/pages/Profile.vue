<template>
	<div class="profile-container">
		<header>
			<img
				src="../assets/logo.svg"
				alt="Be The Hero"
				title="Be The Hero"
			/>
			<span>Bem vinda, {{ getOng.name }}</span>
			<router-link class="button" to="/casos/novo">
				Cadastrar novo caso
			</router-link>
			<button v-on:click="handleLogoff">
				<feather
					type="power"
					size="18"
					stroke="#e02041"
				/>
			</button>
		</header>
		<div v-if="getOngIncidents.length > 0">
			<h1>Casos cadastrados</h1>
			<ul>
				<li v-for="incident in getOngIncidents" v-bind:key="incident.id">
					<strong>CASO:</strong>
					<p>{{ incident.title }}</p>
					<strong>Descrição:</strong>
					<p>{{ incident.description }}</p>
					<strong>Valor</strong>
					<p>{{ incident.value }}</p>
					<button type="button" v-on:click="handleDestroyIncident(incident.id)">
						<feather
							type="trash-2"
							size="20"
							stroke="#a8a8b3"
						/>
					</button>
				</li>
			</ul>
		</div>
		<div v-else>
			<h1>Não encontramos nenhum caso cadastrado em sua ONG</h1>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Profile',
	mounted() {
		this.actionFetchOngIncidents()
	},
	computed: {
		...mapGetters('ong', ['getOng']),
		...mapGetters('incident', ['getOngIncidents']),
	},
	methods: {
		...mapActions('ong', ['actionUnsetSession']),
		...mapActions('incident', ['actionFetchOngIncidents', 'actionDestroyIncident']),

		handleLogoff() {
			this.actionUnsetSession()
			this.$router.push({ name: 'Logon' })
		},
		handleDestroyIncident(id) {
			this.actionDestroyIncident(id)
		},
	},
}
</script>

<style lang="scss">
.profile-container {
	width: 100%;
	max-width: 1180px;
	padding: 0 30px;
	margin: 32px auto;
	header {
		display: flex;
		align-items: center;
		span {
			font-size: 20px;
			margin-left: 24px;
		}
		img {
			height: 64px;
		}
		a.button {
			padding: 20px 0;
			width: 260px;
			margin-left: auto;
			margin-top: 0;
		}
		button {
			height: 60px;
			width: 60px;
			border: 1px solid #dcdce6;
			border-radius: 4px;
			background: transparent;
			margin-left: 16px;
			transition: border .3s;
			&:hover {
				border-color: #999;
			}
		}
	}
	h1 {
		margin: 80px 0 24px;
	}
	ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		list-style: none;
		li {
			background: #fff;
			padding: 24px;
			border-radius: 8px;
			position: relative;
			strong {
				text-transform: uppercase;
				display: block;
				margin-bottom: 16px;
				color: #41414d;
				&:not(:first-of-type) {
					margin-top: 32px;
				}
			}
			p {
				color: #737380;
				line-height: 1.4;
				font-size: 1rem;
			}
			button {
				position: absolute;
				top: 24px;
				right: 24px;
				border: 0;
				transition: opacity .3s;
				&:hover {
					opacity: 0.8;
				}
			}
		}
	}
}
</style>
