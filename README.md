# Resources For GJP 

Node  JS Interview Questions:  https://github.com/learning-zone/nodejs-interview-questions <br>
React JS Interview Questions:  https://github.com/sudheerj/reactjs-interview-questions <br>
Module Exports Require :       https://www.freecodecamp.org/news/ ,https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/require-module-in-node-js-everything-about-module-require-ccccd3ad383/ <br>
Javascript Interview Questions: https://github.com/sudheerj/javascript-interview-questions

<br>

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