import React from 'react'
import image from "../images/logo512.png"
export default function Product() {
    return (
        <div className='product'>
            <div className="header">
                <img className="img" src={image} height="100px" width="50px"/>
            </div>
            <div className="content-product">
                <div className="title">
                    <div className='details'>
                        <h3>
                            Product Title
                        </h3>
                        <div>Category</div>
                    </div>
                    <div className='wrapper'>
                        <div className='price'>
                            <span>Rs.</span>
                            <span>1000</span>
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
