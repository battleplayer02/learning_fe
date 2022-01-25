import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from "../CartItem.module.css";
import CartContext from '../context/CartContext';
export default function CartPageItem({ id, name, price, countInStock, countInCart, image, }) {
    let [count, setCount] = useState(countInCart);
    const { removeFromCart } = useContext(CartContext);
    const increase = () => {
        if (countInStock > count) {
            setCount(count + 1);
        }
    }
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }


    // /product/1   => cart/product/1
    // product/1    => localhost:3000/product/1

    return (
        <>
            <div className={styles.cartItem}>
                <img src={image} className={styles.img} />
                <div className={styles.name}>
                    <Link to={`/product/${id}`}>
                        {name}
                    </Link>
                </div>
                <div className={styles.price}>
                    ${price}
                </div>
                <div className={styles.quantity}>
                    <button className={styles.quantityBtn} onClick={decrease}>-</button>
                    {count}
                    <button className={styles.quantityBtn} onClick={increase}>+</button>
                </div>
                <div className={styles.deleteBtn}>
                    <button onClick={() => removeFromCart(id)}>Delete</button>
                </div>
            </div>
        </>
    );
}
