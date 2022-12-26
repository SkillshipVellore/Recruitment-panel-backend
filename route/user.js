import { addUser } from '../controller/user';

const express = require('express');
var router = express.Router();


// path: /user
// type: POST
// 
// api to create a new user

router.post('/',async(req,res)=>{
    try {
        if(req.body._id==='')
        {
            const user = await addUser(req.body);
            return res.json({message: "User created Successfully", user});
        }
        else{
            return res.json({message: "User already exists", user:null});
        }

    } catch (error) {
        console.log(error);
    }
   
});

export default router;
