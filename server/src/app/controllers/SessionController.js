import OngDAO from '../models/Ong/OngDAO'

class SessionController {
	async store(req, res) {
		const { id } = req.body

		try {
			const ongDao = new OngDAO('ongs')
			const ong = await ongDao.findById(id)

			if (!ong)
				return res.status(400).json({ error: 'No ONG found with this ID' })

			return res.status(200).json(ong)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
}

export default new SessionController()
