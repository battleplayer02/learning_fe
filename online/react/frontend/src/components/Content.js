import React, { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios";

export default function Content() {
    const [productArr, setproductArr] = useState([])

    // install axios  // npm install axios ---.>inside frontend folder

    useEffect(async () => {
        console.log("only one time when component is mounted")
        let responseData = await axios.get("http://localhost:8080/data")
        console.log(responseData.data);
        setproductArr(responseData.data.products)
    }, []);

    return (
        <div className="content">
            {
                productArr.length == 0 ?
                    "Loading...." :
                    productArr.map(product =>
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

