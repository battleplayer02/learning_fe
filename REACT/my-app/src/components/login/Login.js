import React from 'react'
import './Login.css'
export default function Login() {
    console.log('Login');
    let a = 1
    function clicFun() {
        a++
        console.log('clicked', a);
    }
    return (
        <div className='login'>
            <div className='inner'>
                <div className='heading'>
                    <h3>Login</h3>
                </div>
                <main>
                    <div className='form-ele'>
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' />
                    </div>
                    <div className='form-ele'>
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                    </div>
                    <div className='form-ele'>
                        <button onClick={clicFun}>Login</button>
                    </div>
                </main>
            </div>
        </div>
    )
}