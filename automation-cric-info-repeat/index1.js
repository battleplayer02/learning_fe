console.log("start");
const puppeteer = require("puppeteer");

puppeteer.launch({
    headless: false
}).then(browser => {
    return browser.newPage();
}).then(page => {
    return page.goto("https://www.google.com/");
}).catch(err => {
    console.log(err);
});


console.log("end");