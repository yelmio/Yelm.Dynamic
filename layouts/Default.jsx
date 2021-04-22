import Navigations from "../components/molecules/Navigations"

const Default = ({ children }) => {
	return (
		<div className="layout_default">
				<Navigations/>
				{ children }
		</div>
	)
}

export default Default