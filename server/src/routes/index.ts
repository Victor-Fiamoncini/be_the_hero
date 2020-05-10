import { Router } from 'express'
import ongRoutes from './ong.routes'

const router = Router()

router.use('/ongs', ongRoutes)

export default router
