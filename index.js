import express from 'express'
import './services/passport.js'
import authRoutes from './routes/authRoutes.js'
// import passport from 'passport'
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
// import * as dotenv from 'dotenv'

// running express server
const app = express()
authRoutes(app)
// const { parsed: keys } = dotenv.config()

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecrete,
//       callbackURL: '/auth/google/callback',
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log({ accessToken, refreshToken, profile })
//     }
//   )
// )

// // enter to OAuth flow
// app.get(
//   '/auth/google',
//   passport.authenticate('google', {
//     scope: ['profile', 'email'],
//   })
// )

// // redirect (callback) URL
// app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || '8888'
app.listen(PORT)
