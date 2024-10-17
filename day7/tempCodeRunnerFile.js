console.log("start");
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task executed");
        setTimeout(()=>{
            console.log("third task executed");
        },3000);
    },2000);
},1000);
console.log("end");