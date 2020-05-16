import store from '../store'

export default async (to, from, next) => {
	document.title = `Be The Hero - ${to.name}`

	await store.dispatch('ong/actionCheckToken')
	const hasToken = store.getters['ong/hasToken']

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (hasToken) {
			next()
		} else {
			next({ name: 'Logon' })
		}
	} else {
		if (hasToken) {
			next({ name: 'Perfil' })
		} else {
			next()
		}
	}
}
