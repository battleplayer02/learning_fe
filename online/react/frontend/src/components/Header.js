import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import UserContext from "../context/ContextCreator";
import SideBarContext from "../context/SideBarContext";
import Cart from "./Cart";
import Logout from "./Logout";
import SearchBar from "./SearchBar";


export default function Header() {
    let { user, setUser } = useContext(UserContext);
    const { setOpen } = useContext(SideBarContext);

    useEffect(() => {
        if (localStorage.getItem("user")) {
            let userData = JSON.parse(localStorage.getItem("user"));
            console.log(userData.username);
            setUser(userData);
        }
    }, [])

    function openSidebar() {
        setOpen(true);
    }

    return (
        <div className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <img src="/images/logo/logo.png" />
                </Link>
                <div className="search-container">
                    <SearchBar />
                    <div className="search-icon">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                <div className="last-items">
                    <Link to="/cart">
                        <Cart />
                    </Link>
                    <div className="item">
                        {
                            user == null ?
                                <Link to="/signin">
                                    Signin
                                </Link>
                                : user.username
                        }
                    </div>
                    {
                        user !== null ? <Logout /> : null
                    }
                </div>
            </div>
            <div className="under-header">
                <div className="uh-container">
                    <div className="uh-item flex" onClick={openSidebar}>
                        <div className="hamburger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        All
                    </div>
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