module.exports = async (page) => {
    JSON.stringify(await page.evaluate(() => {
        let team1 = {};
        let team2 = {};
        alert("start");
        team1.name = document.querySelectorAll(".event  div.teams p.name")[0].innerText;
        team2.name = document.querySelectorAll(".event  div.teams p.name")[1].innerText;
        console.log(team1.name);
        alert(team1.name);
        console.log(team2.name);
        alert(team2.name);
        return {
            team1,
            team2,
        }
    }))
}