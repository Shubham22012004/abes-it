const express = require("express");
const app = express();
const port = 5000;

const users = [{
  id:1,
  name:"Rahul",
  email:"shu@gmail.com",
  password:"1234"
  }
]

app.use(express.json());

app.get("/users",(req,res)=>{
  res.status(200);
  res.json(users);

})
 //middleware to parse json data

app.post("/user",(req,res)=>{
  const {id,name,email, password}=req.body;//taking data from body using postman
  const newUser = {
    id, name, email, password
  }
  users.push(newUser);
  res.json({
    status:"Success",
    message:"User added successfully",
  })
  res.status(201); //201 means user created
})

app.delete("deleteuser/:id", (req,res)=>{
  const uid = req.params.id;
  if(uid!=null){
    const index = users.fintIndex(ind=>ind.id==uid);
  }
  if(index!=-1){
    users.splice(index,1);
    res.status(200);
    res.json({
      status:"Success",
    message:"user deletd successfully"
  });
  }else{
    res.status(404);
    res.json({
      status:"Fail",
      message:"wrong user id"
    })
  }
})


app.listen(port,(err)=>{
  try{
    if(err) throw err;
    else{
      console.log("Server is running on port 5000");
    }
  }catch(err){
    console.log("Error message : ",err.message);

  }
})


//users         Get
//user          Post
//user/:id      Get
//edit user/:id patch
//delete/:id    delete