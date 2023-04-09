import express from 'express'
import './services/passport.js'
import authRoutes from './routes/authRoutes.js'

const app = express()
authRoutes(app)

const PORT = process.env.PORT || '8888'
app.listen(PORT)
