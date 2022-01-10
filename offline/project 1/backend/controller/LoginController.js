const loginRouter = require('express').Router();
// posr request to /login
loginRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin' && password === 'admin') {
        res.json({
            success: 1,
            message: 'Login Successful'
        });
    } else {
        res.json({
            success: 1,
            message: 'Login Successful'
        });
    }
});
module.exports = loginRouter;