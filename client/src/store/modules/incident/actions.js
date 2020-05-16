import IncidentTypes from './types'
import router from '../../../router'
import api from '../../../services/api'

export async function actionFetchIncidents({ dispatch }) {
	console.log('1')
}

export async function actionStoreIncident({ dispatch }, payload) {
	try {
		await api.post('/incidents', payload)

		alert('Cadastro do caso efetuado com sucesso!')

		router.push({ name: 'Perfil' })
	} catch (err) {
		alert('Erro ao cadastrar, tente novamnete')
	}
}
