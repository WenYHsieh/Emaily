import express from 'express'
import './models/User.js'
import './services/passport.js'
import authRoutes from './routes/authRoutes.js'
import mongoose from 'mongoose'
import cookieSession from 'cookie-session'
import * as dotenv from 'dotenv'
import passport from 'passport'

const { parsed: keys } = dotenv.config()

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
)

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

mongoose.connect(keys.mongoURI)

const PORT = process.env.PORT || '8888'
app.listen(PORT)
