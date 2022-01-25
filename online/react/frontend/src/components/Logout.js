import React, { useContext } from 'react';
import UserContext from '../context/ContextCreator';


export default function Logout(props) {
    let user = useContext(UserContext)
    function logout() {
        localStorage.removeItem("user");
        user.setUser(null)
        props.history.push("/")
    }
    return <div onClick={logout} className="item">Logout</div>;
}
