import BaseDAO from '../BaseDAO'
import knex from '../../database/connection'

export default class OngDAO extends BaseDAO {
	constructor(tableName) {
		super(tableName)
	}

	async create(ong) {
		await knex(this.tableName).insert({
			id: ong.id,
			name: ong.name,
			email: ong.email,
			whatsapp: ong.whatsapp,
			city: ong.city,
			uf: ong.uf,
		})

		return ong
	}

	async find() {
		return await knex(this.tableName).select('*')
	}
}
