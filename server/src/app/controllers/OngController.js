import Ong from '../models/Ong/Ong'
import OngDAO from '../models/Ong/OngDAO'

class OngController {
	async store(req, res) {
		const { name, email, password, whatsapp, city, uf } = req.body

		try {
			const ongDao = new OngDAO('ongs')
			const ongPayload = new Ong(name, email, password, whatsapp, city, uf)

			if (!ongPayload.validate()) {
				return res.status(404).json({ error: 'Bad request' })
			}

			await ongPayload.beforeSave()
			await ongDao.store(ongPayload)

			return res.status(201).json({ message: 'ONG successfully registered' })
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	async index(req, res) {
		try {
			const ongDao = new OngDAO('ongs')
			const ongs = await ongDao.index()

			return res.status(200).json(ongs)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
}

export default new OngController()
