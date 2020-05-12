import BaseDAO from '../BaseDAO'
import knex from '../../database/connection'

export default class OngDAO extends BaseDAO {
	constructor(tableName) {
		super(tableName)
	}

	async index() {
		return await knex(this.tableName).select('*')
	}

	async store(ong) {
		const [id] = await knex(this.tableName)
			.insert({
				id: ong.id,
				name: ong.name,
				email: ong.email,
				whatsapp: ong.whatsapp,
				city: ong.city,
				uf: ong.uf,
			})
			.returning('id')

		return id
	}
}
