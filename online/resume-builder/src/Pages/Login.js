import React from 'react'
import styles from '../Styles/login.module.css'

export default function Login() {
    return (
        <div className={styles.formcard}>
            <h2 className="form-heading center">Enter Login details</h2>
            <div className="form-section">
                <div className="input-group full">
                    <label>Email</label>
                    <div className="effect">
                        <input type="text" name="email" value="" />
                    </div>
                </div>
                <div className="input-group full">
                    <label>Password</label>
                    <div className="effect">
                        <input type="password" name="password" value="" />
                    </div>
                </div>
                <div className="form-buttons">
                    <button className="btn hvr-float-shadow" type="button">Login</button>
                </div>
            </div>
        </div>
    )
}
