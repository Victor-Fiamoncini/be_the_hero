import OngTypes from './types'

export default {
	[OngTypes.SET_TOKEN]: (state, payload) => {
		state.token = payload
	},
	[OngTypes.SET_ONG]: (state, payload) => {
		state.ong = payload
	},
}
