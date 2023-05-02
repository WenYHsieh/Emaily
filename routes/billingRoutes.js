module.exports = (app) => {
  // handle stripe token
  app.post('/api/stripe', (req, res) => {
    console.log(req)
  })
}
