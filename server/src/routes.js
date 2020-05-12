import { Router } from 'express'

import OngController from './app/controllers/OngController'
import IncidentController from './app/controllers/IncidentController'
import ProfileController from './app/controllers/ProfileController'

const router = Router()

router.post('/ongs', OngController.store)
router.get('/ongs', OngController.index)

router.post('/incidents', IncidentController.store)
router.get('/incidents', IncidentController.index)
router.delete('/incidents/:id', IncidentController.destroy)

router.get('/profile', ProfileController.index)

export default router
