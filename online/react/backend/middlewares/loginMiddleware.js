module.exports.loginMiddleware = (req, res, next) => {
    let { username, password } = req.body;

    if (username == "" || password == "") {
        res.json({
            success: 0,
            message: "Email and password are required"
        })
    }

    if (!username.includes("@")) {
        res.json({
            success: 0,
            message: "Invalid Email"
        })
    }

    if (password.length < 6) {
        res.json({
            success: 0,
            message: "Password must be at least 6 characters"
        })
    }
    next();
}