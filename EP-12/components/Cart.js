import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) =>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart= () => {
        dispatch(clearCart());
    }
    return (
        <div className="menu-page res-fex">
            <div className="cart-container">
                <h1>Cart Items</h1>
                
                {cartItems.length == 0 && <div><p>There is nothing in your cart.Let's add some items</p></div>}
                {cartItems.length > 0 && 
                    <div>
                        <button className="clear-btn" onClick={handleClearCart}>Clear Cart</button>
                        <Itemlist items={cartItems}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;