import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import UserContext from '../context/ContextCreator';

export default function Signin() {
    const { setUser } = useContext(UserContext) // to use the context you use useContext hook

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailCheck, setEmailCheck] = useState(false)
    const [passowrdCheck, setPasswordCheck] = useState(false)
    const [error, setError] = useState(false)


    const handelLogin = async () => {
        // e.preventDefault();
        console.log('email: ', email)
        console.log('password: ', password)
        if (!email.includes('@') || !email.includes('.')) {
            setEmailCheck("Enter correct email")
            return;
        } else {
            setEmailCheck(false)
        }
        if (password.length < 6) {
            setPasswordCheck("Password length must be greater than 6")
            return;
        } else {
            setPasswordCheck(false)
        }
        let responceData = await axios.post("/api/login", {
            username: email,
            password
        })
        console.log("responceData: ", responceData);
        if (responceData.data.success === 1) {
            // redirect to the home page
            setUser(responceData.data);
            console.log(responceData.data);
            localStorage.setItem('user', JSON.stringify(responceData.data));
            navigate("/");
        } else {
            setError(responceData.data.message)
        }
    }

    return (
        <div className='content' style={{ alignItems: "start" }}>
            <div className='form-wrapper'>
                <img src="/images/logo/logo-white.png" alt="not found" style={{ marginLeft: "auto", marginRight: "auto" }} height="66" width="184" />
                {
                    error &&
                    <div className='error'>
                        <i className='fas fa-exclamation-triangle'></i>&nbsp;&nbsp;{error}
                    </div>
                }
                <div className="inner-form-wrapper">
                    <div className="form-ele signin">
                        <label className='signin'>Sign-In</label>
                        <hr />
                    </div>
                    <div className="form-ele" >
                        <label>Email or mobile phone number</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-ele">
                        <div className="fgt-pw-container">
                            <label>Password</label>
                            <label className='fgt-pw'>Forget Password</label>
                        </div>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-ele">
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                        <br /> Need help?
                    </div>
                    <div style={{ color: "red" }}>
                        {emailCheck && <span>{emailCheck}</span>}
                        {passowrdCheck && <span>{passowrdCheck}</span>}
                    </div>
                    <div className="form-ele">
                        <button onClick={handelLogin} className="login-btn">Login</button>
                    </div>
                    <div className="form-ele">
                        <Link to="/signup">
                            <button className="create-acc-btn">Create Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}