import Link from "../atoms/Link"
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react"
import AppContext from "../../context/appProvider"
import dynamic from "next/dynamic"
import { CartContext }  from "../../context/CartProvider"

const CartItem = dynamic(() => import("../atoms/CartItem"))

const PopupCart = () => {
	const appData = useContext(AppContext)
  const CartData = useContext(CartContext)
	const items = CartData.cart.state
	const dispatch = CartData.cart.dispatch
	const totalPrice = items.reduce((total, b) => total+ b.price , 0);
  const popup = CartData.popup.popup
	const setPopup = CartData.popup.setPopup
 
	const handleRemove = index => {
		let count = items.length;
		dispatch({type: "DELETE", index})
		count -= 1
		if (count === 0) {
			setPopup(!popup);
		}		
	}

  const buttonsStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

	if (items.length === 0) {
		return (
			<AnimatePresence>
			{popup && (
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
			{popup && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="cart-popup"
				>
					<h3 className="cart-popup__title">В корзине { items.length } товаров на {parseFloat(totalPrice.toFixed(2))} руб</h3>
					{items.map((item, index) => (
						<CartItem key={index} product={item} index={index} handleRemove={handleRemove} items={items}/>
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