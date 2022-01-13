import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import Logout from './Logout'


export default function Navbar({ user }) {
    const { cart } = useContext(CartContext)
    let total = 0

    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].count
        }
        console.log(total);
    }

    return (
        <div style={{ display: "flex", background: "grey", padding: "10px" }}>
            Hello {user}
            <Logout />
            <div style={{ marginLeft: "auto" }}>
                cart {total}
            </div>
        </div>
    )
}
