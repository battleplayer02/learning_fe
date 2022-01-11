import React, { useState, useContext } from 'react'
import CartContext from '../context/CartContext'
import "../Products.css"

export default function Products({ name, price, image, quantity, id }) {
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(CartContext)

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

    const handelAddToCart = () => {
        addToCart({ name, price, image, count, id })
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
                <button
                    onClick={handelAddToCart}
                >Add To Cart</button>
            </div>
        </div>

    )
}
