import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Cart() {
    let sum = 0;
    let { cart } = useContext(CartContext);

    sum = cart.reduce((acc, item) => acc + item.countInCart, 0);

    return (
        <div className="item">
            <i className="fa fa-shopping-cart"></i>
            <span style={{ color: "white", background: "red", padding: "3px", borderRadius: "50%" }}>{sum}</span>
        </div>
    );
}