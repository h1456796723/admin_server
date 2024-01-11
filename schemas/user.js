const mogoose = require('mongoose');

const userSchema = new mogoose.Schema({
  username: String,
  password: String || Number,
})

const User = mogoose.model('User', userSchema)

module.exports = User