import OngTypes from './types'
import router from '../../../router'
import api from '../../../services/api'
import setAuthToken from '../../../utils/setAuthToken'

export async function actionRegister(context, payload) {
	try {
		await api.post('/ongs', payload)

		alert('Cadastro efetuado com sucesso!')

		router.push({ name: 'Logon' })
	} catch (err) {
		alert('Erro ao cadastrar, tente novamente')
	}
}

export async function actionLogin({ dispatch }, payload) {
	try {
		const res = await api.post('/sessions', payload)

		dispatch('actionSetToken', res.data.token)
		dispatch('actionSetOng', res.data.ong)

		router.push({ name: 'Perfil' })
	} catch (err) {
		dispatch('actionUnsetSession')
		alert('Falha no login, tente novamente')
	}
}

export function actionCheckToken({ dispatch, state }) {
	if (state.token) {
		return state.token
	}

	const token = localStorage.getItem('auth_token')

	if (!token) {
		dispatch('actionUnsetSession', token)

		return false
	}

	dispatch('actionSetToken', token)
	dispatch('actionLoadSession')
}

export async function actionLoadSession({ dispatch }) {
	try {
		const res = await api.get('/sessions')

		dispatch('actionSetOng', res.data)
	} catch (err) {
		dispatch('actionUnsetSession')
	}
}

export function actionSetToken({ commit }, payload) {
	setAuthToken(payload)
	commit(OngTypes.SET_TOKEN, payload)
}

export function actionSetOng({ commit }, payload) {
	commit(OngTypes.SET_ONG, payload)
}

export function actionUnsetSession({ dispatch }) {
	setAuthToken('')
	dispatch('actionSetToken', '')
	dispatch('actionSetOng', {})
}
