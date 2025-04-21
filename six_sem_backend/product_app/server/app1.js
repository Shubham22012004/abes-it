const express=require("express");
const app=express()

const port = 5000;

let users=[];
app.use(express.json());

app.get("/",(req,res)=>{
  // console.log(`port is on ${port}`);
  res.send("it is working");
})

app.get("/users",(req,res)=>{
  res.status(200).json(users);
})

app.get("/users/:id",(req,res)=>{
  //can fetch id using params
  const uid = req.params.id;
  const index = users.findIndex(ind=>ind.id==uid);//this argument called predicate
  if(index==-1){
    res.status(400).json({status:"Fail", message:"user not found"});
  }else{
    res.status(200).json({status:"success",message:"user found",data:users[index]});
  }
})

app.post("/createuser",(req,res)=>{
  const {name,email}=req.body;
  const newId = Date.now();
  const newUser={
    id:newId, name,email
  }
  users.push(newUser);
  res.status(201).json({status:"Success",message:"user created successfully",data:newUser});
})

app.patch("/edituser/:id",(req,res)=>{
  const uid=req.params.id;
  const {name:newName ,email: newEmail}=req.body;
  if(!newName || !newEmail){
    res.status(400).json({status:"fail",message:"All fields required"})
  }else{
    const index = users.findIndex(ind=>ind.id==uid);
    if(index==-1){
      res.status(400).json({status:"fail",message:"user not found"});
    }else{
      users[index].name=newName;
      users[index].email=newEmail;
      res.status(200).json({status:"Success",message:"user data edited successfully", data:users[index]});
    }
  }
})

app.delete("/deleteuser/:id",(req,res)=>{
  const uid = req.params.id;
  const index=users.findIndex(ind=>ind.id==uid);
  if(index==-1){
    res.status(400).json({status:"fail",message:"user not found"});
  }else{
    const deldata=users.splice(index,1);
    res.status(200).json({status:"success",message:"user deleted successfully", data:users[index]});
  }
})


app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})