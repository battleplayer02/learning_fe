let fs = require('fs');
let arr = ["1.txt", "2.txt", "3.txt", "4.txt"];

function callback(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}


// for (let i = 0; i < arr.length; i++) {
//     fs.readFile(`./files/${arr[i]}`, 'utf8', callback)
// }





//  1 2 3 4
// y ==>>> its output will be same all the time
console.log("start");
setTimeout(() => {
    // code 
    console.log("y");
}, 1000);
console.log("end");
