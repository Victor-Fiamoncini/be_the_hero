import BaseDAO from '../BaseDAO'
import knex from '../../database/connection'

export default class OngDAO extends BaseDAO {
	constructor(tableName) {
		super(tableName)
	}

	async create(entity) {
		await knex(this.tableName).insert({
			id: entity.id,
			name: entity.name,
			email: entity.email,
			whatsapp: entity.whatsapp,
			city: entity.city,
			uf: entity.uf,
		})

		return entity
	}

	async find() {
		return await knex(this.tableName).select('*')
	}
}
