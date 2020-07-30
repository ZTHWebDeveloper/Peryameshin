const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const WithdrawSchema = new Schema({
    withdraw_name:{
        type:String,
        required:true
    },
    patient_name:{
        type:String,
        required:true
    },
    prove_name:{
        type:String,
        required:true
    },
    withdraw_date:{
        type:String,
        required:true
    },
    withdraw_amount:{
        type:Number,
        required:true
    },
    sign:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Withdraw',WithdrawSchema);