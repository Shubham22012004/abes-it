const {MongoClient} = require("mongodb")

const mongo_URL="mongodb+srv://shubhamyadavoffice123:School@cluster0.6bqiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

MongoClient.connect(mongo_URL).then(clinet=>{
  console.log("mongodb Connected");
}).catch(err=>{
  console.log("DB error", err.dmessage);
}) 

//it can not use callback fn because it return promise  hence we can use promise or async and await

