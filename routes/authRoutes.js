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

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user)
  })

  app.get('/api/currentUser', (req, res) => {
    res.send(req.user)
  })
}

export default authRoutes
