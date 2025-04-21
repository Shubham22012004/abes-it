const mongoose = require("mongoose")
const mongo_url="mongodb://localhost:27017/FSD_IT_B"

mongoose.connect(mongo_url)
.then(()=>{
  console.log("Mongodb connected successfully");
})
.catch(err=>{
  console.log("DB error",err.message);
})

const userSchema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  age:{type:Number, required:true}
})


const User = mongoose.model("userdata",userSchema);
//create user
const createUser=async()=>{
  try{
    const newUser=new User({name:"max",email:"max987@mail.con",age:32});
    const user=await newUser.save();
    console.log("User Creaed Successfully", user);
  }
  catch(err){
    console.log("user Creation Error", err.message);
  }
}
// createUser();

//getUSer

const getUser=async()=>{
  try{
    const users=await User.find();
    console.log("List of Users:",users);
  }catch(err){
    console.log("user fetching Error", err.message);
  }
}
// getUser();

//update user
const updateUser=async()=>{
  try{
    const updateUserdata=await User.findOneAndUpdate({name:"Ashish"},{$set:{name:"ashish bajpai"}},{new:true})
    console.log("data updated successufully",updateUserdata);
  }catch(err){
    console.log("error", err.message);
  }
}

// updateUser();

//delet user
const deleteUser=async()=>{
  try{
    await User.deleteOne({name:"kai"});
    console.log("User deleted successfully");
  }
  catch(err){
    console.log("user not found",err.message);
  }
}

// deleteUser();