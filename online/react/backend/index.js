const express = require("express");

let app = express();

app.get("/", (req, res) => {
    res.send("Backend is running on port 8080");
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})