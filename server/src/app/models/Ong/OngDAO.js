import BaseDAO from '../BaseDAO'
import knex from '../../database/connection'

export default class OngDAO extends BaseDAO {
	constructor(tableName) {
		super(tableName)
	}

	async index() {
		return await knex(this.tableName).select([
			'name',
			'email',
			'whatsapp',
			'city',
			'uf',
		])
	}

	async findById(id) {
		return await knex(this.tableName)
			.where('id', id)
			.select(['id', 'name', 'email', 'whatsapp', 'city', 'uf'])
			.first()
	}

	async findByEmail(email) {
		return await knex(this.tableName).where('email', email).select('*').first()
	}

	async store(ong) {
		await knex(this.tableName).insert({
			name: ong.name,
			email: ong.email,
			password: ong.password,
			whatsapp: ong.whatsapp,
			city: ong.city,
			uf: ong.uf,
		})
	}
}
