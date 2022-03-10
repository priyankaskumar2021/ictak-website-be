const mongoose = require('mongoose');
let mongooseSchema = mongoose.Schema;
let regSchema = new mongooseSchema({
    name:
    {
        type: String,
        required: true
    },

    email:
    {
        type: String,
        required: true
    },
    mobileno:
    {
        type: String,
        required: true

    },
    course:
    {
        type: String,
        required: true
    },
    amount:
    {
        type: Number,
        required: true
    }

});
var registrationModelObj = mongoose.model("registrations", regSchema);
module.exports = { registrationModelObj };