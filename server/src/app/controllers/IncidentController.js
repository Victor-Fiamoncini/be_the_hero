import Incident from '../models/Incident/Incident'
import IncidentDAO from '../models/Incident/IncidentDAO'

class IncidentController {
	async store(req, res) {
		const { title, description, value } = req.body
		const ongId = req.headers.authorization

		try {
			const incidentPayload = new Incident(title, description, value, ongId)
			const incidentDao = new IncidentDAO('incidents')

			const id = await incidentDao.store(incidentPayload)

			return res.status(201).json({ id })
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	async index(req, res) {
		try {
			const incidentDao = new IncidentDAO('incidents')
			const incidents = await incidentDao.index()

			return res.status(200).json(incidents)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	async destroy(req, res) {
		const { id } = req.params
		const ongId = req.headers.authorization

		try {
			const incidentDao = new IncidentDAO('incidents')
			const incident = await incidentDao.findById(id)

			if (incident.ong_id !== ongId)
				return res
					.status(401)
					.json({ error: 'Unauthorized: operation not permitted' })

			await incidentDao.destroy(id)

			return res.status(204).send()
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
}

export default new IncidentController()
