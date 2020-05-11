import { Router } from 'express'

import OngController from './app/controllers/OngController'

const router = Router()

router.post('/ongs', OngController.create)
router.get('/ongs', OngController.find)

export default router
