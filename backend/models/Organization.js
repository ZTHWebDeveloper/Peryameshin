const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    date:{
        type:String,
        required:true
    },
    sign:{
        type:String,
        required:true
    }
})
OrganizationSchema.plugin(uniqueValidator,{ message: 'Error, expected {PATH} to be unique.' });

module.exports = mongoose.model('Organisation',OrganizationSchema);