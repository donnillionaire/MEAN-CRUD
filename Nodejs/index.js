

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/employees', employeeController);


/*Package imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // allows http request to this Node Js project
/*local imports 
const {mongoose} = require ('./db.js')
//request statement for employeeController
var employeeController = require('./controllers/employeeController.js')


//core express function
 var app = express();

 //configuring the express middleware in order to send json data to this NodeJS project
app.use (bodyParser.json())
 //configuring this app to use the router by calling the middleware function to use Router
 app.use ('/employees', employeeController)

app.use(cors({origin: 'http://localhost:4200'}))
// starting the express server
app.listen(3000,()=> console.log("Server started at port:3000")) */