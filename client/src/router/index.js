import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'

import Logon from '../pages/Logon'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import NewIncident from '../pages/NewIncident'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Logon',
			component: Logon,
		},
		{
			path: '/cadastro',
			name: 'Cadastro',
			component: Register,
		},
		{
			path: '/perfil',
			name: 'Perfil',
			component: Profile,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/casos/novo',
			name: 'Novo Caso',
			component: NewIncident,
			meta: {
				requiresAuth: true,
			},
		},
	],
})

router.beforeEach(beforeEach)

export default router
