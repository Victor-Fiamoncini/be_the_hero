import Vue from 'vue'
import VueFeather from 'vue-feather'
import router from './router/index'
import store from './store'

import App from './App.vue'

Vue.use(VueFeather)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
