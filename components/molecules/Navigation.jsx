import Link from "../atoms/Link"
import { useState } from "react"

const Navigation = () => {
	const [links, setLinks] = useState([
		{ id: 0, path: "/", name: "Новости" },
		{ id: 1, path: "/items", name: "Товары" },
		{ id: 2, path: "/about-us", name: "О нас" },
		{ id: 3, path: "/contacts", name: "Контакты" }
	]) 

	return (
		<nav className="navigation">
			<ul className="navigation__list">
				{ 
					links.map(link => (
						<li className="navigation__item" key={ link.id }>
							<Link link={ link.path } name={ link.name }/>
						</li>
					)) 
				}
			</ul>
		</nav>
	)
}

export default Navigation