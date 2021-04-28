import Link from "../atoms/Link"
import { useState } from "react"

const Navigation = () => {
	const [links, setLinks] = useState([
		{ id: 1, path: "/", name: "Новости" },
		{ id: 2, path: "/items", name: "Товары" },
		{ id: 3, path: "/about-us", name: "О нас" },
		{ id: 4, path: "/contacts", name: "Контакты" },
		{ id: 5, path: "/test", name: "Магазин" }
	])
	
	const [selected, setSelected] = useState(0)

	const handleChange = index => {
		setSelected(index);
	}

	return (
		<nav className="navigation">
			<ul className="navigation__list">
				{links.map((link, index) => {
				let style = index === selected ? `navigation__item selected-${link.id}` : "navigation__item";
				return (
					<li
						key={index}
						className={ style }
						onClick={() => handleChange(index)}
					>
						<Link link={ link.path } name={ link.name }/>
					</li>
				);
			})}
			</ul>
		</nav>
	)
}

export default Navigation