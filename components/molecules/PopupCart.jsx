import Link from "../atoms/Link"
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react"
import AppContext from "../../context/appProvider"
import dynamic from "next/dynamic"
import { useCart, useDispatchCart } from "../../context/CartProvider"

const CartItem = dynamic(() => import("../atoms/CartItem"))

const PopupCart = ({ showPopup }) => {
	const appData = useContext(AppContext)
	const items = useCart()
	const dispatch = useDispatchCart()
	const totalPrice = items.reduce((total, b) => total+ b.price , 0);

	// console.log(items);

	const handleRemove = index => {
		dispatch({type: "DELETE", index})
	}

  const buttonsStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

	if (items.length === 0) {
		return (
			<AnimatePresence>
			{showPopup && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="cart-popup"
				>
					<h3 className="cart-popup__title cart-popup__empty">В корзине пусто</h3>
					<a href="/shopping-cart">
						<button className="btn btn_medium cart-popup__empty" style={buttonsStyles}>Перейти в корзину</button>
					</a>
				</motion.div>
			)}
		</AnimatePresence>
		)
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
					<h3 className="cart-popup__title">В корзине { items.length } товаров на {parseFloat(totalPrice.toFixed(2))} руб</h3>
					{items.map((item, index) => (
						<CartItem key={index} product={item} index={index} handleRemove={handleRemove}/>
					))}
					<a href="/shopping-cart">
						<button className="btn btn_medium" style={buttonsStyles}>Перейти в корзину</button>
					</a>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default PopupCart