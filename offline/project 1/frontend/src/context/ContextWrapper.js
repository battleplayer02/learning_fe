import React from 'react'
import { useLocalStorageState } from '../UseLocalStorageHook';
import CartContext from './CartContext'
export default function ContextWrapper({ children }) {
    const [cart, setCart] = useLocalStorageState("cart", []);
    // write a function that will add the product to the cart
    const addToCart = (product) => {
        let check = cart.find(item => item.id === product.id)
        if (check) {
            // console.log(check);
            // let newCart = cart.map(item => {
            //     if (item.id === check.id) {
            //         return product
            //     } else {
            //         return item
            //     }
            // })

            let newCart = []
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === check.id) {
                    newCart.push(product)
                } else {
                    newCart.push(cart[i])
                }
            }
            setCart(newCart)
        } else {
            setCart([...cart, product])
        }
    }
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}



// item 1 > 2
// item 2 > 3
// item 3 > 2

// addToCart({item 3,2})

