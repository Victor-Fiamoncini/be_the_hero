import { Router } from 'express'
import { v4 } from 'uuid'

import Ong from '../app/entities/Ong'
import OngRepository from '../app/repositories/OngRepository'

const router = Router()

router.post('/', (req, res) => {
	const { name, email, whatsapp, city, uf } = req.body
	try {
		const ongPayload = new Ong(v4(), name, email, whatsapp, city, uf)

		const ongRepository = new OngRepository()
		const ong = ongRepository.create(ongPayload)

		return res.status(201).json(ong)
	} catch (err) {
		return res.status(500).json(err)
	}
})

export default router
