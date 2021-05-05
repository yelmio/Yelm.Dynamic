import { useContext } from "react"
import Image from "next/image"
import AppContext from "../../context/appProvider"
import dynamic from "next/dynamic"

const Modal = dynamic(() => import("../atoms/Modal"))

const NewsCard = ({title, description, image, setShowModal}) => {
  const appData = useContext(AppContext)

  const buttonsStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <div className="news-card">
      <Image className="news-card__image" src={ image } alt="Изображение новости" width={378} height={246} />
      <h3 className="news-card__title">{title}</h3>
      <p className="news-card__description">{description}</p>
      <button className="btn btn_medium" style={buttonsStyles} onClick={handleClick}>Читать</button>
    </div>
  )
}

export default NewsCard