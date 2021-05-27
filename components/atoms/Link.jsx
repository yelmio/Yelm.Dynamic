import { useContext } from "react";
import Link from "next/link"

const Route = ({link, name}) => {

	const linkStyles = {
		color: "#333333",
	}

	return (
		<Link href={link}>
			<a className="navigation__item" style={linkStyles}>{name}</a>
		</Link>
	) 
}

export default Route