const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecreteKey)

module.exports = (app) => {
  // handle stripe token
  app.post('/api/stripe', async (req, res) => {
    // create stripe object
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      // 要收費的來源
      source: req.body.id,
    })

    req.user.credits += 5
    const user = req.user.save()

    res.send(user)
  })
}
