import express from 'express'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

// running express server
const app = express()

passport.use(new GoogleStrategy())

const PORT = process.env.PORT || '8888'
app.listen(PORT)
