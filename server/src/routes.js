import { Router } from 'express'
import auth from './app/middlewares/auth'

import OngController from './app/controllers/OngController'
import IncidentController from './app/controllers/IncidentController'
import ProfileController from './app/controllers/ProfileController'
import SessionController from './app/controllers/SessionController'

const router = Router()

router.post('/sessions', SessionController.store)
router.get('/sessions', auth, SessionController.refresh)

router.post('/ongs', OngController.store)
router.get('/ongs', OngController.index)

router.post('/incidents', auth, IncidentController.store)
router.get('/incidents', auth, IncidentController.index)
router.delete('/incidents/:id', auth, IncidentController.destroy)

router.get('/profile', auth, ProfileController.index)

export default router
