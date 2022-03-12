const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const courseRoute=require("./routes/courseroutes");
const regRoute=require("./routes/registrationroutes");
const partnerRoute=require("./routes/partnershiproutes");
//require("dotenv").config();


const app = express();
const port = process.env.PORT || 3006;
const path = require("path");


app.use(express.static(path.resolve(__dirname, "./build")))

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


app.use('/public/images', express.static('images'));
   
//Routes
app.use('/api/course', courseRoute);
app.use('/api/registration', regRoute);
app.use('/api/partner',partnerRoute);

//email API
app.post('/sendbrochure', async (req, res) => {
    try {
        var bname="";
        console.log(req.body);
        let email = req.body.email;
        let course=req.body.course;
        if(course==="FULL STACK DEVELOPMENT")
bname="FSD.pdf";
else if(course==="SOFTWARE TESTING")
bname="ST.pdf";
else if(course==="DATA SCIENCE AND ANALYTICS")
bname="DSA.pdf"
else if(course==="CYBER SECURITY")
bname="CSA.pdf"
else if(course==="ROBOTIC PROCESS AUTOMATION")
bname="RPA.pdf"
else if(course==="DIGITAL MARKETING")
bname="DM.pdf"
console.log(bname);
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
    res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});