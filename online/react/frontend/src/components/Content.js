import React, { useContext, useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios";
import UserContext from "../context/ContextCreator";
import FilterContext from "../context/FilterContext";

export default function Content() {
    const { productArr, setproductArr } = useContext(UserContext);
    const { filter: { search } } = useContext(FilterContext);
    const { filter: { category } } = useContext(FilterContext);
    //filter{search}

    useEffect(async () => {
        console.log("only one time when component is mounted")
        let responseData = await axios.get("http://localhost:8080/data")
        console.log(responseData.data);
        setproductArr(responseData.data.products)
    }, []);


    let newArr = productArr
        .filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

    let newArrFilterCategory = newArr.filter(product => product.category.includes(category));
    
    return (
        <div className="content">
            {
                productArr.length == 0 ?
                    "Loading...." :
                    newArrFilterCategory.length == 0 ? "No Products Found..."
                        : newArrFilterCategory.map(product =>
                            <Product
                                id={product._id}
                                key={product._id}
                                name={product.name}
                                category={product.category}
                                brand={product.brand}
                                price={product.price}
                                image={product.image}
                                countInStock={product.countInStock}
                            />
                        )
            }
        </div>
    )
}

