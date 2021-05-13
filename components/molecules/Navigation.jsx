import Link from "../atoms/Link"
import { useRouter } from "next/router"
import { useState, useContext } from "react"
import AppContext from "../../context/appProvider"
import { CartContext }  from "../../context/CartProvider"

const Navigation = () => {
	const appData = useContext(AppContext)
	const CartData = useContext(CartContext)
	const popup = CartData.popup.popup
	const setPopup = CartData.popup.setPopup

	const [links, setLinks] = useState([
		{ id: 1, path: "/", name: "Новости" },
		{ id: 2, path: "/items", name: "Товары" },
		{ id: 3, path: "/about", name: "О нас" },
		{ id: 4, path: "/contacts", name: "Контакты" },
		{ id: 5, path: "/shops", name: "Магазины" }
	])
	
	const [selected, setSelected] = useState(0)

	const router = useRouter()

	const linkStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

	const handleChange = index => {
		setSelected(index);
		if (popup) {
			setPopup(!popup);
		}
	}

	return (
		<nav className="navigation">
			<ul className="navigation__list">
				{links.map((link, index) => {
				return (
					<li
						key={index}
						className={ router.pathname == link.path ? `navigation__item selected-${link.id}` : "navigation__item" }
						onClick={() => handleChange(index)}
					>
						<Link link={ link.path } name={ link.name }/>
						<div className="navigation__marker" style={linkStyles}></div>
					</li>
				);
			})}
			</ul>
		</nav>
	)
}

export default Navigation