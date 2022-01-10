import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // if user is already logged in, redirect to home
    useEffect(() => {
        if (localStorage.getItem("login") === "true") {
            history("/");
        }
    }, [])

    // login send request to server and set localStorage
    const handelClick = async e => {
        e.preventDefault()
        let responseData = await axios.post("http://localhost:8080/api/login", {
            email,
            password
        })
        if (responseData.data.success == 1) {
            // set localStorage login to true
            localStorage.setItem("login", true)
            history("/");
        } else {
            alert("Login Failed")
        }
    }
    return (
        <main>
            <div className="outer">
                <div className="plus">
                    <div className="circle">+</div>
                </div>
                <div className="login">Login</div>
                <div className="login-in-to">Login In To</div>
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
                    <button onClick={handelClick}>Sign In</button>
                </div>
                <div className="ftg-pw">
                    Forgot Password
                </div>
            </div>
        </main>
    )
}