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
                <div className={`modal__close`} onClick={() => setOpenModal(false)}>
                    <GrClose />
                </div>
                
            </div>

            <div>
                <div className="exchange_items">
                    <div className="pad_options">
                        <img alt="WETH logo" className="exchange__logo" src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023"/> 
                        <p>WETH</p>
                        <p className="mini">Wrapped Ether</p>
                    </div>
                    
                    
                </div>


                <div className="exchange_items">
                    <div className="pad_options">
                        <img alt="USDC logo" className="exchange__logo" src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=023"/> 
                        <p>USDC</p>
                        <p className="mini">USD Coin</p>
                    </div>
                </div>


                <div className="exchange_items">
                    <div className="pad_options">
                        <img alt="Dai Logo" className="exchange__logo" src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=023"/> 
                        <p>DAI</p>
                        <p className="mini">DAI Stablecoin</p>
                    </div>
                </div>


                <div className="exchange_items">
                    <div className="pad_options">
                        <img alt="USDT Logo" className="exchange__logo" src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=023"/>
                        <p>USDT</p>
                        <p className="mini">Tether Token</p>
                    </div>
                </div>

                <div className="exchange_items">
                    <div className="pad_options">
                        <img alt="USDT Logo" className="exchange__logo"  src="https://cryptologos.cc/logos/sushiswap-sushi-logo.png?v=023"/>
                        <p>SUSHI</p>
                        <p className="mini">SushiToken</p>
                    </div>
                </div>
            </div>
           
            
        </div>
        
    </div>
  )
}

export default SwapValues