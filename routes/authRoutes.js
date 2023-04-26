const passport = require('passport')

module.exports = (app) => {
  // enter to OAuth flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  )

  // redirect (callback) URL
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    // call after authentication completed
    (req, res) => res.redirect('/surveys')
  )

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.get('/api/currentUser', (req, res) => {
    res.send(req.user)
  })
}
