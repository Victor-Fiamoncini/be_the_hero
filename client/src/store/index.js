import Vue from 'vue'
import Vuex from 'vuex'

import ong from './modules/ong/index'
import incident from './modules/incident/index'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		ong,
		incident,
	},
})
