import Head from "next/head"
import dynamic from "next/dynamic"
import { useState } from "react"
import axios from "axios"

const ItemsCard = dynamic(() => import("../components/molecules/ItemsCard"))
const Tabs = dynamic(() => import("../components/atoms/Tabs"))
const Modal = dynamic(() => import("../components/atoms/Modal"))
const Pagination = dynamic(() => import("../components/atoms/Pagination"))


const Items = ({ items, error }) => { 
	
	const goods = items.map((item, key) =>
		item.items
	);

  const [showModal, setShowModal] = useState({
    showing: false,
    data: {},
    modalType: null,
  });

	const [panel, setPanel] = useState(0)
	const [page, setPage] = useState(1);

	const updateData = (value) => {
		setPanel(value)
	}

	return (
		<>
			<Head>
				<title>Товары | Yelm</title>
			</Head>
			<section className="items">
				<Tabs items={items} updateData={updateData}/>
				<div className="items__wrapper">
					{
						goods[panel].map((e) => (
							<ItemsCard key={ e.id } title={ e.name } product={e} price={e.price} image={ e.preview_image } item={e} setShowModal={setShowModal}></ItemsCard>
						))
					}
				</div>
				<Pagination value={page} range={33} onChange={setPage}/>
      </section>
      <Modal setShowModal={setShowModal} showModal={showModal}/>
		</>
	)
}

export const getServerSideProps = async () => {
	try {
		const response = await axios.get("https://dev.yelm.io/api/mobile/items", {
			 params: {
				version: 3,
				language_code: "ru",
				region_code: "RU",
				platform: "5fd33466e17963.29052139",
				lat: 0,
				lon: 0
			 }
		 })
		 const items = response.data
		 return { props: { items } }
	 } catch (error) {
		 return { props: {error} }
	 }
}

export default Items