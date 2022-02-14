const data = require("../data");
const { getAllProducts, getCategories, getSingleProduct } = require("../utils/productUtil");
let productRouter = require("express").Router();

productRouter.get("/categories", (req, res) => {
    getCategories().then(result => {
        res.json({
            success: 1,
            result
        });
    }).catch(error => {
        res.json({
            success: 0,
            message: error
        });
    });
});


productRouter.get("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let decoded = req.decoded;
        console.log("decoded: ", decoded);
        let product = await getSingleProduct(id);

        res.json({
            success: 1,
            message: "Product found",
            product
        });
    } catch (error) {
        res.json({
            success: 0,
            message: "Product not found"
        })
    }
});


module.exports = productRouter;




