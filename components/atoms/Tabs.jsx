import { useState, useContext } from 'react'
import AppContext from "../../context/appProvider"

const Tabs = (props) => {
	const appData = useContext(AppContext)

	const [selected, setSelected] = useState(0)

	const handleChange = index => {
		setSelected(index);
		props.updateData(index);
	}

  return (
		<ul className="tabs">
			{props.items.map((tab, index) => {
				return (
					<li
						key={index}
						className="tabs__item"
						onClick={() => handleChange(index)}
					>
						<a style={ index === selected ? { borderBottom: `2px solid #${appData.settings.theme}`, opacity: 1, color: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
					} : {borderBottom: "2px solid #FFFFFF", color: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",}}>{tab.name}</a>
					</li>
				);
			})}
		</ul>
  );
}

export default Tabs