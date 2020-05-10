import { Request, Response } from 'express'
import { v4 } from 'uuid'

import Ong from '../entities/Ong'
import OngRepository from '../repositories/OngRepository'

export default class OngHandler {
	public async create(req: Request, res: Response): Promise<Response> {
		const { name, email, whatsapp, city, uf } = req.body

		try {
			const ongPayload = new Ong(v4(), name, email, whatsapp, city, uf)
			const ongRepository = new OngRepository()
			const ong = await ongRepository.create(ongPayload)

			return res.status(201).json(ong)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	public async find(req: Request, res: Response): Promise<Response> {
		try {
			const ongRepository = new OngRepository()
			const ongs = await ongRepository.find()

			return res.status(200).json(ongs)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
}
