import BaseRepository from './base/BaseRepository'
import Ong from '../entities/Ong'
import connection from '../database/connection'

export default class OngRepository extends BaseRepository<Ong> {
	public async create(entity: Ong): Promise<Ong | boolean> {
		await connection('ongs').insert({
			id: entity._id,
			name: entity._name,
			email: entity._email,
			whatsapp: entity._whatsapp,
			city: entity._city,
			uf: entity._uf,
		})

		return entity
	}

	public async update(id: string, entity: Ong): Promise<boolean> {
		throw new Error('Method not implemented.')
	}

	public async delete(id: string): Promise<boolean> {
		throw new Error('Method not implemented.')
	}

	public async find(): Promise<Ong[]> {
		return await connection('ongs').select('*')
	}

	public async findOne(id: string): Promise<Ong> {
		throw new Error('Method not implemented.')
	}
}
