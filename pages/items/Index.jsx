import Head from "next/head"

export const getStaticProps = async () => {
	const response = await fetch()
	const data = await response.json()

	return {
		props: { items: data }
	}
}

export default function Items({ items }) {
	return (
		<>
			<Head>
				<title>Товары | Yelm</title>
			</Head>
			<section className="items">
				<div className="items__wrapper">
					Товары будут тут
				</div>
			</section>
		</>
	)
}