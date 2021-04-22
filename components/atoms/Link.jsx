import Link from "next/link"

const Route = ({link, name}) => {
	return (
		<Link href={link}>
				<a>{name}</a>
		</Link>
	) 
}

export default Route