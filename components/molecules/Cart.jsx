import { useState, useContext } from "react"
import dynamic from "next/dynamic"
import AppContext from "../../context/appProvider"

const CartIcon = dynamic(() => import("../atoms/icons/CartIcon"))
const PopupCart = dynamic(() => import("./PopupCart"))

const Cart = () => {
	const appData = useContext(AppContext)
	const [showPopup, setShowPopup] = useState(false);

	const togglePopup = () => {
    setShowPopup(!showPopup);
  };
	
	return (
		<div>
			<div className="cart" onClick={togglePopup}>
				<CartIcon width="48" height="48" fill={`#${appData.settings.theme}`} stroke="white"/>
			</div>
			<PopupCart showPopup={showPopup}/>
		</div>
	)
}

export default Cart