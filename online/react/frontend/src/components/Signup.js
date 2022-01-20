import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailCheck, setEmailCheck] = useState(false)
    const [passowrdCheck, setPasswordCheck] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordCheck, setConfirmPasswordCheck] = useState(false)
    const [error, setError] = useState(false)

    const handelLogin = async () => {
        // e.preventDefault();
        console.log('email: ', email)
        console.log('password: ', password)
        if (!email.includes('@') || !email.includes('.')) {
            setEmailCheck("Enter correct email")
            return;
        } else {
            setEmailCheck(false);
        }
        if (password !== confirmPassword) {
            setConfirmPasswordCheck("Password doesn't match");
            return;
        }
        else {
            setConfirmPasswordCheck(false);
        }
        if (password.length < 6) {
            setPasswordCheck("Password length must be greater than 6")
            return;
        } else {
            setPasswordCheck(false)
        }
        let responceData = await axios.post("http://localhost:8080/api/signup", {
            username: email,
            password
        })
        console.log("responceData: ", responceData);
        if (responceData.data.success == 1) {
            // redirect to the home page
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
                        {error}
                    </div>
                }
                <div className="inner-form-wrapper">
                    <div className="form-ele signin">
                        <label className='signin'>Create Account</label>
                        <hr />
                    </div>
                    <div className="form-ele" >
                        <label>Email or mobile phone number</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="form-ele">
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="form-ele">
                        <label>Confirm Password</label>
                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                    </div>
                    <div className="form-ele">
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                        <br /> Need help?
                    </div>
                    <div style={{ color: "red" }}>
                        {emailCheck && <span>{emailCheck}</span>}
                        {passowrdCheck && <span>{passowrdCheck}</span>}
                        {confirmPasswordCheck && <span>{confirmPasswordCheck}</span>}
                    </div>
                    <div className="form-ele">
                        <button onClick={handelLogin} className="login-btn">Create Account</button>
                    </div>
                    <div className="form-ele">
                        <Link to="/signin">
                            Already have an account? Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

