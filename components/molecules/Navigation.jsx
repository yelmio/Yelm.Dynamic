import Link from "../atoms/Link"
import { useRouter } from "next/router"
import { useState, useContext } from "react"

const Navigation = () => {

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
		backgroundColor: "#333333",
	}

	const handleChange = index => {
		setSelected(index);
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