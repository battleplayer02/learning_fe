import React, { useContext, useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios";
import UserContext from "../context/ContextCreator";
import FilterContext from "../context/FilterContext";

export default function Content() {
    const { productArr, setproductArr } = useContext(UserContext);
    const { filter } = useContext(FilterContext);

    // install axios  // npm install axios ---.>inside frontend folder

    useEffect(async () => {
        console.log("only one time when component is mounted")
        let responseData = await axios.get("http://localhost:8080/data")
        console.log(responseData.data);
        setproductArr(responseData.data.products)
    }, []);

    // map filter reduce 
    let newArr = productArr
        .filter(product => product.name.toLowerCase().includes(filter.search.toLowerCase()));
    return (
        <div className="content">
            {
                productArr.length == 0 ?
                    "Loading...." :
                    newArr.length == 0 ? "No Products Found..."
                        : newArr.map(product =>
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

