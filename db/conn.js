const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/skillship_portal',{useNewUrlParser:true},(err)=>{
    if(!err)
    {
        console.log("connection successful");
    }
    else
    {
        console.log("error in connection "+err);
    }
});

require('../db/schema/user');
