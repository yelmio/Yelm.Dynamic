import Head from "next/head"
import dynamic from "next/dynamic"
import { useState, useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Image from "next/image"
import AppContext from "../context/appProvider"
import axios from "axios"
SwiperCore.use([Navigation]);

const NewsCard = dynamic(() => import("../components/molecules/NewsCard"))

const Home = ({data}) => {
  const appData = useContext(AppContext)

  const [news, setNews] = useState(data);

  const buttonsStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

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
        <div className="swiper-button-prev" style={buttonsStyles}>
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
        <div className="swiper-button-next" style={buttonsStyles}>
          <Image src="/icons/vector.svg" height={16} width={10} />
        </div>
      </section>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
   const response = await axios.get("https://dev.yelm.io/api/mobile/all-news", {
      params: {
        version: 3,
				language_code: "ru",
				region_code: "RU",
				platform: "5fd33466e17963.29052139",
      }
    })
    const data = response.data
    console.log(data)
    return { props: { data } }
  } catch (error) {
    return { props: { error } }
  }
}

export default Home

