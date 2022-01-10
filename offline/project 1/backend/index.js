const express = require('express');
const app = express();
const cors = require('cors');
// allow cors
app.use(cors({
    origin: '*',
}));


// app.use((req, res, next) => {
//     // allow cross origin requests
//     // allow authorized requests
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// })


// to accept JSON data
app.use(express.json());
// cors allow *

app.get("/", (req, res) => {
    res.json({
        message: 'App is Running'
    })
})

// login routs
app.use("/api", require("./controller/LoginController"));

// product routs
app.use("/api/products", require("./controller/ProductController"));

app.listen(8080, () => {
    console.log('Server is Running on port 8080');
})