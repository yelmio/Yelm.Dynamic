import dynamic from "next/dynamic"
import { useState, useEffect } from "react";
import { useCycle } from 'framer-motion';
const Navigation = dynamic(() => import("../components/molecules/Navigation"))
const Cart = dynamic(() => import("../components/molecules/Cart"))
const BurgerMenu = dynamic(() => import("../components/molecules/BurgerMenu"))


const Default = ({children}) => {
  const size = useWindowSize();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="layout">
      <aside>
        <Navigation />
        {/* { size.width <= 1366 ? <BurgerMenu isOpen={isOpen} toggleOpen={toggleOpen} /> : <Navigation /> } */}
      </aside>
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

