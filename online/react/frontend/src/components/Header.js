import React from "react"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div className="header">
            <div className="header-container">
                {/* <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div> */}
                <Link to="/" className="logo">
                    <img src="images\logo\logo.png" className="logo" />
                </Link>
                <div className="search-container">
                    <input type="text" placeholder="Search Your Product" />
                    <div className="search-icon">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                <div className="last-items">
                    <div className="item">Cart</div>
                    <Link to="/signin">
                        <div className="item">Signin</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}