const mongoose = require('mongoose');

const userSchema = mongoos.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlengnth: 5
    },
    lastname: {
        type: String,
        maxlengnth: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: Spring
    },
    tokenExp:{
        type: Number
    } 
    
})

const User = mongoose.model('User', userSchema);
module.exports = { User }