import Link from "next/link"

const Route = ({link, name}) => {
	return (
		<Link href={link}>
				<a className="navigation__item">{name}</a>
		</Link>
	) 
}

export default Route