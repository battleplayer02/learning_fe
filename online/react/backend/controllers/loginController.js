let loginRouter = require("express").Router();
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
const { SECRET } = require("../utils/SECRET");
const { loginMiddleware } = require("../middlewares/loginMiddleware.js");
const { insert, find } = require("../utils/loginUtil");

loginRouter.post("/login", loginMiddleware, async (req, res) => {
    let { username, password } = req.body;
    let result = await find(username, password);
    if (result.success == 1) {
        let token = jwt.sign({ result }, SECRET);
        res.json({
            success: 1,
            message: "Login Successful",
            token
        })
    } else {
        res.json({
            success: 0,
            message: result.message
        })
    }
})

loginRouter.post("/signup", loginMiddleware, async (req, res) => {
    let { username, password } = req.body;
    password = await bcrypt.hash(password, 10);
    let token = jwt.sign({ username, password }, SECRET, { expiresIn: "1h" });
    let result = await insert(username, password);

    if (result.success == 0) {
        res.json({
            success: 0,
            message: result.message
        })
    } else {
        res.json({
            success: 1,
            token,
            username,
            message: "Signup Successful"
        })
    }
})

module.exports = loginRouter;
