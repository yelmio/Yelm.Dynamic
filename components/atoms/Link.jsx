import { useContext } from "react";
import Link from "next/link"
import AppContext from "../../context/appProvider"

const Route = ({link, name}) => {
	const appData = useContext(AppContext)

	const linkStyles = {
		color: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

	return (
		<Link href={link}>
				<a className="navigation__item" style={linkStyles}>{name}</a>
		</Link>
	) 
}

export default Route