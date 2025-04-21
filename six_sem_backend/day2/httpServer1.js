const http=require("http");
const fs=require("fs/promises");

const server=http.createServer(async(req,res)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/html");
  const url=req.url;
  if(url=="/home" && req.method=="GET"){
    const data = await fs.readFile("home.html");
    res.write(data);
  }
  else if(url=="/about" && req.method=="POST"){
    const data = await fs.readFile("about.html");
    res.write(data);
  }
  else{
    res.write("404 Error Page");
  }
  
  res.write("hello World!");
  res.end();
})

server.listen(3001,(err)=>{
  try{
    if(err) throw err;
    console.log("Server is running on the port no.  3001");
  }catch(err){
    console.log("server error",err.message);
  }
  
})

// create a http server which display th content of given api

