import IncidentDAO from '../models/Incident/IncidentDAO'

class ProfileController {
	async index(req, res) {
		try {
			const incidentDao = new IncidentDAO('incidents')
			const incidents = await incidentDao.findByOngId(req.ongId)

			return res.status(200).json(incidents)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
}

export default new ProfileController()
