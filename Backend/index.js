import express from "express";
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import bookRoute from "./Routes/bookroute.js";
import userroute from './Routes/userroute.js'
import cors from 'cors';

dotenv.config();
const app = express()
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT || 4000
const URL=process.env.mongoDBURL;
//mongodb connection using compass
try {
    
    mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log("connected to mongodb")
} catch (error) {
    console.log(error);
}

//define routes

app.use("/book",bookRoute)
app.use("/user",userroute)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})