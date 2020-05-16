import OngTypes from './types'
import router from '../../../router'
import api from '../../../services/api'

export async function actionRegister({ dispatch }, payload) {
	try {
		const res = await api.post('/ongs', payload)
		const { id } = res.data

		dispatch('actionSetId', id)

		alert(`Seu ID de acesso: ${id}`)
		router.push('/')
	} catch (err) {
		alert('Erro ao cadastrar, tente novamnete')
	}
}

export async function actionLogin({ dispatch }, payload) {
	try {
		await api.post('/sessions', payload)

		dispatch('actionSetId', payload)

		localStorage.setItem('ong_id', payload.id)
	} catch (err) {
		dispatch('actionSetId', { id: '' })
		localStorage.removeItem('ong_id')

		alert('Falha no login, tente novamente')
	}
}

export function actionSetId({ commit }, payload) {
	commit(OngTypes.SET_ID, payload)
}

export function actionSetOng({ commit }, payload) {
	commit(OngTypes.SET_ONG, payload)
}
