import IncidentTypes from './types'

export default {
	[IncidentTypes.FETCH_ONG_INCIDENTS]: (state, payload) => {
		state.incidents = payload
	},
}
