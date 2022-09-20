import React, {useState} from 'react';
import {CgArrowsExchangeAltV} from 'react-icons/cg';
import {HiChevronDown} from 'react-icons/hi';
import SwapValues from './CompoundEarn/components/SwapValues';
import './exchange.css';

export default function Exchange({lightMode}:any) {

  const [openModal, setOpenModal] = useState(false);


  return (
    <div className={`whole__exchange__container`}>

      <div className="exchange__header">
        <p className={`whole__container__title ${lightMode && "whole__container__title--light"}`}>Exchange</p>
      </div>
      
      
      <div className={`swap__container ${lightMode && "swap__container--light"}`}>
        <p className={`swap_title ${lightMode && "swap_title--light"}`}>Swap</p>

        <div className={`from ${lightMode && "from--light"}`}>
          <p>From</p>

          <div className={`from__input ${lightMode && "from__input--light"}`}>
            <input type="number" placeholder="0.0" className={`from__amount ${lightMode && "from__amount--light"}`}/>
            <div className={`dropdown__from ${lightMode && "dropdown__from--light"}`} onClick={() => setOpenModal(true)}>
              <img className={`swap__logo`} alt="ETH token" src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023"/>
              <p>ETH</p>
              <HiChevronDown />
            </div>
          </div>

        </div>

        <CgArrowsExchangeAltV className={`symbol__exchange ${lightMode && "symbol__exchange--light"}`}/>

        <div className={`to ${lightMode && "to--light"}`}>
          <p>To</p>
          <div className={`to__input ${lightMode && "to__input--light"}`}>
            <input type="number" placeholder="0.0" className={`to__amount ${lightMode && "to__amount--light"}`}/>

            <div className={`dropdown__to ${lightMode && "dropdown__to--light"}`} onClick={() => setOpenModal(true)}>
              <img className={`swap__logo`} alt="ETH token" src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023"/>
              <p>ETH</p>
              <HiChevronDown />
            </div>

          </div>
        </div>

        <div className={`exchange_button ${lightMode && "exchange_button--light"}`}>
          <p>Enter a amount</p>
        </div>

      </div>

      {openModal ? <SwapValues setOpenModal={setOpenModal} lightMode={lightMode}/> : null}

    </div>
  );
}
