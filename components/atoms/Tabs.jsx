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
						<a style={ index === selected ? { borderBottom: `2px solid #333333`, opacity: 1, color: "#333333" ? `#333333` : "#333333",
					} : {borderBottom: "2px solid #FFFFFF", color: "#333333" ? `#333333` : "#333333",}}>{tab.name}</a>
					</li>
				);
			})}
		</ul>
  );
}

export default Tabs