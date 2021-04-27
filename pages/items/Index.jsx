import Head from "next/head"
import dynamic from "next/dynamic"
import { useState } from 'react'

const ItemsCard = dynamic(() => import("../../components/molecules/ItemsCard"))

// export const getStaticProps = async () => {
// 	const response = await fetch()
// 	const data = await response.json()

// 	return {
// 		props: { items: data }
// 	}

// }

export default function Items() { // Items({items})

	const [items, setGoods] = useState([
    { id: 0, title: "Bx Wooden Table", price: 200},
  ])

	return (
		<>
			<Head>
				<title>Товары | Yelm</title>
			</Head>
			<section className="items">
				<div className="items__wrapper">
					{
						items.map((e) => (
							<ItemsCard key={ e.id } title={ e.title } price={e.price} image={ e.image }></ItemsCard>
						))
					}
				</div>
      </section>
		</>
	)
}