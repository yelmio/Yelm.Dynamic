import Head from "next/head"
import { useState } from "react"
import { YMaps, Map, Placemark, Polygon } from "react-yandex-maps"
import axios from "axios"

const Shops = ({ polygons, error }) => {

  const [mapOptions, setMapOptions] = useState({
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
    polygonsData: polygons.length ? polygons.map((e, index) => {
      return {
        id: index,
        polygons: [e.polygons[0].points[0]],
        shop: [parseFloat(e.shop.latitude), parseFloat(e.shop.longitude)]
      }
    }) : '',
  })

  return (
  <>
    <Head>
      <title>Магазины | Yelm</title>
    </Head>
    <section className="shops">
      <YMaps>
        <Map state={{ center: mapOptions.shopMarker, zoom: mapOptions.zoom, bounds: mapOptions.bounds }} className="shops__map">
          {
            mapOptions.polygonsData.map(e => (
              <Placemark defaultGeometry={ e.shop } key={ e.id }/>
            ))
          }
          {
            mapOptions.polygonsData.map(e => (
              <Polygon options={ mapOptions.polygonsOptions } geometry={ e.polygons } key={ e.id }/>
            ))
          }
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
    return { props: { error } }
  }
}

export default Shops