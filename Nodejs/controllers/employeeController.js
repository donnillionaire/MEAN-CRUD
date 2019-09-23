



// We need to implement router from express
const express = require ("express")
var router = express.Router()

/*Requesting a valid ID from mongodb*/
var ObjectId = require ('mongoose').Types.ObjectId

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

//get request to get users with specific _Id
router.get ('/:id', (req, res)=>{
if (!ObjectId.isValid(req.params.id))// checking for the validity of the ID
return  res.status(400).send(`No record with that id: ${req.prams.id}`)

 //else if the id is valid
Employee.findById(req.params.id, (err, doc)=>{
  if(!err) {res.send(doc)}
  else{console.log('Error Retriveing employee data')}
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


/*Adding a router for update method*/
router.put('/:id', (req, res)=>{
  if(!ObjectId.isValid(req.params.id))
  return  res.status(400).send(`No record with that id: ${req.prams.id}`)
//if the id is valid, we go on with the update operation
//by starting with emp Object
var emp = {
  name: req.body.name,
  position: req.body.position,
  office:req.body.office,
  salary:req.body.salary,
  }
  /*
  calling the findByIdAndUpdate() method using Employee method
  then parse the id we have recieved from the parameter in put()
  -{$set:emp} => tells mongodb the employee with teh parse id has to updated
                  with the new information inside emp object

  */
  Employee.findByIdAndUpdate(res.params.id, {$set:emp}, {new:true},(err, doc)=>{
        //checking for errors
      if (!err){res.send(doc)}
        else{console.log('Error updating new employee')}
      })
})

/*A new Router for Delete function*/
router.delete('/id', (req, res)=>{
  if(!ObjectId.isValid(req.params.id))
    return  res.status(400).send(`No record with that id: ${req.prams.id}`)
  Employee.findByIdAndRemove(res.params.id,(err, doc)=>{
    if (!err){res.send(doc)}
      else{console.log('Error updating new employee')}  

  })

})










/*to use the router object elsewhere, we are exporting it*/
module.exports = router
