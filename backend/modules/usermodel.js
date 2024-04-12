const mongoose = require("mongoose")


//creating userschema
const userschema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email:{
        type:String,
        unique: true,
        required: true,
    },
    age:{
        type: Number,
    }
},{timestamps: true});

//create model
const User = mongoose.model('User', userschema)
module.exports = User;


