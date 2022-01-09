module.exports = async function (browser, page) {
    await page.goto('https://www.google.com/');
    await page.type('input[name="q"]', 'ipl cricinfo 2021', {
        delay: 100
    })
    await page.type('input[name="q"]', String.fromCharCode(13));
    await page.waitForSelector(".g");
    await page.click("div.g:nth-child(1) a");
}