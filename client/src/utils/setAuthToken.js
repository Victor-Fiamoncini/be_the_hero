import api from '../services/api'

export default (token) => {
	if (token) {
		localStorage.setItem('auth_token', token)
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		localStorage.removeItem('auth_token')
		delete api.defaults.headers.common['Authorization']
	}
}
