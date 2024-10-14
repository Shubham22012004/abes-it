// let a=()=>{
//     console.log("arrow function practising");
// }
// let b=()=>console.log("arrow function 2");
// b();
// a();

// let sum=(x,y)=>{return x+y};  //arrow function using parameter
// let s=sum(5,6);
// console.log(s);

// //for string 
// let con=(x,y)=>{return x+y};
// let st_add=con("shubham", " yadav");
// console.log(st_add);

// function display(){
//     let p1=document.querySelector("p");    //single query Selector
//     p1.innerHTML = "I AM IN parra";
//     p1.style.backgroundColor="red";
// }

//query selector All -> return node list


// function display(){
//     let p1=document.querySelectorAll("p");  //return node list
//     p1[0].innerHTML = "I AM IN parra";
//     p1[0].style.backgroundColor="red";
//     p1[1].innerHTML="this is second para";
//     p1[1].style.backgroundColor="green";
// }

// //use to change the HTML content
// let change_header=()=>{
//     let head1= document.querySelector('h1');
//     head1.textContent="changes the heading";
// };

// //changing the attribute
// let att=()=>{
// const li=document.querySelector('a');
// li.setAttribute("href","https://chatgpt.com/");
// li.innerHTML="chat gpt";
// };

//creating new element => const newDiv = document.createElement('div');

let addContent=()=>{
    const newDiv = document.createElement('div');
    newDiv.textContent='This is a new div';
    const body =document.querySelector('body');
    body.appendChild(newDiv);
};

