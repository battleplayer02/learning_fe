import React, { useState } from 'react'
import "../Products.css"
export default function Products({ name, price, image, quantity }) {
    const [count, setCount] = useState(0)

    const inc = () => {
        if (count <= quantity) {
            setCount(count + 1)
        }
    }

    const minus = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }



    return (

        <div className='product-item'>
            <div className='product-image'>
                <div style={{ height: "200px", width: "300px", background: "red" }}>
                    <img src={"https://images-na.ssl-images-amazon.com/images/I/61OvV27-44L.__AC_SY300_SX300_QL70_FMwebp_.jpg"} alt="product" />
                </div>
            </div>
            <div className='product-footer'>
                <div className='product-title'>
                    <h3>{name}</h3>
                </div>
                <div className='product-price'>
                    <h3>{price}</h3>
                </div>
                <button
                    onClick={inc}
                >+</button>{count}<button
                    onClick={minus}>-</button><br />
                <button>Add To Cart</button>
            </div>
        </div>

    )
}
