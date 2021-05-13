import { useContext } from "react"
import Image from "next/image"
import AppContext from "../../context/appProvider"
import dayjs from "dayjs";
import "dayjs/locale/ru";

const NewsCard = ({title, description, image, date, setShowModal}) => {

  const appData = useContext(AppContext)

  const buttonsStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  const descriptionReplaced = description.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, " ")


  const handleClick = () => {
    setShowModal({
      showing: true, 
        modalType: "news",
      data: {
        image: image,
        title: title,
        description: descriptionReplaced,
        date: date
      },
    })
  }

  return (
    <div className="news-card">
      <Image className="news-card__image" src={ image } alt="Изображение новости" width={378} height={246} />
      <h3 className="news-card__title">{title}</h3>
      <p className="news-card__description">{descriptionReplaced}</p>
      <footer className="news-card__footer">
        <button className="btn btn_medium" style={buttonsStyles} onClick={handleClick}>Читать</button>
        <span className="news-card__date">{ dayjs(date).locale("ru").format('DD MMM YYYY') }</span>
      </footer>
      
    </div>
  )
}

export default NewsCard