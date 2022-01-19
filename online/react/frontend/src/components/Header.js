import React from "react"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <img src="images\logo\logo.png" />
                </Link>
                <div className="search-container">
                    <input type="text" placeholder="Search Your Product" />
                    <div className="search-icon">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                <div className="last-items">
                    <div className="item">Cart</div>
                    <div className="item">
                        <Link to="/signin">
                            Signin
                        </Link>
                    </div>
                </div>
            </div>
            <div className="under-header">
                <div className="uh-container">
                    <div className="uh-item flex">
                        <div className="hamburger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        All</div>
                    <div className="uh-item">Fresh</div>
                    <div className="uh-item">Cupons</div>
                    <div className="uh-item">Fashion</div>
                    <div className="uh-item">Electronics</div>
                    <div className="uh-item">Sports, Fitness & Outdoors</div>
                    <div className="uh-item">Gift Ideas</div>
                    <div className="uh-item">Computers</div>
                    <div className="uh-img">
                        <img src="/images/logo/banner.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}