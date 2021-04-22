import Link from "../atoms/Link"

const Navigation = () => {
	return (
		<nav className="navigation">
				<Link link="/" name="Главная"/>
				<Link link="/items" name="Товары"/>
		</nav>
	)
}

export default Navigation