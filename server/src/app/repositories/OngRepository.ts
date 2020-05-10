import BaseRepository from './base/BaseRepository'
import Ong from '../entities/Ong'
import knex from '../database/connection'

export default class OngRepository extends BaseRepository<Ong> {
	public async create(entity: Ong): Promise<string | Ong> {
		await knex('ongs').insert({
			id: entity._id,
			name: entity._name,
			email: entity._email,
			whatsapp: entity._whatsapp,
			city: entity._city,
			uf: entity._uf,
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
		return await knex('ongs').select('*')
	}

	public async findOne(id: string): Promise<Ong> {
		throw new Error('Method not implemented.')
	}
}
