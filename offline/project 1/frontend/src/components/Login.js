import React from 'react'

export default function Login() {
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
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="label-text">Password</div>

                <div className="input-text">
                    <input type="password" placeholder="*************" />
                </div>
                <div className="btn">
                    <button>Sign In</button>
                </div>
                <div className="ftg-pw">
                    Forgot Password
                </div>
            </div>
        </main>
)
}
