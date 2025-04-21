const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:"../../.env"});

const url = process.env.url|| "mongodb://localhost:27017/userAppDB";

console.log(url);

const connectDb=async()=>{
  try{
    const connectInstance = await mongoose.connect(url);
    console.log("Database Connected");
  }catch(err){
    console.log("DB Error: ", err.message);
  }
}

module.exports=connectDb;
