const data = require('./data.js');
const express = require("express");
let app = express();
const loginRouter = require("./controllers/loginController.js");
const allowOrigin = require('./middlewares/allowOrigin.js');
const productRouter = require('./controllers/productController.js');
const verifyToken = require('./middlewares/verifyToken.js');

// allow cors 
app.use(allowOrigin);

// JSON is a data format that is used to exchange data between a server and a client.
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Server is running on port 8080"
    });
})

/*******************routes************/

/*  Login */
app.use("/api", loginRouter);

/* Products */
app.use("/api/product", verifyToken, productRouter);

app.get("/data", (req, res) => {
    setTimeout(() => {
        res.json(data);
    }, 0);
})

/****************end routes************/



/* Listening to 8080  */
app.listen(8080, () => {
    console.log("Server is running on port 8080");
})