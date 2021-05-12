import { useContext } from "react"
import dynamic from "next/dynamic"
import AppContext from "../../context/appProvider"
import { CartContext } from "../../context/CartProvider"

const CartIcon = dynamic(() => import("../atoms/icons/CartIcon"))
const PopupCart = dynamic(() => import("./PopupCart"))

const Cart = () => {
	const appData = useContext(AppContext)
	const CartData = useContext(CartContext)

  const popup = CartData.popup.popup
  const setPopup = CartData.popup.setPopup

	const togglePopup = () => {
    setPopup(!popup);
  };
	
	return (
		<div>
			<div className="cart" onClick={togglePopup}>
				<CartIcon width="48" height="48" fill={`#${appData.settings.theme}`} stroke="white"/>
			</div>
			<PopupCart />
		</div>
	)
}

export default Cart