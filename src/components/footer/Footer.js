import React from 'react'
import { Desc } from "@components/text/Text";
import { Link } from '../text/Text';
import * as colors from '@colors';

export default function Footer() {
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
    </div>
  )
}
