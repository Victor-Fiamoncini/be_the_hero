import BaseDAO from '../BaseDAO'
import knex from '../../database/connection'

export default class IncidentDAO extends BaseDAO {
	constructor(tableName) {
		super(tableName)
	}

	async index() {
		return await knex(this.tableName).select('*')
	}

	async findAndPaginate(page) {
		return await knex(this.tableName)
			.join('ongs', 'ongs.id', '=', 'incidents.ong_id')
			.limit(5)
			.offset((page - 1) * 5)
			.select([
				'incidents.*',
				'ongs.name',
				'ongs.email',
				'ongs.whatsapp',
				'ongs.city',
				'ongs.uf',
			])
	}

	async findById(id) {
		return await knex(this.tableName).where('id', id).select('ong_id').first()
	}

	async findByOngId(ongId) {
		return await knex(this.tableName).where('ong_id', ongId).select('*')
	}

	async findCount() {
		return await knex(this.tableName).count()
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
