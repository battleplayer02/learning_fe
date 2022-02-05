const client = require("../db")

module.exports.getAllProducts = async function () {
    try {
        let result = await client.query("select * from products");
        return result.rows;
    } catch (error) {
        return error;
    }
}


module.exports.getCategories = async function () {
    try {
        let result = await client
            .query("select category from products group by category");
        return result.rows;
    } catch (error) {
        return error;
    }
}

module.exports.getSingleProduct = async function (id) {
    try {
        let result = await client.query(`select * from products where _id = ${id}`);
        return result.rows[0];
    } catch (error) {
        return error;
    }
}