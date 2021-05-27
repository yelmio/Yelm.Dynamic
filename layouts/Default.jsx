import dynamic from "next/dynamic"
import { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router'
import AppContext from "../context/appProvider";
const Navigation = dynamic(() => import("../components/molecules/Navigation"))
const NavigationResp = dynamic(() => import("../components/molecules/NavigationResp"))
const Cart = dynamic(() => import("../components/molecules/Cart"))

const Default = ({children}) => {
  const size = useWindowSize();
  const appData = useContext(AppContext);
  const router = useRouter();

  const style = {
    background: router.pathname === "/" ? `#${appData.settings.theme}` : "#FFFFFF"
  }

  console.log(router.pathname)

  return (
    <div className="layout" style={style}>
      { size.width <= 1440 ? 
        <NavigationResp /> 
        : 
        <aside>
          <Navigation />
        </aside>
      }
      <header>
        <Cart/>
      </header>
      <main className="container">
        { children }
      </main>
    </div>
  )
}

const useWindowSize = () => {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
}

export default Default

