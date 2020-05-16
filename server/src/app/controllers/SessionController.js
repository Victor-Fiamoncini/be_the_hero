import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import OngDAO from '../models/Ong/OngDAO'

class SessionController {
	async store(req, res) {
		const { email, password } = req.body

		try {
			const ongDao = new OngDAO('ongs')
			const ong = await ongDao.findByEmail(email)

			if (!ong)
				return res
					.status(404)
					.json({ error: 'No ONG found with this credentials' })

			if (!(await compare(password, ong.password)))
				return res
					.status(404)
					.json({ error: 'No ONG found with this credentials' })

			delete ong.password

			return res.status(200).json({
				ong,
				token: sign({ id: ong.id }, process.env.JWT_AUTH_SECRET, {
					expiresIn: 86400,
				}),
			})
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	async refresh(req, res) {
		const ongDao = new OngDAO('ongs')
		const ong = await ongDao.findById(req.ongId)

		return res.status(200).json(ong)
	}
}

export default new SessionController()
