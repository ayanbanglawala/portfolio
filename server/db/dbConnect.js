const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://ayanbanglawala2278:ayan8722@ayanb.zb6n9.mongodb.net/contact");
        console.log("MongoDB Connected...");
    }
    catch(err){
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}
module.exports = connectDB;