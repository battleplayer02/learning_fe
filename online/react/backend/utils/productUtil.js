const client = require("../db")

module.exports.getAllProducts = async function () {
    try {
        let result = await client.query("select * from products");
        return result.rows;
    } catch (error) {
        return error;
    }
}