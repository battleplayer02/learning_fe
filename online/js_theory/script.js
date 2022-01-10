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


function fun() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
}
fun()

setInterval(() => {
    console.log("hello")
}, 1000);













