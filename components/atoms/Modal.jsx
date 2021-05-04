import { AnimatePresence, m } from "framer-motion";
import CrossIcon from "./icons/CrossIcon";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "10px",
    opacity: 1,
    transition: { delay: 0.5 }
  }
  
}

const Modal = ({image, title, date, text, showModal, setShowModal}) => {

  const handleClick = () => {
    setShowModal(false)
  }

  return ( 
    <AnimatePresence exitBeforeEnter>
      {
        showModal && (
        <m.div className="modal__backdrop" variants={backdrop} initial="hidden" animate="visible" exit="hidden">
          <m.div className="modal" variants={modal}> 
            {
              image && <Image src={image} width={630} height={350}></Image>
            }
            <div className="modal__content">
              <h3>Title</h3>
              <span>Data</span>
              {
                text && 
                <div className="modal__text">
                  <p>Text</p>
                </div>
              }
            </div>
            <button className="btn btn_round" onClick={handleClick}>
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