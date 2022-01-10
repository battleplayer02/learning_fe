import React from 'react'
import Logout from './Logout'

export default function Navbar({user}) {
    return (
        <div style={{ display: "flex", background: "grey", padding: "10px" }}>
            Hello {user}
            <Logout />
            <div style={{ marginLeft: "auto" }}>
                cart 10
            </div>

        </div>
    )
}
