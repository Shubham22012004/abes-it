"use strict";
// let $=12;

// function display(){
// console.log($);
// }
// let a=10/3;
// display();
// console.log( a);
// console.log(typeof a);

// let c="String";
// let d=[1,2,3,6]
// console.log(typeof c);      //string
// console.log(typeof d);    //object

// let e={
//     name:'ARUN',
//     id:12
// }
// console.log(typeof e);      //object

// let f=true
// console.log(typeof f)   //boolean

// let x="12"/"6";
// console.log(x)          //output =2

// let xx="12"+"60"
// console.log(xx)         //output = 1260

// let bol=true
// let st = String(bol)
// console.log(st.charAt(3))

// let str="125"
// let num = Number(str)
// console.log(typeof num)

//if we pass string in Boolean then it will consider it as true
// let n=Boolean("str")
// console.log(n)          //o/p -> true

// interaction : alert(), prompt(), alert()

// function display(){
//     let x=confirm("are you sure");
//     alert(x);
// }

// function display(){
//     let x=prompt("enter you name","shubham");  //by default the name is shubham
//     alert(x);
// }

//  ARROW FUNCTION   

function validate(){
    let user=document.getElementById('login').value;
    let password=document.getElementById("pass").value;
    let resutl=document.getElementById("msg");
    if(user=="admin" && password=="admin"){
        resutl.innerText="register successfully";
    }else{
        resutl.innerText="login failed";
    }
    return false;
}