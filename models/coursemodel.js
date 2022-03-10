const mongoose = require('mongoose');
let mongooseSchema=mongoose.Schema;
const courseSchema=new mongooseSchema(
    {
    title:
    {
        type: String,
        required: true
    },
   type:
   {
    type: String,
    required: true
},
    description:
    {
        type: String,
        required: true
    },
    cstatus:
    {
        type: String,
        required: true
    },
    category:
    {
        type: String,
        required: true
    },
    about:
    {
        type: String,
        required: true
    },
    entrance:
    {
        type: Date,
        required: true
    },
    commence:
    {
        type: Date,
        required: true
    },
    orientation:
    {
        type: Date,
        required: true
    },
    lastdate:
    {
        type: Date,
        required: true
    },
    fees:
    {
        type: Number,
        required: true
    },
    duration:
    {
        type: Number,
        required: true
    },
    objectives:
    {
        type: String,
        required: true
    },
    image:
    {
        type: String,
        required: true
    }
}
);
var courseModelObj=mongoose.model("courses",courseSchema);
module.exports={courseModelObj};