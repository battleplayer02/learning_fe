// console.log("hello world")

// map 
// polyfills writing your own map function
// map returns ans array with modified elements by the callback function logic
Array.prototype.myMap = function (callback) {
    // this -> pointing to the calling object
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]));
    }
    return newArr;
}

let array = [1, 2, 3, 4, 5];
let newDoubleArr = array.myMap(function (value) {
    return value * 2;
});
// let newDoubleArr1 = array.myMap(value=> value * 2);

let doubleArr = array.myMap(ithval => ithval * 2);
console.log(doubleArr);

// filter
// 
Array.prototype.myFilter = function (callback) {
    // console.log("myFilter", this);
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}


let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr2);
let odds = arr2.myFilter(val => val % 2 == 1 ? true : false)
// logic ? true : false
console.log(odds);


// find sum of elements of an array 
// reduce 
Array.prototype.myReduce = function (callback) {
    let result = this[0]
    for (let i = 1; i < this.length; i++) {
        result = callback(result, this[i]);
    }
    return result;
}
let redArr = [1]
let sum = redArr.reduce((acc, val) => acc + val)
console.log("sum =", sum)


// Q. Using reduce find the total number of items in the cart and find the 
//    total price of the items in the cart. 

let cart = [
    {
        name: "shoes",
        price: 100,
        quantity: 2
    },
    {
        name: "shirt",
        price: 50,
        quantity: 1
    },
    {
        name: "pants",
        price: 150,
        quantity: 3
    }
]

let totalItems = cart.reduce(function (acc, val) {
    return acc + val.quantity;
}, 0)
// a    val
// 0   + 2 = 2
// 2   + 1 = 3
// 3   + 3 = 6

console.log("total items =", totalItems);

let totalPrice = cart.reduce(function (acc, nextObj) {
    return acc + nextObj.price * nextObj.quantity;
}, 0)

console.log("total price =", totalPrice);


let obj = {}

// call bind apply
// on object and function
// create polyfills for call, bind, apply