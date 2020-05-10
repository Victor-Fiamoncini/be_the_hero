import { Request, Response } from 'express'

import Incident from '../entities/Incident'
import IncidentRepository from '../repositories/IncidentRepository'

export default class IncidentHandler {
	public async create(req: Request, res: Response): Promise<Response> {
		const { title, description, value } = req.body

		try {
			const incidentPayload = new Incident(title, description, value, 'ongId')
			const incidentRepository = new IncidentRepository()

			const incident = await incidentRepository.create(incidentPayload)

			return res.status(201).json(incident)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
}
