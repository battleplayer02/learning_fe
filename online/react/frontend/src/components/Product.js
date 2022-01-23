import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
export default function Product({ id, name, category, brand, price, image, countInStock }) {
    let { addToCart } = useContext(CartContext)
    function handelClick() {
        addToCart(id, name, price, image, category, brand, countInStock) //sum(1,2)
    }
    //function addToCart(id, name, price, image, category, brand, countInStock) {

    return (
        <div className='product'>
            <div className="product-header">
                <img className="img" src={image}
                    alt='product' />
            </div>
            <div className="content-product">
                <div className="title">
                    <div className='details'>
                        <h3>
                            {name}
                        </h3>
                        <div>Category : {category}</div>
                        <div>Barand: {brand}</div>
                    </div>
                    <div className='wrapper'>
                        <div className='price'>
                            <span>Rs.</span>
                            <span>{price}</span>
                        </div>
                        <div className="btn">
                            <button onClick={handelClick}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
