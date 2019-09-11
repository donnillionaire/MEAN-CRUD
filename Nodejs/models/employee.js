const mongoose = require('mongoose')


var Employee = mongoose.model('Employee', {
  name: {type:String},
  position:{type:String},
  office:{type:String},
  salary:{type:Number}
})
//exporting the employee model via the object
module.exports = { Employee }
