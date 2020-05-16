import OngTypes from './types'

export default {
	[OngTypes.SET_ID]: (state, payload) => {
		state.id = payload.id
	},
	[OngTypes.SET_ONG]: (state, payload) => {
		state.name = payload.name
	},
}
