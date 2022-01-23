// // function a() {
// //     var val = 30
// //     return function b() {
// //         // own scope and parents scope
// //         console.log(val, this);
// //     }
// // }

// // let returningValue = a();
// // // 1000000 lines 


// // console.log(returningValue);

// // returningValue()
// // var n = 10



// // How you can create a private variable in javascript
// function a() {
//     function b() {

//     }
//     var val = 10;
// }


// // console.log(val);


// let and const are also hoisted


// before decelaration let and const are in temporal dead zone
// console.log(a);
// console.log(b);

// let a = 10;
// let a = 20;




// destructuring

// let arr = [1, 2, 3, 4, 5, 6]

// let [a, b,...c] = arr;


// console.log(a, b,c);




// let obj = {
//     firstname: "Himanshu",
//     lastname: "Shekhar",
//     printName: function() {
//         console.log(this);
//         console.log(this.firstname + " " + this.lastname);
//     }
// }

// // this is currnetly calling object

// const { firstname, lastname, printName } = obj;


// printName() // window

// obj.printName() // object


// let obj = {}

// obj.firstname = "Himanshu";
// obj.lastname = "Shekhar";


// const a = 10




// const obj = {
//     firstname: "Himanshu",
//     lastname: "Shekhar",
// }
// obj.firstname = "abcd"


// console.table(obj);



// const x = 10
// x = 20


// var a = 10   // 100
// {
//     var a = 20  // 200 
//     {
//         let a = 30
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a); //10



// const arr = [1, 2, 3, 4, 5, 6]

// function fun(params) {

// }

// let fun1 = fun

// console.log(typeof arr);

// console.log(typeof Function);

// console.log(typeof fun1);





// function a(b) {
//     b && b();
// }

// // a()
// a(function() {
//     console.log("Hello");
// })

// let c = function () {
//     console.log("Hello");
// }

// c()



//  first class function
// the ablity to pass function as an argument to another function
// and return the function from another function

// function  can be treated as value 




// function a(b) {
//     b() // its a call back function
// }


// let fs = require("fs");




// console.log("start");
// let p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("done");
//     }, 1000);
// })

// p.then(res=>{
//     console.log(res);
//     console.log("end");
// })


// (async () => {
//     try {
//         console.log("start");
//         let p = new Promise(function (resolve, reject) {
//             setTimeout(() => {
//                 reject("error");
//             }, 1000);
//         })
//         let res = await p;
//         console.log(res);
//         console.log("end");
//     } catch (error) {
//         console.log(error);
//     }
// })()




let d1,d2,d3;

require("fs").readFile("file/1.txt", function(err, data) {
    d1 = data;
})

require("fs").readFile("file/2.txt", function(err, data) {
    d2 = data;
})
d3 = d1+d2
console.log(d3);









