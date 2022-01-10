// console.log("Hello World");
// objects
// ways to create objects in javascript
// 1. object literal syntax - {}
// let person = {
//     name: "John",
//     age: 30,
// };
// console.log(person);
// 2. constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// this refers to the object that is being created
// let person1 = new Person("John", 30);
// console.log(person1);
// let person2 = new Object();
// person2.name = "John";
// person2.age = 30;
// console.log(person2);
let person = {
    name: "John",
    age: 30,
    sayHi: function () {
        console.log(`Hello from ${this.name}`);
        this.tellAddress();
    },
    tellAddress: function () {
        console.log(`${this.name} lives in London`);
    },
    whatIsThis: function () {
        console.log(this);
    }
};
// person.sayHi();
person.whatIsThis();








