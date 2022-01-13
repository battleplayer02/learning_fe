// Call bind apply
let emp1 = {
    firstname: "jhon",
    lastname: "smith",
}
function invite(time1, time2) {
    console.log(`${this.firstname} ${this.lastname} is invited in the ${time1} and ${time2}`);
}
// call bind apply
// call
console.log("call");
invite.call(emp1, "morning", "evening");

// apply
console.log("apply");
invite.apply(emp1, ["morning", "night"]);

// bind
// bind returns a function
console.log("bind");
let bindFun1 = invite.bind(emp1, 'morning', 'evening');
let bindFun2 = invite.bind(emp1);
bindFun2("morning", "evening");
bindFun1();

// polyfills for call apply bind

// polyfill for call
// calls the function with the provided obj


// invite.call(emp1, "morning", "evening");






// function abc() {
//     console.log(arguments);
// }
// abc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// abc("himanshu")
// abc("x", "y", "z")



// write a function which can 
// take any number of arguments and return the sum of all the arguments

// function sum(first, ...args) {
//     // console.log(first, "element is excluded");
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(sum(1, 2, 3, 4, 5, 6));
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20));

Function.prototype.myCall = function (obj, ...args) {
    // attach the function to the given object
    obj._this = this; // yeh wala this is calling function (invite)
    console.log(this);
    return obj._this(...args);
}
console.log("myCall");
invite.myCall(emp1, "morning", "evening"); // invite is calling mycall so this is invite


// apply
Function.prototype.myApply = function (obj, args) {
    obj._this = this; // yeh wala this is calling function (invite)
    console.log(this);
    return obj._this(...args);
}
console.log("myApply");
invite.myApply(emp1, ["morning", "night"]);




// let bindFun1 = invite.bind(emp1, 'morning', 'evening');  // this is the calling function invite
Function.prototype.myBind = function (obj, ...arg1) {
    obj._this = this
    return function () {
        // console.log(arguments);
        return obj._this(...arg1, ...arguments);
    }
}

console.log("myBind");
let myBindFun1 = invite.myBind(emp1, 'morning', 'evening');  // this is the calling function invite
let myBindFun2 = invite.myBind(emp1);  // this is the calling function invite
myBindFun1();
myBindFun2("morning", "evening10000000");



















