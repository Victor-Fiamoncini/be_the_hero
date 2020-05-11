import Incident from '../models/Incident/Incident'
import IncidentDAO from '../models/Incident/IncidentDAO'

class IncidentController {
	async create(req, res) {
		const { title, description, value } = req.body
		const ongId = req.headers.authorization

		try {
			const incidentPayload = new Incident(title, description, value, ongId)
			const incidentDao = new IncidentDAO('incidents')

			const id = await incidentDao.create(incidentPayload)

			return res.status(201).json({ id })
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
}

export default new IncidentController()
