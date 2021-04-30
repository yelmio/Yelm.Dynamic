import Link from "../atoms/Link"
import { useState } from "react"
import { motion, useCycle } from 'framer-motion';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    },
    zIndex: 1000
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    },
    zIndex: 1
  }
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsmenu = {
  open: {
    y: 0,
    opacity: 1,
    display: 'flex',
    zIndex: 1000,
    pointerEvents: 'all',
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    zIndex: 1000,
    display: 'flex',
    pointerEvents: 'none',
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
};

const BurgerMenu = ({ isOpen, toggleOpen }) => {

	const [links, setLinks] = useState([
		{ id: 1, path: "/", name: "Новости", color: `#000`, icon: 'fas fa-briefcase' },
		{ id: 2, path: "/items", name: "Товары", color: `#D309E1`, icon: 'fas fa-browser' },
		{ id: 3, path: "/about", name: "О нас", color: `#9C1AFF`, icon: 'fas fa-question' },
		{ id: 4, path: "/contacts", name: "Контакты", color: `#7700FF`, icon: 'fas fa-id-card' },
		{ id: 5, path: "/shops", name: "Магазины", color: `#4400FF`, icon: 'fas fa-file-invoice' }
	])

	return(
		<motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={'100vh'}
      className="NavMenu">
      <motion.div className="background" variants={sidebar} />
      <motion.ul variants={variants} className="burger__list">
        {links.map((item) => (
          <motion.li
            key={item.id}
            i={item.id}
						className="burger__item"
            variants={variantsmenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            
            <div className="textplaceholder">
              <Link link={ item.path } name={ item.name }/>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <button onClick={toggleOpen} className="btn-burger">
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
						className="burger-path"
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' }
            }}
          />
          <Path
						className="burger-path"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.2 }}
          />
          <Path
						className="burger-path"
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' }
            }}
          />
        </svg>
      </button>
    </motion.nav>
	)
}

export default BurgerMenu