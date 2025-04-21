const express = require("express")
const app = express()
// const dbConnect=require(".//src//config//db.js")
const dotenv = require("dotenv");
dotenv.config();
const userroute=require("./src//routes//useRouter.js")
const Port = process.env.PORT||3000;
const connectDB = require("./src//config//db.js");

console.log(connectDB);

connectDB();
app.use(express.json());
app.use("/",userroute)

app.listen(Port,()=>{
  console.log(`Server is running on port ${Port}`);
})
