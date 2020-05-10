import BaseRepository from './base/BaseRepository'
import Incident from '../entities/Incident'
import knex from '../database/connection'

export default class IncidentRepository extends BaseRepository<Incident> {
	public async create(entity: Incident): Promise<string | Incident> {
		const res = await knex('incidents').insert({
			title: entity._title,
			description: entity._description,
			value: entity._title,
			ong_id: entity._ongId,
		})

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
