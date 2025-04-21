const {Client}=require("pg")
const client=new Client({
  host:"localhost",
  port:5432,
  database:'FSD_IT_B',
  user:'postgres',
  password:'root'
});

client.connect()
.then(()=>{
  console.log("POSTGRESQL Connected");
})
.catch(err=>{
  console.log("DB ERROR", err.message);
})


const createUser=async()=>{
  try{
    const res=await client.query("insert into users(name,email, age) values ('kai', 'abc@gmail.com',32)");
    console.log("USer created successfully",res);
  }
  catch(err){
    console.log("Error occurs", err.message);
  }
}
createUser();

//get user

const getUser=async()=>{
  try{
    const res=await client.query("select * from users order by age desc");
    console.log("User Data", res.rows);
  }
  catch(err){
    console.log("error message: ", err.message);
  }
}

getUser();


//update user

// const updateUser=async()=>{
//   try{
//     const res=await client.query("update users set age=25 where name='kai'");

//   }
// }