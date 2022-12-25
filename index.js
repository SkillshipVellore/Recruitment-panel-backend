require('./route/db')

const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

const portalController = require('./controller/portalcontroller')

var app = express();

app.listen(1000,()=>{
    console.log('server started at port :1000')
});

app.use('/', portalController)
