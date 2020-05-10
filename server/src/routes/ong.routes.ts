import { Router } from 'express'
import { v4 } from 'uuid'

import Ong from '../app/entities/Ong'
import OngRepository from '../app/repositories/OngRepository'

const router = Router()

router.get('/', async (req, res) => {
	try {
		const ongRepository = new OngRepository()
		const ongs = await ongRepository.find()

		return res.status(200).json(ongs)
	} catch (err) {
		return res.status(500).json({ error: err })
	}
})

router.post('/', async (req, res) => {
	const { name, email, whatsapp, city, uf } = req.body

	try {
		const ongPayload = new Ong(v4(), name, email, whatsapp, city, uf)
		const ongRepository = new OngRepository()
		const ong = await ongRepository.create(ongPayload)

		return res.status(201).json(ong)
	} catch (err) {
		return res.status(500).json({ error: err })
	}
})

export default router
