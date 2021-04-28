import dynamic from "next/dynamic"
const Navigation = dynamic(() => import("../components/molecules/Navigation"))

const Default = ({children}) => {
  return (
    <div className="layout">
      <aside>
        <Navigation />  
      </aside>
      <main className="container">
        { children }
      </main>
    </div>
  )
}

export default Default

