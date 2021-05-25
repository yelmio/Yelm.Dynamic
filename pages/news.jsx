import Head from "next/head"
import { AnimatePresence, m } from "framer-motion";
import dynamic from "next/dynamic"
import { useState, useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Image from "next/image"
import AppContext from "../context/appProvider"
import axios from "axios"

SwiperCore.use([Navigation]);

const NewsCard = dynamic(() => import("../components/molecules/NewsCard"))
const Modal = dynamic(() => import("../components/atoms/Modal"))

const News = ({data}) => {
  const appData = useContext(AppContext);

  const variants = {
    enter: () => {
      return {
        zIndex: 0,
        y: -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: () => {
      return {
        zIndex: 0,
        y: 1000,
        opacity: 0
      };
    }
  }

  const [news, setNews] = useState(data);

  const [showModal, setShowModal] = useState({
    showing: false,
    data: {},
    modalType: null,
  });

  const [showAll, setShowAll] = useState(false)

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
        {
          !showAll && 
          <div className="news__show-top">
            <h1>Последние новости</h1>
            <div className="news__main">
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
                    <NewsCard description={ e.description } title={ e.title } image={ e.image } date={ e.publication } setShowModal={setShowModal}></NewsCard>
                  </SwiperSlide>
                ))
              }
              </Swiper>
              <div className="swiper-button-next" style={buttonsStyles}>
                <Image src="/icons/vector.svg" height={16} width={10} />
              </div>
            </div>
            <span onClick={() => setShowAll(true)}>Смотреть все</span>
          </div>
        }
        {
          showAll && 
          <AnimatePresence exitBeforeEnter>
            {
              <m.div className="news__show-all"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.3 }, y: { type: "spring", stiffness: 300, damping: 20 },
                }}>
                  <div className="news__show-all-header">
                    <button className="btn btn_round" onClick={() => setShowAll(false)} style={buttonsStyles}>
                      <Image src="/icons/vector.svg" height={16} width={10} />
                    </button>
                    <h3>Все новости</h3>
                    <span>Фильтр</span>
                  </div>
                  <div className="news__show-all-content">
                    {
                      news.map((e) => (
                        <NewsCard key={e.id} description={ e.description } title={ e.title } image={ e.image } date={ e.publication } setShowModal={setShowModal}></NewsCard>
                      ))
                    }
                  </div>
              </m.div>
            }
          </AnimatePresence>
        }
      </section>
      <Modal setShowModal={setShowModal} showModal={showModal}/>
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
    return { props: { data } }
  } catch (error) {
    return { props: { error } }
  }
}

export default News

