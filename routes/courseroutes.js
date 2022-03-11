const express = require('express');
const { courseModelObj } = require('../models/coursemodel');
const courseRouter = express.Router();

    //course API
courseRouter.post('/addcourse', async (req, res) => {
    try {
        console.log(req.body);
        let mydata = new courseModelObj(req.body);
        let data = await mydata.save();
        console.log("Successfully Added Data");
       
    }
    catch (err) {
        console.log(err);
    }
});

courseRouter.get('/viewcourse', async (req, res) => {
    try {
        
        let result = await courseModelObj.find();
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
});

courseRouter.get('/viewretailcourse', async (req, res) => {
    try {
        
        let result = await courseModelObj.find({category:"Retail"});
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
});
courseRouter.get('/viewinstitutionalcourse', async (req, res) => {
    try {
        
        let result = await courseModelObj.find({category:"Institutional"});
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
});
courseRouter.get('/viewcorporatecourse', async (req, res) => {
    try {
        
        let result = await courseModelObj.find({category:"Corporate"});
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
});
courseRouter.post('/deletecourse', async (req, res) => {
    try {
        let result = await courseModelObj.deleteOne({_id:req.body._id});
        console.log("Successfully Deleted Course : "+req.body._id);
        res.send("Deleted"+req.body._id);
    }
    catch (err) {
        console.log(err);
    }
});

courseRouter.post('/updatecourse', async (req, res) => {
    try {
     console.log(req.body);
        let result = await courseModelObj.updateOne({_id:req.body._id},{$set:{title:req.body.title,type:req.body.type,description:req.body.description,cstatus:req.body.cstatus,catogory:req.body.category,about:req.body.about,entrance:req.body.entrance,commence:req.body.commence,orientation:req.body.orientation,lastdate:req.body.lastdate,fees:req.body.fees,duration:req.body.duration,objectives:req.body.objectives}});
        console.log("Successfully Updated Course with title : ",req.body._id);
        
    }
    catch (err) {
        console.log(err);
    }
});

module.exports=courseRouter