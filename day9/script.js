async function orderfood(name,time){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("order for "+name+" Prepared")
    },time)
  })
}

async function restaurant(){
  console.log("order placed");
  let pizza = await  orderfood("pizza",1000);
  console.log(pizza);
  let  burger = await orderfood("burger",4000);
  console.log(burger);
  let noodle = await orderfood("noodles",500);
  console.log(noodle);
  console.log("all order completed");
}

restaurant();