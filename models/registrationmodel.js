const mongoose=require('mongoose');
let mongooseSchema=mongoose.Schema;
let regSchema=new mongooseSchema({
    name:
    {
    type:String
    },

    email:
    {
        type:String  

    },
    mobileno:
    {
        type:String   

    },
    course:
    {
        type:String
    },
    amount:
    {
        type:Number
    }

});
var registrationModelObj=mongoose.model("registrations",regSchema);
module.exports={registrationModelObj};