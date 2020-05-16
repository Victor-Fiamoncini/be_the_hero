import IncidentTypes from './types'

export default {
	[IncidentTypes.SET_ONG_INCIDENTS]: (state, payload) => {
		state.incidents = payload
	},
}
