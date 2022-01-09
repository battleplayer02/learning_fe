// A basic express server
const express = require("express")
let app = express()
// allow cross origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// to accept json type of data 
app.use(express.json())
app.post("/login", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    if (username == "admin" && password == "admin") {
        res.json({
            success: "1"
        })
    } else {
        res.json({
            success: "0"
        })
    }
    res.json({
        message: "Data inserted successfully"
    })
})
app.listen(4000, () => {
    console.log("Server is running at port 4000")
})