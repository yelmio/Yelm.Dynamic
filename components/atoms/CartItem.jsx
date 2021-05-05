import Image from "next/image"

const CartItem = ({product, index, handleRemove}) => {
	return (
		<div className="cart-item">
			<Image className="cart-item__img" src={product.preview_image} width="100" height="100"/>
			<div className="cart-item__description">
				<h4>{product.name}</h4>
				<span className="cart-item__unit" >16 шт</span>
				<div className="cart-item__price">
					<span>{product.price} руб.</span>
				</div>
				<img className="cart-item__close" src="/icons/cross.png" width="10" height="10" onClick={() => handleRemove(index)}/>
			</div>
		</div>
	)
}

export default CartItem