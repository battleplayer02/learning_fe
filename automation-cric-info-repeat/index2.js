(async () => {
    try {
        let puppeteer = require("puppeteer");
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        });
        let page = await browser.newPage();
        await page.goto("https://www.google.com")
        await page.type("input:nth-child(1)", "ipl 2021 espn cricinfo")
        await page.keyboard.press("Enter")
        await page.waitForNavigation();
        await page.click("div.g a:nth-child(1)")
        await page.waitForNavigation()
        await page.click("a.nav-link[data-hover='Fixtures and Results']")
        // get the 60 links in an array 
        await page.waitForNavigation()
        let arr = await page.evaluate(function () {
            let inner_arr = []
            let newArr = document
                .querySelectorAll(".card.content-block.league-scores-container .col-md-8.col-16");
            newArr.forEach(ele => {
                let link = ele.querySelector("a[data-hover='Scorecard']").getAttribute("href")
                inner_arr.push(link)
            })
            return inner_arr;
        });
        // console.log(arr.length,arr);
        // arr.map(async link => {
        //     let newPage = await browser.newPage()
        //     await newPage.goto(link);
        //     await page.waitForTimeout(1000)
        //     await newPage.close();
        // })
        for (let i = 0; i < 1; i++) {
            const link = arr[i];
            let newPage = await browser.newPage()
            await newPage.goto("https://www.espncricinfo.com" + link);
            await newPage.waitForTimeout(1000)
            let info = await newPage.evaluate(()=>{
                let info = {};
                let team1 = document.querySelectorAll("div.event p.name")[0].innerText;
                let team2 = document.querySelectorAll("div.event p.name")[1].innerText;    
                info.team1 = team1;
                info.team2 = team2;
                return info;
            })
            newPage.close();
            // do simething to write it on the .json file
        }
    } catch (error) {
        console.log(error);
    }
})();