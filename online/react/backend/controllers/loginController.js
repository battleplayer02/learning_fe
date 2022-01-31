let loginRouter = require("express").Router();
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
const { SECRET } = require("../utils/SECRET");
const { loginMiddleware } = require("./loginMiddleware");

let db = [];

loginRouter.post("/login", loginMiddleware, async (req, res) => {
    let { username, password } = req.body;
    let result = db.find(user => user.username === username);
    if (result) {
        let pwCompare = await bcrypt.compare(password, result.password);
        console.log("pwCompare: ", pwCompare);
        console.log("result.password: ", result.password);
        let token = jwt.sign({ username, password }, SECRET, { expiresIn: "24h" });
        if (pwCompare) {
            res.json({
                success: 1,
                token,
                username,
                message: "Login Successful",
            })
        } else {
            res.json({
                message: "Invalid Password",
                success: 0
            })
        }
    } else {
        res.json({
            success: 0,
            message: "Login Failed Due to Invalid Email"
        })
    }
})

loginRouter.post("/signup", loginMiddleware, async (req, res) => {
    let { username, password } = req.body;
    password = await bcrypt.hash(password, 10);
    let token = jwt.sign({ username, password }, SECRET, { expiresIn: "1h" });
    db.push({
        username,
        password
    });
    res.json({
        message: "Signup Successful",
        success: 1,
        token
    })
})

module.exports = loginRouter;
