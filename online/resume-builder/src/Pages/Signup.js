import React from 'react'
import styles from '../Styles/signup.module.css'

export default function Signup() {
    return (
        <div class="form-card">
            <h2 class="form-heading center">Enter your details</h2>
            <div class="form-section">
                <div class="input-group full">
                    <label>Email</label>
                    <div class="effect">
                        <input type="text" name="email" value="" />
                    </div>
                </div>
                <div class="input-group full">
                    <label>Password</label>
                    <div class="effect">
                        <input type="password" name="password" value="" />
                    </div>
                </div>
                <div class="form-buttons">
                    <button class="btn hvr-float-shadow" type="button">Register</button>
                </div>
            </div>
        </div>
    )
}
