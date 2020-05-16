import OngTypes from './types'

export default {
	[OngTypes.SET_ONG]: (state, payload) => {
		state.id = payload.id
		state.name = payload.name
	},
	[OngTypes.SET_ID]: (state, payload) => {
		state.id = payload.id
	},
}
