import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Logout() {
    const history = useNavigate()
    return (
        <button
            onClick={() => {
                localStorage.removeItem("token")
                history("/login")
            }}
        >Logout</button>
    )
}
