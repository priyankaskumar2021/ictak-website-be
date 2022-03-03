const mongoose = require('mongoose');
let mongooseSchema=mongoose.Schema;
const courseSchema=new mongooseSchema(
    {
    title:String,
   type:String,
    description:String,
    cstatus:String,
    category:String,
    about:String,
    entrance:Date,
    commence:Date,
    orientation:Date,
    lastdate:Date,
    fees:Number,
    duration:Number,
    objectives:String,
    image:String
}
);
var courseModelObj=mongoose.model("courses",courseSchema);
module.exports={courseModelObj};