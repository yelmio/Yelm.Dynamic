import Link from "../atoms/Link"
import { useRouter } from "next/router"
import { useState, useContext } from "react"
import { CartContext }  from "../../context/CartProvider"

const NavigationResp = () => {
	const CartData = useContext(CartContext)
	const popup = CartData.popup.popup
	const setPopup = CartData.popup.setPopup

	const [links, setLinks] = useState([
		{ id: 1, path: "/", name: "Главная" },
    { id: 2, path: "/news", name: "Новости" },
		{ id: 3, path: "/items", name: "Товары" },
		{ id: 4, path: "/contacts", name: "Контакты" },
		{ id: 5, path: "/shops", name: "Магазины" }
	])

	const [selected, setSelected] = useState(0)
	const router = useRouter()

	const handleChange = () => {
		if (popup) {
			setPopup(!popup);
		}
	}

	return (
		<nav className="navigation-resp">
			<ul className="navigation-resp__list">
				{links.map((link, index) => { 
					return (
						<li key={index} onClick={() => handleChange(index)} className={ router.pathname == link.path ? `navigation-resp__item selected-${link.id}` : "navigation-resp__item" }>
							<Link link={ link.path } name={ link.name }/>
						</li>
					)
				 })}
			</ul>
		</nav>
	)
}

export default NavigationResp