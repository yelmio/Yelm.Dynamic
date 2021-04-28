import Image from "next/image"

const NewsCard = ({title, description, image}) => {
  return (
    <div className="news-card">
      <Image className="news-card__image" src="/images/test.png" alt="Изображение новости" width={378} height={246} />
      <h3 className="news-card__title">{title}</h3>
      <p className="news-card__description">{description}</p>
      <button className="btn btn_medium">Читать</button>
    </div>
  )
}

export default NewsCard