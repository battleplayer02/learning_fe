const data = require("../data");
let productRouter = require("express").Router();

productRouter.get("/:id", (req, res) => {
    let { id } = req.params;
    let decoded = req.decoded;
    console.log("decoded: ", decoded);
    let product = data.products.find(ele => ele._id === id);
    if (product) {
        res.json({
            success: 1,
            message: "Product found",
            product
        });
    } else {
        res.json({
            success: 0,
            message: "Product not found"
        })
    }
});


module.exports = productRouter;