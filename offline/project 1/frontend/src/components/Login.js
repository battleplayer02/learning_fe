import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Login() {
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailCheck, setEmailChech] = useState(false)
    const [passwordCheck, setCheckPassword] = useState(false)

    // if user is already logged in, redirect to home
    useEffect(async () => {
        if (localStorage.getItem("token")) {
            // get user from token
            let resData = await axios.get("http://localhost:8080/api/getUserFromToken", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(resData.data.user);
            if (resData.data.success == 1) {
                history("/");
            }
        }
    }, [])

    // login send request to server and set localStorage
    const handelClick = async e => {
        e.preventDefault()
        if (!email.includes('@') || !email.includes('.') || email.length == 0) {
            setEmailChech("Enter a valid email")
            return
        }
        if (password.length == 0) {
            setCheckPassword("Password connot be empty")
            return;
        }
        if (password.length < 6) {
            setCheckPassword("Password must be at least 6 characters")
            return;
        }
        setLoading(true);
        let responseData = await axios.post("http://localhost:8080/api/login", {
            email,
            password
        })
        if (responseData.data.success == 1) {
            // set localStorage login to true
            setLoading(false);
            localStorage.setItem("token", responseData.data.token);
            history("/");
        } else {
            setLoading(false);
            alert("Login Failed")
        }
    }
    return (
        <>
            {
                loading == true ? <>Loading...</> :
                    <main>
                        <div className="outer">
                            <div className="plus">
                                <div className="circle">+</div>
                            </div>
                            <div className="login">Login</div>
                            <div className="login-in-to">Login In To</div>
                            <div className="label-text">Email-id</div>
                            <div className="input-text">
                                {emailCheck && <p style={{ color: "red", fontSize: "10px" }}>{emailCheck}</p>}
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    type="email" placeholder="Enter your email" />

                            </div>
                            <div className="label-text">Password</div>
                            <div className="input-text">
                                {passwordCheck && <p style={{ color: "red", fontSize: "10px" }}>{passwordCheck}</p>}
                                <input
                                    onChange={e => setPassword(e.target.value)}
                                    type="password" placeholder="*************" />
                            </div>
                            <div className="btn">
                                <button onClick={handelClick}>Sign In</button>
                            </div>
                            <div className="ftg-pw">
                                <Link to="/signup">
                                    Signup
                                </Link>
                            </div>
                        </div>
                    </main>
            }
        </>
    )
}