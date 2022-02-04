let client = require("../db");
let bcrypt = require("bcryptjs");


module.exports.insert = async (username, password) => {
    try {
        let result = await client.query("insert into login (username, password) values ($1,$2)", [username, password]);
        return result;
    } catch (error) {
        return {
            success: 0,
            message: "User already exists"
        }
    }
}

module.exports.find = async (username, password) => {
    try {
        let result = await client.query("select * from login where username = $1", [username]);
        if (result.rows[0]) {
            let pwCompare = await bcrypt.compare(password, result.rows[0].password);
            if (pwCompare) {
                return {
                    success: 1,
                    message: "Login Successful"
                }
            } else {
                return {
                    success: 0,
                    message: "Invalid Password"
                }
            }
        } else {
            return {
                success: 0,
                message: "Invalid Email"
            }
        }
    } catch (error) {
        return {
            success: 0,
            message: "Invalid Credentials"
        }
    }
}