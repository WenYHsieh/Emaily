import mongoose from 'mongoose'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import * as dotenv from 'dotenv'

const { parsed: keys } = dotenv.config()
const User = mongoose.model('users')

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecrete,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save()
      console.log({ accessToken, refreshToken, profile })
    }
  )
)
