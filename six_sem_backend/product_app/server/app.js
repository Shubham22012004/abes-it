const express = require("express");
const app = express();

const port=5000;

const products = [
  {
    id:1,
    prodect_name:"Laptop",
    price:10000,
    quatity:10,
  }
]

app.use(express.json());


app.get("/products", (req,res)=>{
  res.status(200);
  res.json(products);
})

app.get("/product/:id",(req,res)=>{
  const pid = req.params.id;
  const index=products.findIndex(ind=>ind.id==pid);
  if(index==-1){
  res.status(400).json(status:"Fail",message:"Product not found");
  }else{
    res.status(200).json(status:"Success",message:"Product found",data:products[index]);
  }
})

app.post("/product",(req,res)=>{
  const {id, product_name,price,quantity}= req.body;
  const new_product = { //creating the object of data before adding into array
    id, product_name, price, quantity
  }
  products.push(new_product);
  res.json({
    status:"Success",
    message:"Product added successfully"
  })
  res.status(201);
})

console.log(products);

app.listen(port, (err)=>{
  try{
    if(err) throw err;
    else{
      console.log("Server is running on port 5000");
    }
  }catch(err){
    console.log("Error message :", err.message);
  }
})
















// /prodocts      get method
// /product/:id get method
// /product      post method
// /edit product patch method
// /delete product delete method