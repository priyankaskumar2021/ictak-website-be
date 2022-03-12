const mongoose = require('mongoose');
let mongooseSchema = mongoose.Schema;
let partnershipSchema = new mongooseSchema({
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
    firm:
    {
        type: String,
        required: true
    },
    address:
    {
        type: String,
        required: true
    }

});
var partnershipModelObj = mongoose.model("partnership", partnershipSchema);
module.exports = { partnershipModelObj };