module.exports = async function (browser, page) {
    await page.waitForSelector(`a[data-hover="Fixtures and Results"]`);
    await page.click(`a[data-hover="Fixtures and Results"]`);
    await page.waitForSelector(`.global-footer`);
    await page.waitForTimeout(5000);
    let arrOfLinks = await page.evaluate(() => {
        let arr = document.querySelectorAll(`.col-md-8.col-16 a.match-info-link-FIXTURES`)
        let newArr = [];
        console.clear();
        arr.forEach(ancor => {
            console.log(ancor);
            newArr.push("https://www.espncricinfo.com" + ancor.getAttribute("href"));
        })
        console.log(arr);
        return newArr;
    })
    return arrOfLinks;
}