import React from 'react'
import { useLocation } from 'react-router-dom'
import { Desc } from "@components/text/Text";
import { Link } from '../text/Text';
import * as colors from '@colors';
import BottomBar from '../bottomBar/BottomBar';

export default function Footer() {
  const location = useLocation();
  console.log("path ",location.pathname);

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <b>Affiliate Hardware Wallets</b>
              <div className="row">
                <Link text={'Ledger'} link={'#'} />
              </div>
              <div className="row">
                <Link text={'Bitbox'} link={'#'} />
              </div>
              <div className="row">
                <Link text={'Ether Cards'} link={'#'} />
              </div>
              <div className="row">
                <Link text={'Trezor'} link={'#'} />
              </div>
          </div>
          <div className="col-md-6">
            <b>Love Contrax?</b>
            <Desc>Help us keep Contrax free and open-source, your donations go a long way towards making that possible.</Desc>
            <ul className="list-group list-group-flush">
              <div className="row">
                <Link text={'ETH Donation'} link={'#'} />
              </div>
              <div className="row">
                <Link text={'BTC Donation'} link={'#'} />
              </div>
            </ul>
          </div>
        </div>
      </div>
      {location == '/'  ? (
         <> </>
      ):(
        <BottomBar />
      ) }
    </div>
  )
}
