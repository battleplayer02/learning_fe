import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Styles/header.module.css'

export default function Header() {
    return (
        <>
            <div className={styles.logo}>
                <Link to="/">

                    <i className="fa fa-file-text-o" style={{ fontSize: "40px", color: "blue" }}></i>
                </Link>
            </div>
            <div className={styles.contents}>
                <div>
                    Resume Templates
                </div>
                <div>
                    About Us
                </div>
                <div className={styles.signupbtn}>
                    <Link to='/signup' style={{ textDecoration: "none" }}>
                        Register
                    </Link>
                </div>
                <div className={styles.loginbtn}>
                    <Link to='/login' style={{ textDecoration: "none" }}>
                        Login
                    </Link>
                </div>
            </div>
        </>
    )
}
