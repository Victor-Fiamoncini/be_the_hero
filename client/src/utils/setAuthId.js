import api from '../services/api'

export default (id) => {
	if (id) {
		localStorage.setItem('ong_id', id)
		api.defaults.headers.common['Authorization'] = id
	} else {
		localStorage.removeItem('ong_id')
		delete api.defaults.headers.common['Authorization']
	}
}
