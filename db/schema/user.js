
const mongoose = require('mongoose');
const validator = require('validator')

var userSchema = new mongoose.Schema({
    
    Name:
    {
        type:String,
        required:true
    },
    Email:
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
    ContactNo:
    {
        type:Number,
        required:true
    },
    Registration_Number:
    {
        type:String,
        required:true
    }
});

mongoose.model('user',userSchema); 