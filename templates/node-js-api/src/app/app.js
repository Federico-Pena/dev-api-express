import path from 'node:path'
import express from 'express'
import cors from 'cors'
import { apiConfig } from '../config/apiConfig.js'
import someRouter from '../routes/someRouter.routes.js'
import { logger } from '../middlewares/logger.js'

const app = express()

// Disable the header 'X-Powered-By'
app.disable('x-powered-by')

// Parse incoming JSON data.
app.use(express.json())

// Enable CORS
app.use(cors(apiConfig.CORS_SETTINGS))

// Log HTTP requests format.
app.use(logger)

// Serve static files.
app.use('/', express.static(path.resolve('./public')))

// Use one router
app.use(someRouter)

// Handle all other requests with a 404 Not Found response.
app.use('*', (req, res) => {
  res.status(404).sendFile(path.resolve('./public/404.html'))
})

export default app
