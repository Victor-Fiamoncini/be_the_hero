import BaseDAO from '../BaseDAO'
import Ong from './Ong'

import knex from '../../database/connection'

export default class OngDAO extends BaseDAO<Ong> {
	public constructor(tableName: string) {
		super(tableName)
	}

	public async create(entity: Ong): Promise<string | Ong> {
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

	public async update(id: string, entity: Ong): Promise<string | Ong> {
		throw new Error('Method not implemented.')
	}

	public async delete(id: string): Promise<string | Ong> {
		throw new Error('Method not implemented.')
	}

	public async find(): Promise<Ong[]> {
		return await knex(this.tableName).select('*')
	}

	public async findOne(id: string): Promise<Ong> {
		throw new Error('Method not implemented.')
	}
}
