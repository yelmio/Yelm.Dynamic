import Head from "next/head"
import dynamic from "next/dynamic"
import { useState } from 'react'

const NewsCard = dynamic(() => import("../components/molecules/NewsCard"))

const Home = () => {
  const [news, setNews] = useState([
    { id: 0, title: "Новость", description: "Новость овость овость овость овост овость овостьовость овостьовость новость новость" }
  ])
  return (
    <>
      <Head>
        <title>Новости | Yelm</title>
      </Head>
      <section className="news">
        {
          news.map((e) => (
            <NewsCard key={ e.id } description={ e.description } title={ e.title } image={ e.image }></NewsCard>
          ))
        }
      </section>
    </>
  )
}

export default Home
