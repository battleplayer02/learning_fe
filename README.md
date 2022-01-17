# Resources For GJP 

### Must Read Articles

Topic | Link |
----------- | ----------- |
|HTML/CSS| https://github.com/learning-zone/css-interview-questions|
Node  JS Interview Questions|  https://github.com/learning-zone/nodejs-interview-questions 
React JS Interview Questions|  https://github.com/sudheerj/reactjs-interview-questions 
Module Exports Require |       https://www.freecodecamp.org/news/require-module-in-node-js-everything-about-module-require-ccccd3ad383/ ,https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/ 
Javascript Interview Questions| https://github.com/sudheerj/javascript-interview-questions
Arrow Functions MDN|           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions 
Classes MDN |     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
yield,yield* | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield ,`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*`
Context Api React|https://blog.webdevsimplified.com/2020-06/use-context/ https://backbencher.dev/articles/react-context-api-interview-questions
Redux|https://gist.github.com/vishnu-saini/d60fdde3a59e42368b447dc2c712fdf9

<br>

| |Redux|
|------|----|
|Redux Hooks | https://react-redux.js.org/api/hooks |
| Redux | https://www.freecodecamp.org/news/redux-for-beginners/ |
| Redux Basics | https://www.youtube.com/watch?v=poQXNp9ItL4&t=5011s |
|Redux Thunk|https://www.freecodecamp.org/news/redux-thunk-explained-with-examples/|



### What is an Event Loop in Node.js?

Ans : Event loops handle asynchronous callbacks in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important environmental features.
<br>

### Difference between “ == “ and “ === “ operators.
 
Ans: Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types
>var x = 2;
>var y = "2";
>(x == y)  // Returns true since the value of both x and y is the same
>
>(x === y) // Returns false since the typeof x is "number" and typeof y is "string"

### What is a prototype chain

**Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. 

The prototype on object instance is available through **Object.getPrototypeOf(object)** or **__proto__** property whereas prototype on constructors function is available through **Object.prototype**.
![image](https://user-images.githubusercontent.com/42701850/149335147-12a43719-bbd4-464e-b17d-b295e8e2e8f1.png)

### What is the difference between Call, Apply and Bind

The difference between Call, Apply and Bind can be explained with below examples,

**Call:** The call() method invokes a function with a given `this` value and arguments provided one by one

```javascript
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
```

**Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

```javascript
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?
```

**bind:** returns a new function, allowing you to pass any number of arguments

```javascript
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
```

Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**. 

Whereas Bind creates a new function that will have `this` set to the first parameter passed to bind().


### What is the difference between slice and splice

### Some of the major difference in a tabular form

| Slice | Splice |
|---- | ---------
| Doesn't modify the original array(immutable)  | Modifies the original array(mutable) |
| Returns the subset of original array | Returns the deleted elements as array  |
| Used to pick the elements from array | Used to insert or delete elements to/from array|

> How do you compare Object and Map

**Objects** are similar to **Maps** in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

1. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
2. The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
5. An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.

### What are lambda or arrow functions

An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These functions are best suited for non-method functions, and they cannot be used as constructors. 

### What is a first class function

In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

```javascript
const handler = () => console.log ('This is a click handler function');
document.addEventListener ('click', handler);
```

### What is the currying function

Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician **Haskell Curry**. By applying currying, a n-ary function turns it into a unary function. 

Let's take an example of n-ary function and how it turns into a currying function,

```javascript
const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1,2,3));// 6

const curryUnaryFunction = a => b => c => a + b + c;
curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction (1) (2); // returns a function: c => 3 + c
curryUnaryFunction (1) (2) (3); // returns the number 6
```

Curried functions are great to improve **code reusability** and **functional composition**.

### What is the difference between let and var

You can list out the differences in a tabular format

| var | let |
|---- | ---------
| It is been available from the beginning of JavaScript  | Introduced as part of ES6 |
| It has function scope | It has block scope  |
| Variables will be hoisted | Hoisted but not initialized |

Let's take an example to see the difference,

```javascript
function userDetails(username) {
   if(username) {
     console.log(salary); // undefined due to hoisting
     console.log(age); // ReferenceError: Cannot access 'age' before initialization
     let age = 30;
     var salary = 10000;
   }
   console.log(salary); //10000 (accessible to due function scope)
   console.log(age); //error: age is not defined(due to block scope)
}
userDetails('John');
```

### What is Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.
Let's take a simple example of variable hoisting,

```javascript
console.log(message); //output : undefined
var message = 'The variable Has been hoisted';
```

The above code looks like as below to the interpreter,

```javascript
var message;
console.log(message);
message = 'The variable Has been hoisted';
```
### What are classes in ES6

In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.
For example, the prototype based inheritance written in function expression as below,

```javascript
function Bike(model,color) {
    this.model = model;
    this.color = color;
}

Bike.prototype.getDetails = function() {
    return this.model + ' bike has' + this.color + ' color';
};
```

Whereas ES6 classes can be defined as an alternative

```javascript
class Bike{
    constructor(color, model) {
    this.color= color;
    this.model= model;
    }

    getDetails() {
    return this.model + ' bike has' + this.color + ' color';
    }
}
```







