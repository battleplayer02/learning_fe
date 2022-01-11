// // console.log(sq1);
// // console.log(sq2);
// // console.log(n);
// console.log(square)


// var n = 2

// function square(num) {
//     // memory 
//     // code 
//     // hoisting
//     // line by execution
//     let ans = num * num
//     return ans
// }

// var sq1 = square(n)
// var sq2 = square(4)


// // Define Hoisting ?
// // Hoisting is a process of moving all the declarations 
// // to the top of the current scope.
// // and putting a placeholder(undefined) for the variable.
// // and whole function is moved to the top.



// console.log("a is ",a); // undefined
// console.log("b is ",b); // not defined
// var a = 10;


// How can we declare a variable
// let var const

// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a);
// console.log(b);
// console.log(c);

// const values cannot be changed
// c = 40;

// let has a block scope cannot be accessed outside the block or before
// initalize a variable
// {
//     const a = 10;
//     console.log("a is", a);
// }
// let and cont both are block scoped

// console.log(a);
// console.log(b);
// Zone before the decelearation of let and const 
// is calles temporal dead zone

// let a = 10;
// const b = 20;
// let and const are also hoisted










// a = 20


// console.log("a is 10 and actually a is", a);

// // too big application
// // 1000s of line of code

// let a = 10;








// function fun() {
//     let a = 10;
//     function fun2() {
//         // memory code 
//         //  hoisting b ka box = undefined
//         //  line by execution

//         let b = 20;
//         console.log(a,b);
//     }
//     fun2(); // scope of fun2 is fun + its local variables 
// }
// fun();

// function are treated as first class citizen
// function are like values in js 

// let fun = function nameOfFun() {
//     console.log("inside fun")
//     console.log(nameOfFun, "abcd") //local variable
// } // anaonymous function

// console.log(fun);
// fun()


// function statement
// function fun() {

// }

// function expression
// let fun = function () {

// }

// fat arrow function
// let fun = (a) => {
//     return function () {
//         return a * 10;
//     }
// }
// button.addEventListener("click", ()=> {
// })
// let returnedfunction = fun(10)
// console.log(returnedfunction())

// function sum(a, b) {
//     console.log(a, "+", b, a + b)
// }

// function argFun(sum) {
//     sum(10, 20)
// }

// argFun(sum)
// anonymous function is a function without name


// function mul() {
//     var a = 10, b = 10
//     return a * b
// }

// console.log(a,b);
// console.log(mul());


// git init 
// git add .
// git commit -m "first commit"
// git remote add origin "link"  // get this from github 
// git push origin master


// how to create an array in js 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// if you want to do something later on
// let cb = () => {
//     console.log("hello")
// }
// setTimeout(cb, 5000);


// function fun() {
//     for (var i = 0; i < 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000);
//     }
// }
// fun()

// setInterval(() => {
//     console.log("hello")
// }, 1000);

// let a = true   // let a = 10   // let a = "hello"
// console.log(typeof a)
// let res = a.includes("h")
// let res = a.split("e")
// let res = a.substring(0,2)
// console.log(a.length)
// hello
// 012
// let res = a.replace("h", "H")
// console.log(res)
// let arr = [] // there is no array in js every this is an object
// console.log(typeof arr)
// console.log(arr)

// arr.push(1); arr.push(2); arr.push(3); arr.push(4);
// console.log(arr)
// arr.pop()

// console.log(arr)
// let a = 10; let b = 20; let c = 30;
// let newArr = [a, b, c]

// console.log(newArr)
// let [val1, val2, val3] = newArr
// console.log("val 1 =", val1, "val 2  = ", val2, "val 3 =", val3);
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [value1, value2, value03, ...leftOver] = arr1 // spread operator
// console.log(value1, value2, value03, leftOver)
// let newarr2 = [...arr1, ...newArr]
// console.log(newarr2)







