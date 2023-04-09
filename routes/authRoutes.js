import passport from 'passport'

const authRoutes = (app) => {
  // enter to OAuth flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  )

  // redirect (callback) URL
  app.get('/auth/google/callback', passport.authenticate('google'))
}

export default authRoutes
