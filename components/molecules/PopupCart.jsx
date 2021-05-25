import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react"
import AppContext from "../../context/appProvider"
import dynamic from "next/dynamic"
import { CartContext }  from "../../context/CartProvider"

const CartItem = dynamic(() => import("../atoms/CartItem"))

const PopupCart = () => {
	const appData = useContext(AppContext)
  const CartData = useContext(CartContext)
	const items = CartData.cart.state
	const dispatch = CartData.cart.dispatch

	const totalPrice = items.reduce((total, b) => total + b.price * b.quantity, 0);
	const totalAmount = items.reduce((total, b) => total + b.quantity, 0)
  const popup = CartData.popup.popup
	const setPopup = CartData.popup.setPopup

	const [elementsPerPage , setElementsPerPage] = useState(2)
	const [currentPage, setCurrentPage] = useState(0)
 
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

	return (
		<AnimatePresence>
			{popup && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="cart-popup">
					{items.length <= 0 && 
						<div>
							<h3 className="cart-popup__title cart-popup__empty">В корзине пусто</h3>
							<Link href="/shopping-cart">
								<button className="btn btn_medium" style={buttonsStyles} onClick={() => setPopup(!popup)}>Перейти в корзину</button>
							</Link>
						</div>
					}
					{items.length > 0 && 
						<div>
							<h3 className="cart-popup__title">В корзине { totalAmount } товаров на {parseFloat(totalPrice.toFixed(2))} руб</h3>
							{items.slice(currentPage*elementsPerPage, currentPage*elementsPerPage + elementsPerPage + 1).map((item, index) => (
								<CartItem key={index} product={item} index={index} handleRemove={handleRemove} items={items}/>
							))}
							<Link href="/shopping-cart">
								<button className="btn btn_medium" style={buttonsStyles} onClick={() => setPopup(!popup)}>Перейти в корзину</button>
							</Link>
						</div>
					} 
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default PopupCart