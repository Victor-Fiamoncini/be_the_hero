import Vue from 'vue'
import Vuex from 'vuex'

import ong from './modules/ong'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		ong,
	},
})
