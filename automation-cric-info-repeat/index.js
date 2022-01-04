console.log("start");
const puppeteer = require("puppeteer");
let tab;
puppeteer.launch({
    headless: false
}).then(browser => {
    browser.newPage().then(newTab => {
        tab = newTab;
        tab.goto("https://www.google.com/").then(() => {
            console.log("page opened");
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});
console.log("end");