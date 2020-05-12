import BaseDAO from '../BaseDAO'
import knex from '../../database/connection'

export default class IncidentDAO extends BaseDAO {
	constructor(tableName) {
		super(tableName)
	}

	async index() {
		return await knex(this.tableName).select('*')
	}

	async findById(id) {
		return await knex(this.tableName).where('id', id).select('ong_id').first()
	}

	async findByOngId(ongId) {
		return await knex(this.tableName).where('ong_id', ongId).select('*')
	}

	async store(incident) {
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

	async destroy(id) {
		return await knex(this.tableName).where('id', id).delete()
	}
}
