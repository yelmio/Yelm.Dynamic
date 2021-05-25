import Head from "next/head"
import Image from "next/image"
import { useContext } from 'react'
import AppContext from "../context/appProvider"
import { CartContext }  from "../context/CartProvider"
import CrossIcon from "../components/atoms/icons/CrossIcon";

const ShoppingCart = () => {
  const appData = useContext(AppContext)
  const CartData = useContext(CartContext)
	const items = CartData.cart.state
	const dispatch = CartData.cart.dispatch

  const totalPrice = items.reduce((total, b) => total + b.price * b.quantity, 0);
	const totalAmount = items.reduce((total, b) => total + b.quantity, 0)

  const priceStyles = {
		color: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}
  const badgeStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  const removeItem = item => {
		dispatch({type: "DELETE_ITEM", item})
	}

  const handleRemove = index => {
    console.log("Fafa");
		dispatch({type: "DELETE", index})		
	}

	const addItem = (item) => {
		dispatch({type: "ADD", item})
  }

  return (
  <>
    <Head>
      <title>Корзина| Yelm</title>
    </Head>
    <section className="shopping-cart">
      <div className="shopping-cart__header">
        <h1>В вашей корзине { totalAmount } товаров на сумму:</h1>
        <span style={priceStyles}>{parseFloat(totalPrice.toFixed(2))} руб.</span>
      </div>
      <table className="shopping-cart__table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Всего к оплате</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td className="shopping-cart__item">
              <Image src={item.preview_image} width="100" height="100"/>
              <div className="shopping-cart__description">
                <h4>{item.name}</h4>
                <span className="shopping-cart__unit" style={priceStyles}>{item.type}</span>
                <span className="shopping-cart__number">Артикул: {item.specification[0].value}</span>
              </div>
            </td>
            <td>{item.price} руб.</td>
            <td>
              <button className="btn_badge" style={badgeStyles}>
                <span onClick={() => removeItem(item)}>-</span>
                <p>{item.quantity}</p>
                <span onClick={() => addItem(item)}>+</span>
              </button>
            </td>
            <td>{parseFloat((item.quantity * item.price).toFixed(2))} руб.</td>
            <td>
              <button onClick={() => handleRemove(index)} className="shopping-cart__delete">
                <CrossIcon width={20} height={20} fill="#121212" stroke="#121212" />
              </button> 
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <div className="shopping-cart__footer">
        <div className="shopping-cart__promocode">
          <h3>Промокод</h3>
          <form className="shopping-cart__promocode-form">
            <input type="text" placeholder="Введите промокод"/>
            <button className="btn btn_round" style={badgeStyles}>
                <Image src="/icons/vector.svg" height={16} width={10} />
            </button>
          </form>
        </div>
        <div className="shopping-cart__total">
          <div className="shopping-cart__total-price">
            <span>Итого:</span>
            <span style={priceStyles}>{parseFloat(totalPrice.toFixed(2))} руб.</span>
          </div>
          <button className="btn btn_medium" style={badgeStyles}>Перейти к оформлению</button>
        </div>
      </div>
    </section>
  </>
  )
}

export default ShoppingCart