import { useState, useContext } from "react";
import AppContext from "../../context/appProvider"
import { CartContext }  from "../../context/CartProvider"

const BadgeButton = ({price, product}) => {
	const appData = useContext(AppContext)
  const [count, setCount] = useState(price)
  const CartData = useContext(CartContext)
	const items = CartData.cart.state
	const popup = CartData.popup.popup

	const dispatch = CartData.cart.dispatch
  const setPopup = CartData.popup.setPopup

	const handleRemove = item => {
		dispatch({type: "DELETE_ITEM", item})
		if (items.length === 0) {
			setPopup(!popup)
		}
	}

	const addToCart = (item) => {
		dispatch({type: "ADD", item})
    setPopup(true)
  }

	const badgeStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  return (
		<button className="btn_badge" style={badgeStyles}>
			<span onClick={() => handleRemove(product)}>-</span>
			<p>{appData.symbol} {parseFloat(count.toFixed(2))}</p>
			<span onClick={() => addToCart(product)}>+</span>
		</button>
  );
}

export default BadgeButton