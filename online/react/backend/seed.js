const client = require("./db");
const data = require("./data");
const seed = async () => {
    data.products.map(async (item) => {
        try {
            let {
                name,
                category,
                image,
                price,
                countInStock,
                brand,
                rating,
                numReviews,
                description
            } = item;
            let result = await client.query(
                `insert into products(
                    name,
                    category,
                    image,
                    price,
                    countInStock,
                    brand,
                    rating,
                    numReviews,
                    description
                )values($1,$2,$3,$4,$5,$6,$7,$8,$9)`
                , [
                    name,
                    category,
                    image,
                    price,
                    countInStock,
                    brand,
                    rating,
                    numReviews,
                    description
                ]
            )
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    });
};


seed();