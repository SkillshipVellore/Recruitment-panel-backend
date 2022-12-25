const express = require('express')
var router = express.Router();
const mongoose = require('mongoose')
const portal = mongoose.model('portal');

router.post('/',(req,res)=>{
    if(res.body._id=='')
    {
        insertRecord(req,res);
    }
});

function insertRecord(req,res){
    var portal = new portal({
        name:req.body.fullName,
        email:req.body.email,
        ContactNo:req.body.contact,
        Registration_Number:req.body.regno
    });
}
module.exports = router;

