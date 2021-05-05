import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react"
import AppContext from "../../context/appProvider"
import dynamic from "next/dynamic"

const CartItem = dynamic(() => import("../atoms/CartItem"))

const PopupCart = ({ showPopup }) => {
	const appData = useContext(AppContext)

  const buttonsStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

	return (
		<AnimatePresence>
			{showPopup && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="cart-popup"
				>
					<h3 className="cart-popup__title">В корзине 6 товаров на 16 565 руб</h3>
					<CartItem />
					<CartItem />
					<button className="btn btn_medium" style={buttonsStyles}>Перейти в корзину</button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default PopupCart