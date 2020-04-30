const mongoose = require('mongoose')
const validator = require('validator')

const schema = mongoose.Schema
const userschema = new schema({name:{
    type : String,
    required: true,
    trim : true
},email :{
type : String,
required: true,
trim : true,
lowercase : true,
validate(value){
    if(!validator.isEmail(value)){
        throw new Error('Email is invalid')
    }
}
},age :{
    type : Number,
    validate(value){
        if(value<0){
            console.log('Age should be positive')
        }
    }
}})
const User = mongoose.model('User',userschema)
module.exports = User