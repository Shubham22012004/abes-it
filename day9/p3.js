let top = document.querySelector("#top");

async function fetchdata(){
  try{
    let result = await fetch("https://api.github.com/users?per_page=10");
    console.log(result);
    let data = await result.json();
    // console.log(data);
    data.forEach((element) => {
      top.innerText=console.log(`Login ${element.login} ID ${element.node_id} URL ${element.html_url}`);
    });
    
  }catch(err){
    console.log(err);
  }
}

