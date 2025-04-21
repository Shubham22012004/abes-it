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