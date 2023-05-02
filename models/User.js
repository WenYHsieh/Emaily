const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
})

//  load schema into mongoose (create model class)
mongoose.model('users', userSchema)
