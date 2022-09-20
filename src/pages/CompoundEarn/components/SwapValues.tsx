import React, {useRef} from 'react';
import {GrClose} from 'react-icons/gr';
import './SwapValues.css';

function SwapValues({setOpenModal, lightMode}:any) {

    // close the modal when clicking outside the modal.
    const modalRef: any = useRef();

    const closeModal = (e: any) => {
        if (e.target === modalRef.current) {
            setOpenModal(false);
        }
    };

  return (
    <div className={`modal__container`} ref={modalRef} onClick={closeModal}>
        <div className={`swap__modal ${lightMode && "swap__modal--light"}`}>
            <div className={`modal__title ${lightMode && "modal__title--light"}`}>
                <p>Select a token</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default SwapValues