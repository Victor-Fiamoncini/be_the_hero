import BaseDAO from '../BaseDAO'
import knex from '../../database/connection'

export default class IncidentDAO extends BaseDAO {
	constructor(tableName) {
		super(tableName)
	}

	async create(entity) {
		const res = await knex(this.tableName).insert({
			title: entity.title,
			description: entity.description,
			value: entity.title,
			ong_id: entity.ongId,
		})

		console.log(res)

		return 'res._ongId'
	}
}
