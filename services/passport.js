const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

// pull out model class
const User = mongoose.model('users')

// user.id =>  mongoDB auto generated
// 用來得到識別使用者的唯一值， passport 會把那一小部分 token 塞到 cookie
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// passport 用來將 cookie 裡面的識別使用者的唯一值轉換回 user model
//  此時 user instance 會被榜定到 route handler callback 當中的 req object!!
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecrete,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser)
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user))
        }
      })
    }
  )
)
