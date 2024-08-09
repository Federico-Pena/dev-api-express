import { Router } from 'express'
import { apiConfig } from '../config/apiConfig'
import someController from '../controllers/someController'

const someRouter = Router()

const { route1 } = apiConfig.API_ROUTES.someRoutes

someRouter.get(route1, someController)

export default someRouter
