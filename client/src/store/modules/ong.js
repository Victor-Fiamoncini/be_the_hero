import api from '../../services/api'
import router from '../../router'

const state = {
	id: '',
	name: '',
}

const getters = {}

const actions = {
	login: async ({ commit }, id) => {
		try {
			const res = await api.post('/sessions', { id })

			commit('setOng', {
				id,
				name: res.data.name,
			})

			router.push('/perfil')
		} catch (err) {
			commit('setOng', { id: '', name: '' })
			alert('Falha no login, tente novamente')
		}
	},
	storeOng: async ({ commit }, ong) => {
		try {
			const res = await api.post('/ongs', ong)

			alert(`Seu ID de acesso: ${res.data.id}`)

			commit('setOng', {
				id: res.data.id,
				name: '',
			})
			router.push('/')
		} catch (err) {
			alert('Erro ao cadastrar, tente novamnete')
		}
	},
}

const mutations = {
	setOng: (state, { id, name }) => {
		state.id = id
		state.name = name
	},
}

export default {
	state,
	getters,
	actions,
	mutations,
}
