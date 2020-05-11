import BaseDAO from '../BaseDAO'
import knex from '../../database/connection'

export default class IncidentDAO extends BaseDAO {
	constructor(tableName) {
		super(tableName)
	}

	async create(incident) {
		const [id] = await knex(this.tableName)
			.insert({
				title: incident.title,
				description: incident.description,
				value: incident.value,
				ong_id: incident.ongId,
			})
			.returning('id')

		return id
	}
}
