import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
export default function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    // if user is already logged in, redirect to home
    useEffect(async () => {
        if (localStorage.getItem("token")) {
            // get user from token
            let resData = await axios.get("http://localhost:8080/api/getUserFromToken", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (resData.data.success == 1) {
                history("/");
            }
        }
    }, [])

    // signup send request to server and set localStorage
    const handelClick = async e => {
        e.preventDefault()
        let responseData = await axios.post("http://localhost:8080/api/signup", {
            email,
            password
        })
        if (responseData.data.success == 1) {
            // set localStorage login to true
            history("/login");
        } else {
            alert("Signup Failed")
        }
    }

    return (
        <main>
            <div className="outer">
                <div className="plus">
                    <div className="circle">+</div>
                </div>
                <div className="login">Sign Up</div>
                <div className="login-in-to">Signup In To</div>
                <div className="label-text">Email-id</div>
                <div className="input-text">
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="email" placeholder="Enter your email" />
                </div>
                <div className="label-text">Password</div>
                <div className="input-text">
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password" placeholder="*************" />
                </div>
                <div className="btn">
                    <button onClick={handelClick}>Sign Up</button>
                </div>
                <div className="ftg-pw">
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </main>
    )
}
