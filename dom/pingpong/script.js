// function statement
// console.log(value);
// value()
// console.log(fun);
// console.log(value);
// named function expression
// var value = 
// fun()
// var a = function fun() {
//     // console.log(fun);
//     console.log("function calling");
// }
// a()
// fun()
// console.log(fun);
// value()
// fun()

// function add(val1, val2) {
//     return function () {
//         return val1 + val2
//     }
// }

// addEventListener("click", add(22, 33))


// function addEventListener(event, callingFunction) {
//     if (event == "click") {
//         var x = callingFunction()
//         console.log(x);
//     }
// }


// scope
// function fun(x) {
//     function a() {
//         console.log(x);
//     }
//     return a;
// }

// let returningvalue = fun(10)
// console.log(returningvalue);
// returningvalue()

// scope 

// function globalFunction(x) {
//     function a() {
//         console.log(x)
//     }
//     return a;
// }

// var returningvalue = globalFunction(400);


// // 
// console.log(returningvalue);
// returningvalue();



// function z() {
//     var b = 900
//     function a() {
//         var y = 500
//         function c() {
//             console.log(b);
//         }
//         c()
//         console.log(b);
//     }
//     a()
// }
// z()


// setTimeout
// console.log(1);
// setTimeout(function () {
//     console.log(2);
// }, 1000);
// console.log(3);




// for (var i = 1; i <= 10; i++) {
//     function close(i) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     close(i)
// }




// function
// var value = arg1 => {
//     console.log(arg1);
// }

// document.addEventListener("click", e => {
//     console.log("clicked");
// })


// value(1, 2)






// dsalhofigyuds

// function fun() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     console.log(sum);
// }

// fun(1, 2, 3, 4, 5, 6)















