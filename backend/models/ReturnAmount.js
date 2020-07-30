const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ReturnSchema = new Schema({
    return_name:{
        type:String,
        required:true
    },
    return_date:{
        type:String,
        required:true
    },
    withdraw_amount:{
        type:Number,
        required:true
    },
    return_amount:{
        type:Number,
        required:true
    },
    remain_amount:{
        type:Number,
        required:true
    },
    widthdraw_id:{
        type:Schema.Types.ObjectId,
        ref:'Withdraw',
        required:true
    },
    sign:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Return',ReturnSchema);