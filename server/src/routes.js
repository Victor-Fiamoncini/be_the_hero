import { Router } from 'express'

import OngController from './app/controllers/OngController'
import IncidentController from './app/controllers/IncidentController'

const router = Router()

router.post('/ongs', OngController.create)
router.get('/ongs', OngController.find)

router.post('/incidents', IncidentController.create)

export default router
