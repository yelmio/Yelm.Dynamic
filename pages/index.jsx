import { useContext } from "react";
import AppContext from "../context/appProvider";

const Home = ({}) => {
  const appData = useContext(AppContext)

  const buttonsStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  return (
    <section className="home">
      <h1 className="home__title">Новый дом на Патриарших прудах - Class Delux</h1>
      <p className="home__description">Квартиры с отделкой 106-222 м². Легендарная историческая локация Патриаршие пруды. Безукоризненные планировочные решения. Рядом элитные школы, детские сады и торговый центр.</p>
      <div className="home__actions">
        <button className="btn btn_medium" style={buttonsStyles}>Каталог</button>
        <button className="btn btn_medium">Наши новости</button>
      </div>
    </section>
  )
}

export default Home