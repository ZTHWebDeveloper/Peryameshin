const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type: String,
        required: true,
       
    },
    email : {
        type : String,
        required : true,
        unique: true 
    },
    password : {
        type : String,
        required : true,
        unique: true 
    },
    confrimpass :{
        type: String,
        required : true,
        unique: true 
    }
})
UserSchema.plugin(uniqueValidator,{ message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.model('User',UserSchema)