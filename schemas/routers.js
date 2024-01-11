const mogoose = require('mongoose');

const RoutesSchema = new mogoose.Schema({
  path: String,
  name: String,
  componentPath: String,
  title: String,
})

const Routes = mogoose.model('Routes', RoutesSchema)

module.exports = Routes