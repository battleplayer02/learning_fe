import React, { useState } from 'react';
import CartContext from './CartContext';
import UserContext from './ContextCreator';
import FilterContext from './FilterContext';

export default function ContextWrapper({ children }) {
    const [user, setUser] = useState(null);
    const [productArr, setproductArr] = useState([]);
    const [filter, setFilter] = useState({
        search: "",
        category: "",
    });

    // function sum(a, b) {
    //     return a + b;
    // }
    // sum(1, 2);
    const [cart, setCart] = useState([])
    function addToCart(id, name, price, image, category, brand, countInStock) {
        if (countInStock == 0) return;
        // if the product is already in the cart, increase the quantity
        let search = cart.find(item => item.id === id);
        if (search) {
            if (search.countInStock > search.countInCart + 1) {
                search.countInCart += 1;
                setCart([...cart]);
            }
        } else {
            cart.push({
                id,
                name,
                price,
                image,
                category,
                brand,
                countInCart: 1,
                countInStock
            })
            setCart([...cart]);
        }
        console.log(cart);
        // if the product is not in the cart, add it to the cart
    }
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            <FilterContext.Provider value={{ filter, setFilter }}>
                <UserContext.Provider value={{ user, setUser, productArr, setproductArr }}>
                    {children}
                </UserContext.Provider>
            </FilterContext.Provider>
        </CartContext.Provider>
    );
}