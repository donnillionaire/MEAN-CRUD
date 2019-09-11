// We need to implement router from express
const express = require ("express")
var router = express.Router()

/*Request statement from employee model*/
var {Employee} = require ('../models/employee')

/*adding a router in order to retrieve all the employees from the employees collection*/
router.get('/', (req, res)=>{
  //retrieving the records
  Employee.find((err, docs)=>{
    //checking for errors
    if (!err){res.send(docs)}
    else{console.log('Error Retriveing employees data')}
      })
  })



router.post('/', (req, res)=>{
//emp is the mongoose object filled with employees details
  var emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office:req.body.office,
    salary:req.body.salary,
    })
    /*enter the records to mongodb*/
    emp.save((err, doc)=>{
      //checking for errors
      if (!err){res.send(doc)}
      else{console.log('Error saving employee data')}

    })
})



/*to use the router object elsewhere, we are exporting it*/
module.exports = router
