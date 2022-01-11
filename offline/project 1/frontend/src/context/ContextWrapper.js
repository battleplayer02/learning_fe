import React from 'react'
import CartContext from './CartContext'
export default function ContextWrapper({ children }) {
    const [cart, setCart] = React.useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    }
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
