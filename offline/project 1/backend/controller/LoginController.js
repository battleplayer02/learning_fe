const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let db = [];
const SECRET = 'something very secret'
// posr request to /login
loginRouter.post('/login', (req, res) => {
    setTimeout(() => {
        const { email, password } = req.body;
        const user = db.find(user => user.email === email && bcrypt.compare(user.password, password));
        if (user) {
            let token = jwt.sign({ email }, SECRET, { expiresIn: '24h' });
            // console.log(token);
            res.json({
                success: 1,
                message: 'Login Successful',
                token
            });
        } else {
            res.json({
                success: 0,
                message: 'Login Unsuccessful'
            });
        }
    }, 5000);
});

loginRouter.post('/signup', async (req, res) => {
    let { email, password } = req.body;
    password = await bcrypt.hash(password, 10);
    db.push({
        email,
        password
    });
    // console.log(db);
    res.json({
        success: 1,
        message: 'Signup Successful'
    });
});

loginRouter.get('/getUserFromToken', (req, res) => {
    // get token from header authorization
    try {
        const token = req.headers.authorization.split(' ')[1];
        // console.log(token);
        const user = jwt.verify(token, SECRET);
        // console.log(user);
        res.json({
            success: 1,
            message: 'Get User From Token Successful',
            user
        });
    } catch (error) {
        res.json({
            success: 0,
            message: 'Get User From Token Unsuccessful'
        });
    }
});


module.exports = loginRouter;