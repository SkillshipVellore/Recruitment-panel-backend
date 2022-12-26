
const mongoose = require('mongoose');
const validator = require('validator')

var userSchema = new mongoose.Schema({
    
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        validate(value)
        {
            if(!validator.isEmail((value))){
                throw new error('Invalid Email Address')
            }
        }
    },
    contactNo:
    {
        type:Number,
        required:true
    },
    registrationNumber:
    {
        type:String,
        required:true
    }
});

export const UserModel = mongoose.model('user',userSchema); 