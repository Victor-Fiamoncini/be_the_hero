import Vue from 'vue'
import Router from 'vue-router'

import Logon from './pages/Logon'
import Register from './pages/Register'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'logon',
			component: Logon,
		},
		{
			path: '/cadastro',
			name: 'register',
			component: Register,
		},
	],
})
