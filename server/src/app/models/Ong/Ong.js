import { hash } from 'bcrypt'

export default class Ong {
	constructor(name, email, password, whatsapp, city, uf) {
		this.name = name
		this.email = email
		this.password = password
		this.whatsapp = whatsapp
		this.city = city
		this.uf = uf
	}

	async beforeSave() {
		this.password = await hash(this.password, 10)
	}

	validate() {
		if (!this.email || !this.password) {
			return false
		}

		return true
	}
}
