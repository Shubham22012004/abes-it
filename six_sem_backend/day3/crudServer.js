const http=require("http");
const server=http.createServer((req,res)=>{
  const data=[{
    id:123,
    name:"kai",
    email:"shu@gmail.com"
  }]
  const url=req.url;

  //read operation
  //get method is used for reading
  if(url=="/users" && req.method=="GET"){
    res.writeHead(200,{"content-type":"application/json"});

    //map to retireve all element from array
    const fullData=data.map((i)=>{
      return {id: i.id, name:i.name, email: i.email};
    })
    console.log(fullData);
    res.end(JSON.stringify(fullData));
    
  }
  //user create opetation 
  //oist method use to create user 
  else if(url=="/users" && req.methos=="POST"){
    res.statusCode=200;
    let body='';
    req.on("data",(d)=>{
      body+=d.toString();
    })
    req.on("end",()=>{
      const length=data.length;
      const newId=data[length-1].id;
      const jsonBody=JSON.parse(body);
      const {name,emai}=jsonBody;
      const newdata={
        id:newId,
        name,
        email
      }
      data.push(newdata);
    })

    res.end("data created successfully");
  }
  else{
    res.writeHead(404,{"content-type":"text/html"});
    res.end("page not found");
  }

  //post is used to create the user
})

server.listen(4000,()=>{
  console.log(`server is running on port ${4000}`);
})