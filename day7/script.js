//map function  => create a new array by calling a function on every element in calling array . It does not modify the original array

//  let num=[1,5,8,9,6,3,5];
//  let newnum = num.map(x=>x*2); 
//  console.log(newnum);

//  output  [
//     2, 10, 16, 18,
//    12,  6, 10     
//  ]

//fiter create a new array with all the elements that pass the test(condition provide)

// let evennum=num.filter(x=>x%2==0);
// console.log(evennum);

//reduce it applies function to an accumulator and each element in the array(from left to right ) to reduce the array to a single value
//syntax  sum=num.reduce(accumulator)
// let sum=num.reduce((x,y)=>x+y,0);
// console.log(sum);   //o/p  = 37

//object in javascript

// const student=[
//     {name:'Alice', score:50},
//     {name:'Bob', score:65},
//     {name:'cahrlie', score:80},
//     {name:'David', score:45},
//     {name:'Rahul', score:50},
// ];

// let scores=student.map(x=>x.score) //printing the scores
// console.log(scores)
// let sum_obj=student.reduce((x,y)=>x+y.score,0) //sum of scrores
// console.log(sum_obj)

// let cod=student.filter(x=>x.score>60==1);
// console.log(cod)        //o/p  => [ { name: 'Bob', score: 65 }, { name: 'cahrlie', score: 80 } ]

// let cod1=student.filter(x=>x.score>60==1).map((x)=>x.score);
// console.log(cod1)  //o/p  => [ 65, 80 ]

// let cod2=student.filter(x=>x.score>60).map((x)=>x.score).reduce((x,y)=>x+y,0);
// console.log(cod2)    //o/p =>  145



//forEach  loop

let num=[1,5,8,9,6,3,5];
num.forEach((s)=>console.log(s))

//callback fundtion is a function that is passed as an argument to another funciton and is executed aftere that function completes its operatiron
// callvack is used to handle asynchrounous operation, such as api calls, file rading or event handling, ensuring that specific tasks are executed after other have finished

sayhello=()=>{
    console.log("i am in hello function");
};
console.log("start");
setTimeout(sayhello,3000);   //async funtion
console.log("end");

console.log("start");
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task executed");
        setTimeout(()=>{
            console.log("third task executed");
        },3000)
    },2000);
},1000);
console.log("end");
//problems 
    //difficult to read and understand
    //error handling becomes comples
    //maintenance issues        =>       these problems called callback hell


