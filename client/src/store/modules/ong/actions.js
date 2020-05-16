import OngTypes from './types'
import router from '../../../router'
import api from '../../../services/api'
import setAuthId from '../../../utils/setAuthId'

export async function actionRegister(context, payload) {
	try {
		const res = await api.post('/ongs', payload)

		alert(`Seu ID de acesso: ${res.data.id}`)
		router.push('/')
	} catch (err) {
		alert('Erro ao cadastrar, tente novamnete')
	}
}

export async function actionLogin({ dispatch }, payload) {
	try {
		await api.post('/sessions', payload)

		dispatch('actionSetId', payload)
		router.push('/perfil')
	} catch (err) {
		dispatch('actionSetId', { id: '' })
		alert('Falha no login, tente novamente')
	}
}

export function actionSetId({ commit }, payload) {
	setAuthId(payload.id)
	commit(OngTypes.SET_ID, payload)
}

export function actionSetOng({ commit }, payload) {
	commit(OngTypes.SET_ONG, payload)
}
