//dependencies
import ConnectDB from "./db/conn";
import cors from "cors";
import helmet from 'helmet';
import express from "express";
require("dotenv").config();

//config
const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit : '10mb'}));
app.use(cors());
app.use(helmet());


//routes
import User from "./route/user";

app.use("/user",User);


//index api



app.get("/",(req,res)=> res.json({message: "setup success !!"}));
const PORT= process.env.PORT || 4000;


app.listen(PORT,()=>
    ConnectDB().then(()=> 
 console.log("Server is up and running"))
 .catch(()=>console.log("DB connection failed"))
 );

