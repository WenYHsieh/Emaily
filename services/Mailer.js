const sendGrid = require('sendgrid')
const { mail: helper } = sendGrid
const keys = require('../config/keys')

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super()

    this.sgApi = sendGrid(keys.sendGridKey)
    this.from_email = new helper.Email('menlen6205@gmail.com')
    this.subject = subject
    this.body = new helper.Content('text/html', content)
    this.recipients = this.formatAddresses(recipients)

    this.addContent(this.body)
    this.addClickTracking()
    this.addRecipients()
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email)
    })
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings()
    const clickTracking = new helper.ClickTracking(true, true)

    trackingSettings.setClickTracking(clickTracking)
    this.addTrackingSettings(trackingSettings)
  }

  addRecipients() {
    const personalize = new helper.Personalization()

    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient)
    })

    this.addPersonalization(personalize)
  }

  async send() {
    try {
      const request = this.sgApi.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: this.toJSON(),
      })

      const response = await this.sgApi.API(request)
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = Mailer
