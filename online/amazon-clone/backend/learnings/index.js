// console.log("start");
// // this will run after 1 second
// console.log("end");


// Language: javascript
// my desired output is 
// start   ----> wait of one second  
// 1 sec 
// end

// promises  states =>>> pending, fulfilled, rejected

// let oneSecWait = function () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("1 sec");
//         }, 1000);
//         console.log("abcd");
//     })
// };
// async function await        --->>> await can be appalied to those function which returns promise
// async function run() {
//     console.log("start");
//     console.log(await oneSecWait());
//     console.log("end");
// }
// run();



// bank account
// let balance = 100;
// deducts money from the balance
// let withdraw = function (amount, err, success) {
//     balance = balance - amount;
//     if (balance >= 0) {
//         success("success new balance" + balance);
//     } else {
//         err("insufficient balance " + balance)
//     }
// }
// let err = (arg) => {
//     console.log(arg);
// }

// let success = (arg) => {
//     console.log(arg);
// }

// withdraw(10, err, success);


// let balance = 100;
// function withdraw(amt) {
//     return new Promise(function (resolve, reject) {
//         let newBalance = balance - amt;
//         if (newBalance >= 0) {
//             setTimeout(() => {
//                 resolve("transaction success" + newBalance);
//             }, 1000);
//         } else {
//             reject("insufficient balance " + balance);
//         }
//     })
// }

// let promise = withdraw(10);
// promise.then(function (res) {
//     console.log(res);
// }).catch(function (err) {
//     console.log(err);
// })


// IIFE 
// (async () => {
//     try {
//         console.log("start");
//         let ans = await withdraw(10);
//         console.log(ans);
//         console.log("end");
//     } catch (error) {
//         console.log(error);
//         console.log("end");
//     }
// })()















// reading text from files takes time 
















