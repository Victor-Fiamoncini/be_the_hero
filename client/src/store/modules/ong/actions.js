import OngTypes from './types'
import router from '../../../router'
import api from '../../../services/api'

export async function actionRegister({ commit }, payload) {
	try {
		const res = await api.post('/ongs', payload)
		const { id } = res.data

		commit(OngTypes.SET_ID, id)

		localStorage.setItem('ong_id', id)

		alert(`Seu ID de acesso: ${id}`)
		router.push('/')
	} catch (err) {
		alert('Erro ao cadastrar, tente novamnete')
	}
}

export async function actionLogin({ commit }, payload) {
	try {
		await api.post('/sessions', { payload })

		commit(OngTypes.SET_ID, payload)
		localStorage.setItem('ong_id', payload)
	} catch (err) {
		alert('Falha no login, tente novamente')
	}
}
