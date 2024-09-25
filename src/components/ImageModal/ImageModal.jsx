import Modal from 'react-modal';
import { SlClose } from "react-icons/sl";
import s from './ImageModal.module.css'

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    return (
    <div>
      <Modal
        isOpen={isOpen}
          onRequestClose={onRequestClose}
          
          className={s.modal}
      ClassName={s.overlay}
      >
        <button onClick={onRequestClose} className={s.close_btn}><SlClose /></button>
        <img src={image} alt="" className={s.modal_image}/>
      </Modal>
    </div>
  )
}

export default ImageModal
