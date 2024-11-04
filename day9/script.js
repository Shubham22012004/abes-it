// async function orderfood(name,time){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("order for "+name+" Prepared")
//     },time)
//   })
// }

// async function restaurant(){
//   console.log("order placed");
//   let pizza = await  orderfood("pizza",1000);
//   console.log(pizza);
//   let  burger = await orderfood("burger",4000);
//   console.log(burger);
//   let noodle = await orderfood("noodles",500);
//   console.log(noodle);
//   console.log("all order completed");
// }

// restaurant();



async function fetchdata(){
  try{
    let result = await fetch("https://api.github.com/users?per_page=10");
    console.log(result);
    let data = await result.json();
    data.forEach((element)=>{
      let h1 = document.createElement("h1"); //for the name of git user
      h1.textContent = element.login;
      let a = document.createElement('a');
      a.textContent = element.login;
      a.setAttribute("href", element.html_url);

      let top = document.querySelector("#top"); //get reference from html
      top.appendChild(h1);
      top.appendChild(a);
    })
    
  }catch(err){
    console.log(err);
  }
}

