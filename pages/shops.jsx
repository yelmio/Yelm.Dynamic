import Head from "next/head"
import { useState } from "react"
import { YMaps, Map, Placemark, Polygon } from "react-yandex-maps"
import axios from "axios"

const Shops = ({ polygons, error }) => {

  const [mapOptions, setMapOptions] = useState({
    center: [55.749552744318315, 37.62173055468749], 
    zoom: 8, 
    bounds: [[ 55.50090388956289, 37.18227742968749 ], [ 55.99662016956414, 38.06118367968748 ]], 
    controls: ['zoomControl'],
    polygonsOptions: {
      fillColor: '#0A84FF',
      strokeColor: '#0A84FF',
      opacity: 0.5,
      strokeWidth: 1,
      strokeStyle: 'shortdash',
    },
  })

  console.log(polygons, error)

  return (
  <>
    <Head>
      <title>Магазины | Yelm</title>
    </Head>
    <section className="shops">
      <YMaps>
        <Map state={{ center: mapOptions.center, zoom: mapOptions.zoom, bounds: mapOptions.bounds }} className="shops__map">
          <Placemark defaultGeometry={[55.751574, 37.573856]} />
        </Map>
      </YMaps>
    </section>
  </>
  )
}

export const getStaticProps = async () => {
  try {
   const response = await axios.get("https://rest.yelm.io/api/mobile/polygons", {
      params: {
        platform: "5fd33466e17963.29052139"
      }
    })
    const polygons = response.data
    return { props: { polygons } }
  } catch (error) {
    return { props: {error} }
  }
}

export default Shops