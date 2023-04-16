import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  googleId: String,
})

//  load schema into mongoose (create model class)
mongoose.model('users', userSchema)
