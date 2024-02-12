import { LOGO_URL } from "../utils/constants";
//Header component
const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="container head-wrap">
            <div className="logo">
                <img  src={LOGO_URL} alt="Food Logo" />
            </div>
            <ul className="nav-item">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Cart</a></li>
            </ul>
            </div>
        </div>
    )
}
export default HeaderComponent;