import express from 'express'
import './models/User.js'
import './services/passport.js'
import authRoutes from './routes/authRoutes.js'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

const app = express()
const { parsed: keys } = dotenv.config()

authRoutes(app)

mongoose.connect(keys.mongoURI)

const PORT = process.env.PORT || '8888'
app.listen(PORT)
