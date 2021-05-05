import { AnimatePresence, m } from "framer-motion";
import { useContext } from "react"
import CrossIcon from "./icons/CrossIcon";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import AppContext from "../../context/appProvider"

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const modal = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5 }
  }
  
}

const Modal = ({showModal, setShowModal}) => {

  const appData = useContext(AppContext)

  const handleClick = () => {
    setShowModal({
      showing: false,
      data: {}
    })
  }

  const buttonsStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}
  
  return ( 
    <AnimatePresence exitBeforeEnter>
      {
        showModal.showing && (
        <m.div className="modal__backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
          <m.div className="modal" variants={modal}> 
            {
             showModal.data.image && <Image src={showModal.data.image} width={630} height={350}></Image>
            }
            <div className="modal__content">
              <h3>{showModal.data.title}</h3>
              {
              showModal.data.date && <span>{dayjs(showModal.data.date).locale("ru").format('DD MMM YYYY')}</span>
              }
              {
                showModal.data.description && 
                <div className="modal__text">
                  <p>{showModal.data.description}</p>
                  <p>{showModal.data.description}</p>
                  <p>{showModal.data.description}</p>
                </div>
              }
            </div>
            <button className="btn btn_round" onClick={handleClick} style={buttonsStyles}>
              <CrossIcon width={16} height={16} fill="#FFFFFF" stroke="#FFFFFF" />
            </button>
          </m.div>  
          
        </m.div>
        )
      }
    </AnimatePresence>
   );
}
 
export default Modal;