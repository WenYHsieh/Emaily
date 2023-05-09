const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./models/Survey')
require('./services/passport')

const app = express()

app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)

mongoose.connect(keys.mongoURI)

if (process.env.NODE_ENV === 'production') {
  // serve assets
  app.use(express.static('client/dist'))

  // serve not express route
  const path = require('path')
  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}
const PORT = process.env.PORT || '8888'
app.listen(PORT)
