const express = require('express');
const { registrationModelObj } = require('../models/registrationmodel');
const nodemailer = require('nodemailer');
const registrationRouter = express.Router();


//Registration APIs
registrationRouter.post('/addreg',async(req,res)=>{
    console.log(req.body);
    let myData=new registrationModelObj(req.body);
    let cloudRes=await myData.save();
    res.send('successfully added data');
  });
  
  registrationRouter.get('/viewreg', async (req, res) => {
    try {
        let result = await registrationModelObj.find();
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  });
  registrationRouter.post('/deletereg', async (req, res) => {
    try {
        let result = await registrationModelObj.deleteOne({_id:req.body._id});
        console.log("Successfully Deleted Candidate : "+req.body._id);
        res.send("Deleted"+req.body._id);
    }
    catch (err) {
        console.log(err);
    }
});
registrationRouter.post('/updatereg', async (req, res) => {
    try {
     console.log(req.body);
        let result = await registrationModelObj.updateOne({_id:req.body._id},{$set:{name:req.body.name,email:req.body.email,mobileno:req.body.mobileno,course:req.body.course,amount:req.body.amount}});
        console.log("Successfully Updated Registration with id : "+req.body._id);
        res.send("Updated");
    }
    catch (err) {
        console.log(err);
    }
});



module.exports=registrationRouter