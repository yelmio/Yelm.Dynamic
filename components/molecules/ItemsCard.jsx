import dynamic from "next/dynamic"
import Image from "next/image"

const BadgeButton = dynamic(() => import("../atoms/BadgeButton"))

const ItemsCard = ({title, price, image}) => {
  return (
    <div className="items-card">
      <Image className="items-card__image" src="/goods-test.png" alt="Изображение товара" width={268}
  height={268}/>
      <h3 className="items-card__title">{title}</h3>
      <BadgeButton price={price}/>
    </div>
  )
}

export default ItemsCard