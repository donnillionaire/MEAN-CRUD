/*Package imports*/
const express = require('express')
const bodyParser = require('body-parser')

/*local imports */
const {mongoose} = require ('./db.js')
//core express function
 var app = express();

 //configuring the express middleware in order to send json data to this NodeJS project
app.use (bodyParser.json())

// starting the express server
app.listen(3000,()=> console.log("Server started at port:3000"))
