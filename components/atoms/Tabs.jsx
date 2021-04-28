import { useState } from 'react'

const Tabs = (props) => {

	const [tabs, setTabs] = useState([
		{ id: 0, title: "All"},
		{ id: 1, title: "Table"},
		{ id: 2, title: "Sofa"},
		{ id: 3, title: "Chair"},
		{ id: 4, title: "Lightning"},
	])

	const [selected, setSelected] = useState(0)

	const handleChange = index => {
		setSelected(index);
	}

  return (
		<ul className="tabs">
			{tabs.map((tab, index) => {
				let style = index === selected ? "tabs__item selected" : "tabs__item";
				return (
					<li
						key={index}
						className={ style }
						onClick={() => handleChange(index)}
					>
						<a>{tab.title}</a>
					</li>
				);
			})}
		</ul>
  );
}

export default Tabs