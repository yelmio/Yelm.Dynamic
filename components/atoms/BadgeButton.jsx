import { useState, useContext } from "react";
import AppContext from "../../context/appProvider"
import { useDispatchCart } from "../../context/CartProvider"

const BadgeButton = ({price, product}) => {
	const appData = useContext(AppContext)
  const [count, setCount] = useState(price)

	const dispatch = useDispatchCart()

	const handleRemove = index => {
		dispatch({type: "DELETE", index})
	}

	const addToCart = (item) => {
		dispatch({type: "ADD", item})
  }

	const badgeStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  return (
		<button className="btn_badge" style={badgeStyles}>
			<span onClick={() => handleRemove(product)}>-</span>
			<p>$ {parseFloat(count.toFixed(2))}</p>
			<span onClick={() => addToCart(product)}>+</span>
		</button>
  );
}

export default BadgeButton