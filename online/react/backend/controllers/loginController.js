let loginRouter = require("express").Router();
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
let db = [];
loginRouter.post("/login", async (req, res) => {
    let { username, password } = req.body;
    let result = db.find(user => user.username === username);
    if (result) {
        let pwCompare = await bcrypt.compare(password, result.password,);
        console.log("pwCompare: ", pwCompare);
        console.log("result.password: ", result.password);
        if (pwCompare) {
            res.json({
                message: "Login Successful",
                success: 1
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

loginRouter.post("/signup", async (req, res) => {
    let { username, password } = req.body;

    password = await bcrypt.hash(password, 10);
    // himanshu@gmail.com
    // 123456 ====> 65468d654684dfa68dsfg7ad84gsd6f84g68sd4fg !=== 123456 

    db.push({
        username,
        password
    });
    res.json({
        message: "Signup Successful",
        username, password
    })
})

module.exports = loginRouter;
