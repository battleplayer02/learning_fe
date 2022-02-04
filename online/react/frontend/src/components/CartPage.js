import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartPageItem from './CartPageItem';
export default function CartPage() {
    let { cart } = useContext(CartContext);
    let total = cart.reduce((acc, item) => acc + item.countInCart * item.price, 0);
    console.log(cart);
    let newArr = cart.map(item => (
        <CartPageItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            countInStock={item.countInStock}
            countInCart={item.countInCart}
            image={item.image}
        />
    ))
    return (
        <>
            <div className='content' style={{ flexDirection: "column" }}>
                <h1>Items in Cart</h1>
                {newArr}
                <h1>Total Cost Of cart :Rs. {total}</h1>
            </div>
        </>
    );
}
