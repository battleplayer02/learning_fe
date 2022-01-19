let loginRouter = require("express").Router();
let db = [
    {
        username: "admin@admin.com",
        password: "1234567"
    },
    {
        username: "user",
        password: "user"
    }
];
loginRouter.post("/login", (req, res) => {
    let { username, password } = req.body;
    let result = db.find(user => user.username === username && user.password === password);
    if (result) {
        res.json({
            message: "Login Successful"
        })
    } else {
        res.json({
            message: "Login Failed"
        })
    }
})

loginRouter.post("/signup", (req, res) => {
    let { username, password } = req.body;
    db.push({
        username,
        password
    });
    res.json({
        message: "Signup Successful"
    })
})

module.exports = loginRouter;
