const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Post',PostSchema);