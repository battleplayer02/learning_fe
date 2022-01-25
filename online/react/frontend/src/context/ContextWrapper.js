import React, { useState } from 'react';
import CartContext from './CartContext';
import UserContext from './ContextCreator';
import FilterContext from './FilterContext';
import SideBarContext from './SideBarContext';

export default function ContextWrapper({ children }) {
    const [user, setUser] = useState(null);
    const [productArr, setproductArr] = useState([]);
    const [open, setOpen] = useState(false);
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


    

    function removeFromCart(id) {
        setCart(cart.filter(item => item.id !== id));
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            <FilterContext.Provider value={{ filter, setFilter }}>
                <UserContext.Provider value={{ user, setUser, productArr, setproductArr }}>
                    <SideBarContext.Provider value={{ open, setOpen }}>
                        {children}
                    </SideBarContext.Provider>
                </UserContext.Provider>
            </FilterContext.Provider>
        </CartContext.Provider>
    );
}