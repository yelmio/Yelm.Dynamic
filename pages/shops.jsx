import Head from "next/head"
import { useState, useContext } from "react"
import { YMaps, Map, Placemark, Polygon } from "react-yandex-maps"
import axios from "axios"
import AppContext from "../context/appProvider"
import Image from "next/image"

const Shops = ({ polygons, error }) => {
  const appData = useContext(AppContext)
  console.log(appData)
  console.log(polygons, 'полигоны')

  const linkStyles = {
		background: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  // https://yandex.com/dev/maps/jsbox/2.1/circle

  const [mapOptions, setMapOptions] = useState({
    zoom: 8, 
    bounds: [[ 55.50090388956289, 37.18227742968749 ], [ 55.99662016956414, 38.06118367968748 ]], 
    controls: ['zoomControl'],
    polygonsOptions: {
      fillColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
      strokeColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
      opacity: 0.5,
      strokeWidth: 1,
      strokeStyle: 'shortdash',
    },
    polygonsData: polygons.length ? polygons.map((e, index) => {
      return {
        id: index,
        polygons: [e.polygons[0].points[0]],
        shop: [parseFloat(e.shop.latitude), parseFloat(e.shop.longitude)],
        about: {
          name: e.shop.name,
          address: e.shop.address,
          description: e.shop.description ? e.shop.description : '',
          website: e.shop.website ? e.shop.website : "Тут может быть ссылка на ваш ресурс",
        }
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
      {
        mapOptions.polygonsData.map(e => (
          <div className="shops__about" key={e.id}>
            
            <div>
              <Image src="/icons/refresh.svg" height={26} width={18} />
              <p>
                {e.about.name}
              </p>
            </div>
            <div>
              <Image src="/icons/refresh.svg" height={26} width={18} />
              <p>
                {e.about.address}
              </p>
            </div>
            <div>
              <Image src="/icons/refresh.svg" height={26} width={18} />
              <p>
                {e.about.description}
              </p>
            </div>
            <a href={e.about.website} target="_blank" style={linkStyles}>Website</a>
          </div>
        ))
      }
      
    </section>
  </>
  )
}

export const getServerSideProps = async () => {
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