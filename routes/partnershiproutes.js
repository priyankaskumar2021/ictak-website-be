const express = require('express');
const { partnershipModelObj } = require('../models/partnershipModel');
const nodemailer = require('nodemailer');
const partnershipRouter = express.Router();


//Partnership APIs
partnershipRouter.post('/addpartner',async(req,res)=>{
    console.log(req.body);
    let myData=new partnershipModelObj(req.body);
    let cloudRes=await myData.save();
    res.send('successfully added data');
  });
  
  partnershipRouter.get('/viewpartner', async (req, res) => {
    try {
        let result = await partnershipModelObj.find();
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  });
  partnershipRouter.post('/deletepartner', async (req, res) => {
    try {
        let result = await partnershipModelObj.deleteOne({_id:req.body._id});
        console.log("Successfully Deleted Partner : "+req.body._id);
        res.send("Deleted"+req.body._id);
    }
    catch (err) {
        console.log(err);
    }});

    partnershipRouter.post('/sendmail', async (req, res) => {
        try {
            let email = req.body.email;
        
            let mailTransporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'ictkerala18@gmail.com',
                    pass: 'vqfckgjpqgqywaou'
                }
            });
              
            let mailDetails = {
                from: 'ictkerala18@gmail.com',
                to: email,
                subject: 'Registration Acknowledgement',
                text: 'Thank you for showing your interest in registering for partnership in ICT academy.We will get back to you soon..',
            };
              
            mailTransporter.sendMail(mailDetails, function(err, data) {
                if(err) {
                    console.log(err);
                    res.send("Oops Something went wrong");
                } else {
                    console.log(mailDetails);
                    console.log('Email sent successfully');
                    res.send("Successfully send the Mail");
                }
            });
    
            
        }
        catch (err) {
            console.log(err);
        }
    });


module.exports=partnershipRouter