console.log("start");
(async () => {
    try {
        const puppeteer = require('puppeteer');
        const fs = require('fs');
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        });
        const page = await browser.newPage();

        const googleSearch = require("./utils/googleSearch.js");
        await googleSearch(browser, page);
        const espnMainPage = require("./utils/espnMainPage.js");
        let arrOfLinks = await espnMainPage(browser, page);
        for (let i = 0; i < arrOfLinks.length; i++) {
            const link = arrOfLinks[i];
            try {
                console.log(link);
                await page.goto(link);
                let data = await page.evaluate(() => {
                    let team1 = {};
                    let team2 = {};
                    team1.name = document.querySelectorAll(".event div.teams p.name")[0].innerText;
                    team2.name = document.querySelectorAll(".event  div.teams p.name")[1].innerText;
                    console.log(team1.name);
                    console.log(team2.name);
                    return {
                        team1,
                        team2,
                    }
                })
                console.log(data);
                fs.writeFileSync(`./data/${i}.json`, JSON.stringify(data));
                page.waitForTimeout(100)
                // await page.close();
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error);
    }
})()
console.log("end");