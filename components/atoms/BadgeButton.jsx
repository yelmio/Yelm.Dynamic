import { useState, useContext } from "react";
import AppContext from "../../context/appProvider"

const BadgeButton = ({price}) => {
	const appData = useContext(AppContext)
  const [count, setCount] = useState(price)

	const badgeStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  return (
		<div className="btn_badge" style={badgeStyles}>
			<span onClick={() => {setCount((count <= price) ? price : count - price)}}>-</span>
			<p>$ {parseFloat(count.toFixed(2))}</p>
			<span onClick={() => {setCount(count + price)}}>+</span>
		</div>
  );
}

export default BadgeButton