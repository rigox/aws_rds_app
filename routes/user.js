const express = require("express")
const User =   require("../models/User")
const {check , validationResult}  = require("express-validator/check")
const router = express.Router();


router.post('/register',[
     check('name','name is required').not().isEmpty(),
     check('email','email is needed').isEmail(),
     check('password','password must be at least 6  letter long').isLength({min:6})
],  async (req,res)=>{
 
     const errors = validationResult(req)

    if(!errors.isEmpty()){
        console.log(errors) 
        res.status(400).json({errors:errors.array()})
    }

const  {name, email, password}  =  req.body 

let user  = new User({
     name,
     email,
     password
})
 
  try {
      
let results =   await user.save();
 console.log("record saved" ,  results)

  } catch (err) {
        console.log(err)
  }


});


module.exports =  router;


