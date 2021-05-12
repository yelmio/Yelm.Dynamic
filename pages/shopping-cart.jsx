import Head from "next/head"
import { useContext } from 'react'
import AppContext from "../context/appProvider"
import Image from "next/image"

const ShoppingCart = () => {
  const appData = useContext(AppContext)

  const priceStyles = {
		color: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}
  const badgeStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  return (
  <>
    <Head>
      <title>Корзина| Yelm</title>
    </Head>
    <section className="shopping-cart">
      <div className="shopping-cart__header">
        <h1>В вашей корзине 7 товаров на сумму:</h1>
        <span style={priceStyles}>14 000 руб.</span>
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
          <tr>
            <td className="shopping-cart__item">
              <Image src="/images/cart-item_test.png" width="100" height="100"/>
              <div className="shopping-cart__description">
                <h4>Футболка белая с принтом</h4>
                <span className="shopping-cart__unit" style={priceStyles}>42 RU</span>
                <span className="shopping-cart__number">Артикул: 7902038724</span>
              </div>
            </td>
            <td>1 000 руб.</td>
            <td>
              <button className="btn_badge" style={badgeStyles}>
                <span>-</span>
                <p>2</p>
                <span>+</span>
              </button>
            </td>
            <td>1 000 руб.</td>
            <td>
              <img className="shopping-cart__close" src="/icons/cross.png" width="20" height="20" />
            </td>
          </tr>
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
            <span style={priceStyles}>14 000 руб.</span>
          </div>
          <button className="btn btn_medium" style={badgeStyles}>Перейти к оформлению</button>
        </div>
      </div>
    </section>
  </>
  )
}

export default ShoppingCart