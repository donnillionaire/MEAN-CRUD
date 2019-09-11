const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/CRUD',{ useNewUrlParser: true }, (err) =>{
  if(!err){
    console.log("Connection Successful")
  } else {
    console.log('Error Connecting to the database')
  }
})
module. exports = mongoose;
 
