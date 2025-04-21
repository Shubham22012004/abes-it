const fs = require("node:fs")
try{
const data=fs.readFileSync("dummy.txt")
console.log("File Data: ",data.toString());
}
catch(err){
  console.log("file reading error: ", err.message);

}

const myWriteFile=()=>{
  try{

  }catch(err){
    console.log("file Writing Crror: ",err.message);
  }
}