const express = require('express');
const app = express();
// to accept JSON data
app.use(express.json());
// cors allow *
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get("/", (req, res) => {
    res.json({
        message: 'App is Running'
    })
})

// login routs
app.use("/api", require("./controller/LoginController"));

app.listen(8080, () => {
    console.log('Server is Running on port 8080');
})