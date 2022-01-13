import React from "react"
export default function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="logo">
                    amazon
                </div>
                <div className="search-container">
                    <input type="text" />
                    <div className="search-icon">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
