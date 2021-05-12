import '../styles/globals.scss';
import 'swiper/swiper.scss';
import Head from "next/head";
import { LazyMotion, m, domAnimation, AnimatePresence } from "framer-motion"
import Default from "../layouts/Default"
import axios from "axios"
import { useState } from "react"
import { AppProvider } from "../context/appProvider"
import { CartProvider } from "../context/CartProvider"

const MyApp = ({ Component, pageProps, router, data, showPopup, setShowPopup }) => {

  const [appData, setAppData] = useState(data)

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

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <AppProvider value={appData}>
        <CartProvider>
          <Default>
            <AnimatePresence initial={false} exitBeforeEnter>
              <LazyMotion features={domAnimation}>
                <m.div
                  key={router.route}
                  variants={variants} 
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    opacity: { duration: 0.3 }, y: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <Component {...pageProps} key={router.route}/>
                </m.div>
              </LazyMotion>
            </AnimatePresence>
          </Default>
        </CartProvider>
      </AppProvider>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
const response = await axios.get("https://dev.yelm.io/api/mobile/application", {
    params: {
    language_code: "ru",
    region_code: "RU",
    platform: "5fd33466e17963.29052139"
    }
  })
  const data = response.data
  return { data: data}
}

export default MyApp

