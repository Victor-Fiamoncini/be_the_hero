import { Request, Response } from 'express'

import Incident from '../models/Incident/Incident'
import IncidentDAO from '../models/Incident/IncidentDAO'

class IncidentController {
	public async create(req: Request, res: Response): Promise<Response> {
		const { title, description, value } = req.body
		const ongId = req.headers.authorization

		try {
			const incidentPayload = new Incident(title, description, value, ongId!)
			const incidentDao = new IncidentDAO('incidents')

			const incident = await incidentDao.create(incidentPayload)

			return res.status(201).json(incident)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
}

export default new IncidentController()
