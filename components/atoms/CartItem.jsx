import Image from "next/image"

const CartItem = () => {
	return (
		<div className="cart-item">
			<Image className="cart-item__img" src="/cart-item_test.png" width="100" height="100"/>
			<div className="cart-item__description">
				<h4>Крем от отеков для век 14мл</h4>
				<span className="cart-item__unit" >16 шт</span>
				<div className="cart-item__price">
					<span>1 989 руб.</span>
				</div>
				<img className="cart-item__close" src="/icons/cross.png" width="10" height="10"/>
			</div>
		</div>
	)
}

export default CartItem