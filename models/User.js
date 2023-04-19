const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
})

//  load schema into mongoose (create model class)
mongoose.model('users', userSchema)
