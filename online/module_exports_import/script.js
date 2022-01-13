// let res = require("./index.js");

// console.log(res);

// let a = 10;
// let b = 20;
// let c = 30;

// let { multiply, tripleMultiply } = require("./utils/mul.js");
// let sum = require("./utils/sum.js");
// require("./utils/sum.js");
// require("./utils/sum.js");
// require("./utils/sum.js");
// require("./utils/sum.js");
// require("./utils/sum.js");
// require("./utils/sum.js");
// require("./utils/sum.js");
// require("./utils/sum.js");
// require("./utils/sum.js");

// console.log(sum(a, b));
// console.log(multiply(a, b));
// console.log(tripleMultiply(a, b, c));

// let res1 = multiply(a, b);
// console.log(res1);


// console.log(__dirname);
// console.log(__filename);
// console.log("require", require);

// every module in js is a function

// console.log(require("module"))

let fs = require("fs")

fs.readFile("./read.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})























