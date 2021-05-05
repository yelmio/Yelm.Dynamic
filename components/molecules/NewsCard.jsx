import { useContext } from "react"
import Image from "next/image"
import AppContext from "../../context/appProvider"

const NewsCard = ({title, description, image, date, setShowModal}) => {

  const appData = useContext(AppContext)

  const buttonsStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  const handleClick = () => {
    setShowModal({
      showing: true, 
      data: {
        image: image,
        title: title,
        description: description,
        date: date
      }
    })
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