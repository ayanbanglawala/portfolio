const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    }
})
const message = mongoose.model("Message",MessageSchema);
module.exports = message;