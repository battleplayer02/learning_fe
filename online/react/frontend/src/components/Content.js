import React from "react"
import data from "../data"
import Product from "./Product"

export default function Content() {
    // data.product[5].id
    
    return (
        <div className="content">
            {
                data.products.map(product =>
                    <Product
                        key={product._id}
                        name={product.name}
                        category={product.category}
                        brand={product.brand}
                        price={product.price}
                        image={product.image}
                    />
                )
            }
        </div>
    )
}

