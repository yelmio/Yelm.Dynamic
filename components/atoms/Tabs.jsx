import { useState } from 'react'

const Tabs = (props) => {
	const [selected, setSelected] = useState(0)

	const handleChange = index => {
		setSelected(index);
		props.updateData(index);
	}

  return (
		<ul className="tabs">
			{props.items.map((tab, index) => {
				let style = index === selected ? "tabs__item selected" : "tabs__item";
				return (
					<li
						key={index}
						className={ style }
						onClick={() => handleChange(index)}
					>
						<a>{tab.name}</a>
					</li>
				);
			})}
		</ul>
  );
}

export default Tabs