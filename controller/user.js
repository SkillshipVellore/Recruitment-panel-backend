import { UserModel } from '../db/schema/user';

const mongoose = require('mongoose');



export async function addUser(req){
    const {name,email,contactNo,registrationNumber}  = req.body;
    var user = await new UserModel({
        name,
        email,
        contactNo,
        registrationNumber
    });
    user.save();
    return user;
}

