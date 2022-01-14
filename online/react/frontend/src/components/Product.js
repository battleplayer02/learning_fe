import React from 'react'
export default function Product({ name, category, brand, price, image }) {
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
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
