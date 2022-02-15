import React from 'react'
import styles from '../../Styles/header.module.css'

export default function Header() {
  return (
    <>
        <div className={styles.logo}>
            Logo
        </div>
        <div className={styles.contents}>
            <div>
                Resume Templates
            </div>
            <div>
                About Us
            </div>
            <div>
                Register
            </div>
            <div>
                Sign In
            </div>
        </div>
    </>
  )
}
