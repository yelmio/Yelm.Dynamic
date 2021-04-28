import Head from "next/head"
import dynamic from "next/dynamic"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Image from "next/image"
SwiperCore.use([Navigation]);

const NewsCard = dynamic(() => import("../components/molecules/NewsCard"))

const Home = () => {

  const [news, setNews] = useState([
    { id: 0, title: "Новость", description: "Новость овость овость овость овост овость овостьовость овостьовость новость новость" },
    { id: 1, title: "Товар", description: "Новость овость овость овость овост овость овостьовость овостьовость новость новость" },
    { id: 2, title: "Товар", description: "Новость овость овость овость овост овость овостьовость овостьовость новость новость" },
    { id: 3, title: "Товар", description: "Новость овость овость овость овост овость овостьовость овостьовость новость новость" },
  ]);

  const navigation = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };

  return (
    <>
      <Head>
        <title>Новости | Yelm</title>
      </Head>
      <section className="news">
        <div className="swiper-button-prev">
          <Image src="/icons/vector.svg" height={16} width={10} />
        </div>
        <Swiper 
          slidesPerView={3}
          wrapperTag="ul"
          loop="true"
          navigation={navigation}
        >
        {
          news.map((e) => (
            <SwiperSlide key={ e.id } tag="li">
              <NewsCard description={ e.description } title={ e.title } image={ e.image }></NewsCard>
            </SwiperSlide>
          ))
        }
        </Swiper>
        <div className="swiper-button-next">
          <Image src="/icons/vector.svg" height={16} width={10} />
        </div>
      </section>
    </>
  )
}

export default Home