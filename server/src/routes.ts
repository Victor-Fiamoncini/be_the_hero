import { Router } from 'express'
import OngHandler from './app/handlers/OngHandler'
import IncidentHandler from './app/handlers/IncidentHandler'

const router = Router()

const ongHandler = new OngHandler()
const incidentHandler = new IncidentHandler()

router.get('/ongs', ongHandler.find)
router.post('/ongs', ongHandler.create)
router.post('/incidents', incidentHandler.create)

export default router
