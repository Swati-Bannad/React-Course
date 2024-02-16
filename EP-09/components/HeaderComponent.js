import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//Header component
const HeaderComponent = () => {
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus=useOnlineStatus();
    return (
        <div className="header">
            <div className="container head-wrap">
            <div className="logo">
                <img  src={LOGO_URL} alt="Food Logo" />
            </div>
            <ul className="nav-item">
                <li>OnlineStatus : {onlineStatus===true ? "✅":"🔴"}</li>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/grocery">Grocery Store</Link></li>
                <li><button className="btn-login" onClick={() => {
                    btnName==="Login" ? setBtnName("Logout"):setBtnName("Login");
                }}>{btnName}</button></li>
            </ul>
            </div>
        </div>
    )
}
export default HeaderComponent;