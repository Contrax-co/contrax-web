import React, {useRef, useEffect, useState} from 'react';
import {GrClose} from 'react-icons/gr';
import './SwapValues.css';

function SwapValues({tokens, setOpenModal, lightMode}:any) {

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
                <GrClose className={`modal__close ${lightMode && "modal__close--light"}`} onClick={() => setOpenModal(false)}/>
            </div>

            <div>
                {tokens.map((token:any) => (
                    <div key={token.id} className={`exchange_items ${lightMode && "exchange_items--light"}`}>
                        <div className={`pad_options ${lightMode && "pad_options--light"}`}>
                            <img alt={token.token_alt} className="exchange__logo" src={token.token_logo}/> 
                            <p>{token.token_name}</p>
                            <p className="mini">{token.token_sub}</p>
                        </div>
                    </div>

                ))}
            </div>
           
            
        </div>
        
    </div>
  )
}

export default SwapValues