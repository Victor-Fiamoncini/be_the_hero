import IncidentTypes from './types'
import router from '../../../router'
import api from '../../../services/api'

export async function actionFetchOngIncidents({ dispatch }) {
	try {
		const res = await api.get('/profile')

		dispatch('actionSetOngIncidents', res.data)
	} catch (err) {
		alert('Erro ao buscar os casos da sua ONG')
	}
}

export async function actionStoreIncident(context, payload) {
	try {
		await api.post('/incidents', payload)

		alert('Cadastro do caso efetuado com sucesso!')

		router.push({ name: 'Perfil' })
	} catch (err) {
		alert('Erro ao cadastrar o caso, tente novamente')
	}
}

export async function actionDestroyIncident({ dispatch }, payload) {
	try {
		await api.delete(`/incidents/${payload}`)

		dispatch('actionFetchOngIncidents')
		alert('Caso apagado com sucesso!')
	} catch (err) {
		alert('Erro ao apagar o caso, tente novamente')
	}
}

export function actionSetOngIncidents({ commit }, payload) {
	commit(IncidentTypes.SET_ONG_INCIDENTS, payload)
}
