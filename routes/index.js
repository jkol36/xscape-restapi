import { Router } from 'express'
import notificationRouter from './notificationRouter'

let router = Router()
router.use('/notifications', notificationRouter)
export default router
