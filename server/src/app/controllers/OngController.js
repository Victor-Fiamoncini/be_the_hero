import { v4 } from 'uuid'

import Ong from '../models/Ong/Ong'
import OngDAO from '../models/Ong/OngDAO'

class OngController {
	async create(req, res) {
		const { name, email, whatsapp, city, uf } = req.body
		try {
			const ongPayload = new Ong(v4(), name, email, whatsapp, city, uf)
			const ongDao = new OngDAO('ongs')

			const ong = await ongDao.create(ongPayload)

			return res.status(201).json(ong)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	async find(req, res) {
		try {
			const ongDao = new OngDAO('ongs')
			const ongs = await ongDao.find()

			return res.status(200).json(ongs)
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
}

export default new OngController()
