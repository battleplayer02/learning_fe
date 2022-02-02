import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/ContextCreator';


export default function Logout(props) {
    let navigate = useNavigate()
    let user = useContext(UserContext)
    function logout() {
        localStorage.removeItem("user");
        user.setUser(null)
        navigate("/")
    }
    return <div onClick={logout} className="item">Logout</div>;
}
