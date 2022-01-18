const data = require('./data.js');
const express = require("express");
let app = express();
const loginRouter = require("./controllers/loginController.js")
const allowOrigin = require("./middlewares/allowOrigin.js")

// allow cors 
app.use(allowOrigin);

// JSON is a data format that is used to exchange data between a server and a client.
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Server is running on port 8080"
    });
})

// routes
app.use("/api", loginRouter);

app.get("/data", (req, res) => {
    res.json(data);
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})