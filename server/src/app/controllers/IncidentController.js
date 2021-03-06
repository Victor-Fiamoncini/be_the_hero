import Incident from '../models/Incident/Incident'
import IncidentDAO from '../models/Incident/IncidentDAO'

class IncidentController {
	async store(req, res) {
		const { title, description, value } = req.body

		try {
			const incidentPayload = new Incident(title, description, value, req.ongId)
			const incidentDao = new IncidentDAO('incidents')

			const id = await incidentDao.store(incidentPayload)

			return res.status(201).json({ id })
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	async index(req, res) {
		const { page = 1 } = req.query

		try {
			const incidentDao = new IncidentDAO('incidents')

			const [count] = await incidentDao.findCount()
			const incidents = await incidentDao.findAndPaginate(page)

			res.header('X-Total-Count', count['count'])

			return res.status(200).json(incidents)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	async destroy(req, res) {
		const { id } = req.params

		try {
			const incidentDao = new IncidentDAO('incidents')
			const incident = await incidentDao.findById(id)

			if (incident.ong_id !== req.ongId)
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
