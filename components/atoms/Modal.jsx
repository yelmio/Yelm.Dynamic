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
      data: {},
      modlType: null
    })
  }

  const buttonsStyles = {
		backgroundColor: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}

  const textStyles = {
	  color: appData.settings ? `#${appData.settings.theme}` : "#0A84FF",
	}
  
  return ( 
    <AnimatePresence exitBeforeEnter>
      {
        showModal.showing &&
        <m.div className="modal__backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
          <m.div className="modal" variants={modal}> 
            { showModal.modalType === "news" ?
            <>
              {
              showModal.data.image && <Image src={showModal.data.image} width={630} height={350}></Image>
              }
              <div className="modal__content">
                <h3>{showModal.data.title}</h3>
                {
                showModal.data.date && <span className="modal__date">{dayjs(showModal.data.date).locale("ru").format('DD MMM YYYY')}</span>
                }
                {
                  showModal.data.description && 
                  <div className="modal__text">
                    <p>{showModal.data.description}</p>
                  </div>
                }
              </div>
            </>
            : showModal.modalType === "items" ? 
            <>
               {
                showModal.data.item.discount !== 0 && 
              <div className="modal__discount" style={buttonsStyles}>
                -{showModal.data.item.discount}%
              </div>
              }
              {
                showModal.data.image && <Image src={showModal.data.image} width={630} height={350}></Image>
              }
              <div className="modal__content">
                <div className="modal__top">
                  <h4 className="modal__title">{showModal.data.title}</h4>
                  <span className="modal__quantity">{showModal.data.item.quantity} {showModal.data.item.type}</span> 
                </div>
                {
                  showModal.data.item.description && 
                  <div className="modal__text modal__text_item">
                    <p>{showModal.data.item.description}</p>
                  </div>
                }
                {
                  showModal.data.item.specification.length && 
                  <div className="modal__specifications">
                    <h4>Характеристики</h4>
                    <ul>
                      {
                        showModal.data.item.specification.map((e, index) => (
                          <li key={index}>
                            <span>{e.name}</span>
                            <span>{e.value}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                }
              </div>
              <footer className="modal__footer">
                <div className="modal__footer-content" style={textStyles}>
                  {showModal.data.price} руб.
                </div>
                <div className="modal__footer-actions">
                  <button className="btn btn_large" onClick={handleClick} style={buttonsStyles}>
                    В корзину
                  </button>
                </div>
              </footer>
            </> : ""
            } 
            <button className="btn btn_round modal__close" onClick={handleClick} style={buttonsStyles}>
              <CrossIcon width={16} height={16} fill="#FFFFFF" stroke="#FFFFFF" />
            </button>
          </m.div>  
        </m.div>
      }
    </AnimatePresence>
   );
}
 
export default Modal;