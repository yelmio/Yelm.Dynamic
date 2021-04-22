import '../styles/globals.scss'
import Default from "../layouts/default"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Default>
       <Component {...pageProps} /> 
    </Default>
  )
}

export default MyApp

