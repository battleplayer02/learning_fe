import React, { useEffect, useState } from 'react'
export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // v1
    useEffect(() => {
        console.log("har bar render to chalega");
    })
    // v2
    useEffect(() => {
        console.log("yeh ek bar chalega ");
    }, [])
    // v3
    useEffect(() => {
        console.log("yeh email k change hone pe chalega");
    }, [email]);
    // v4 
    useEffect(() => {
        return () => {
            console.log("yeh component unmount hone pe chalega");
        }
    }, [])

    const handelLogin = (e) => {
        e.preventDefault();
        console.log('email: ', email)
        console.log('password: ', password)
    }
    return (
        <div className='content'>
            <div className='form-wrapper'>
                <div className="form-ele" >
                    Login
                </div>
                <div className="form-ele" >
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-ele" >
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-ele">
                    <button onClick={handelLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}
