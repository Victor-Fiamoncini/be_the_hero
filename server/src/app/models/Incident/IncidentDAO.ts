import BaseDAO from '../BaseDAO'
import Incident from './Incident'

import knex from '../../database/connection'

export default class IncidentDAO extends BaseDAO<Incident> {
	public constructor(tableName: string) {
		super(tableName)
	}

	public async create(entity: Incident): Promise<string | Incident> {
		const res = await knex(this.tableName).insert({
			title: entity.title,
			description: entity.description,
			value: entity.title,
			ong_id: entity.ongId,
		})

		console.log(res)

		return 'res._ongId'
	}

	public async update(
		id: string,
		entity: Incident
	): Promise<string | Incident> {
		throw new Error('Method not implemented.')
	}

	public async delete(id: string): Promise<string | Incident> {
		throw new Error('Method not implemented.')
	}

	public async find(): Promise<Incident[]> {
		throw new Error('Method not implemented.')
	}

	public async findOne(id: string): Promise<Incident> {
		throw new Error('Method not implemented.')
	}
}
