const User=require("../model/usermodel")

const getSlash=(req,res)=>{
  try{
  res.send("it working properly");
}catch(err){
  console.log("not working slash",err.message);
}
}
const getAllUsers=async(req,res)=>{
    try{
       const users=await User.find();
       res.status(200).json(users);
    }
    catch(err){
      res.status(500).json({message: err.message})
    }
}

const getUserByEmail = async(req,res)=>{
  try{
    const email=req.params.email;
    const user=await user.findOne({email});
    res.status(200).json(user);
  }catch(err){
    res.status(500).json({message:err.message});
  }
}

const addUser = async(req,res)=>{
  try{
    const {name,email, password,role}=req.body;
    const newuser = new User({name,email,password,role});
    const user = await newuser.save();
    res.status(200).json(user);
  }catch(err){
    res.status(500).json({message:err.message});
  }
}


const editUser = async(req,res)=>{
  try{
    const email=req.params.email;
    const {name, password, roel}=req.body;
    const updateUser = await user.findOneAndUpdate({email},{$set:{name,password,role}});
    const user =await updateUser.save();
    res.status(200).json(user);
  }catch(err){
    res.status(500).json({message:err.message});
  }
}

const deleteUser = async(req,res)=>{
  try{
    const email=req.params.email;
    const deletedUser = await User.deleteOne({email});
    res.status(200).json(deletedUser);
  }catch(err){
    res.status(500).json({message:err.message});
  }
}

module.exports = {
  getSlash,
  getAllUsers,
  getUserByEmail,
  addUser,
  editUser,
  deleteUser,
};