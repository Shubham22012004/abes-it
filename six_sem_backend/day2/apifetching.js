const http = require("http");
const port = 5000;

const server = http.createServer(async (req, res) => {
  
    const response = await fetch("https://dummyjson.com/recipes");
    const datajson = await response.json();
    const new_Data = datajson.recipes;
    const names = new_Data.map((recipe) => recipe.name);
    
    // res.writeHead(200, { 'Content-Type': 'application/json' }); 
    res.end(JSON.stringify(names)); 

});

server.listen(port, (err) => {
  if (err) {
    console.log("Server error: ", err.message);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});

//write a end points for a crud app

// CRUD operation  
//   c-create  /user
//   r-read    /users
//   u-update  /edit user
//   d-delete  /delete user

// catch (error) {
//   res.writeHead(500, { 'Content-Type': 'text/plain' });
//   res.end("Error fetching data");
// }
// const http = require("http");
// const port=5000;
// const server=http.createServer(async(res,req)=>{
//   const data=await fetch("https://dummyjson.com/recipes");
//   const datajson=await data.json();
//   const new_Data = datajson.recipes;
//   const name=new_Data.map((re)=>{
//     return re.name;
//   })
//   res.end(name);
// })

// server.listen(port,(err)=>{
//   try{
//     if(err) throw err;
//     console.log(`server is running on port ${port}`);
//   }catch(err){
//     console.log("Server error: ",err.message);
//   }
// })