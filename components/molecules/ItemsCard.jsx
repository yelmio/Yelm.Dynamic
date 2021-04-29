import dynamic from "next/dynamic"
import Image from "next/image"
import { m } from "framer-motion"

const BadgeButton = dynamic(() => import("../atoms/BadgeButton"))

const ItemsCard = ({title, price, image}) => {
  return (
    <m.div className="items-card" whileHover={{scale: 1.05, transition: "0.5s"}}>
      <Image className="items-card__image" src="/goods-test.png" alt="Изображение товара" width={268}
  height={268}/>
      <h3 className="items-card__title">{title}</h3>
      <BadgeButton price={price}/>
    </m.div>
  )
}

export default ItemsCard