const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const { registrationModelObj } = require('./models/registrationmodel');
const { courseModelObj } = require('./models/coursemodel');
const nodemailer = require('nodemailer');

//require("dotenv").config();


const app = express();
const port = process.env.PORT || 3006;
const path = require("path");



app.use(express.static(path.resolve(__dirname, "./client/build")))

const cors = require('cors');
app.use(cors())
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,DELETE,UPDATE,PUT,PATCH');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

mongoose.connect("mongodb+srv://priyanka:aadhav@cluster0.pc4p2.mongodb.net/ictakDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });


    //course API
app.post('/api/addcourse', async (req, res) => {
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

app.get('/api/viewcourse', async (req, res) => {
    try {
        
        let result = await courseModelObj.find();
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
});
app.post('/api/deletecourse', async (req, res) => {
    try {
        let result = await courseModelObj.deleteOne({_id:req.body._id});
        console.log("Successfully Deleted Course : "+req.body._id);
        res.send("Deleted"+req.body._id);
    }
    catch (err) {
        console.log(err);
    }
});

app.post('/api/updatecourse', async (req, res) => {
    try {
     console.log(req.body);
        let result = await courseModelObj.updateOne({title:req.body.title},{$set:{type:req.body.type,description:req.body.description,cstatus:req.body.cstatus,catogory:req.body.category,about:req.body.about,entrance:req.body.entrance,commence:req.body.commence,orientation:req.body.orientation,lastdate:req.body.lastdate,fees:req.body.fees,duration:req.body.duration,objectives:req.body.objectives}});
        console.log("Successfully Updated Course with title : "+req.body.title);
        res.send("Updated"+req.body.title);
    }
    catch (err) {
        console.log(err);
    }
});

//Registration APIs
app.post('/api/addreg',async(req,res)=>{
    console.log(req.body);
    let myData=new registrationModelObj(req.body);
    let cloudRes=await myData.save();
    res.send('successfully added data');
  });
  
  app.get('/api/viewreg', async (req, res) => {
    try {
        let result = await registrationModelObj.find();
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  });
  app.post('/api/deletereg', async (req, res) => {
    try {
        let result = await registrationModelObj.deleteOne({_id:req.body._id});
        console.log("Successfully Deleted Candidate : "+req.body._id);
        res.send("Deleted"+req.body._id);
    }
    catch (err) {
        console.log(err);
    }
});

//email API
app.post('/sendbrochure', async (req, res) => {
    try {
        var bname="";
        console.log(req.body);
        let email = req.body.email;
        let course=req.body.course;
        if(course==="FSD")
bname="FSD.pdf";
else if(course==="ST")
bname="ST.pdf";
else if(course==="DSA")
bname="DSA.pdf"
else if(course==="CS")
bname="CSA.pdf"
else if(course==="RPA")
bname="RPA.pdf"
else if(course==="DM")
bname="DM.pdf"
console.log(bname);
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'priyankaskumar07@gmail.com',
                pass: 'azggplsnxmqtxmrx'
            }
        });
          
        let mailDetails = {
            from: 'priyankaskumar07@gmail.com',
            to: email,
            subject: 'Brochure',
            text: 'Thank you for showing your interest in joining ICT academy.Please check the detailed brochure attached herewith.',
            attachments: [{
                filename: bname,
                path: './assets/'+bname,
                contentType: 'application/pdf'
              }]
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

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});