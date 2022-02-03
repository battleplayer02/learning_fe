let pg = require("pg");

let config = {
    user: "uw8j9xywyopeonb9cwon",
    database: "bk0hqc7dq1flwq4i2n6v",
    password: "ZsM6RiKLmc7scgZFi2Nb",
    port: 5432,
    host: "bk0hqc7dq1flwq4i2n6v-postgresql.services.clever-cloud.com",
    max: 10,
    idleTimeoutMillis: 30000
};

let pool = new pg.Pool(config);
pool.on("error", function (err, client) {
    console.error("idle client error", err.message, err.stack);
});
pool.connect(function (err, client, done) {
    if (err) {
        return console.error("error fetching client from pool", err);
    }
});

pool.query("select * from product_details", function (err, result) {
    if (err) {
        return console.error("error running query", err);
    }
    console.log(result.rows);
});