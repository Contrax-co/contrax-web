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
              <div class="row">
                <Link text={'Ledger'} link={'#'} />
              </div>
              <div class="row">
                <Link text={'Bitbox'} link={'#'} />
              </div>
              <div class="row">
                <Link text={'Ether Cards'} link={'#'} />
              </div>
              <div class="row">
                <Link text={'Trezor'} link={'#'} />
              </div>
          </div>
          <div className="col-md-6">
            <b>Love Contrax?</b>
            <Desc>Help us keep Contrax free and open-source, your donations go a long way towards making that possible.</Desc>
            <ul class="list-group list-group-flush">
              <div class="row">
                <Link text={'ETH Donation'} link={'#'} />
              </div>
              <div class="row">
                <Link text={'BTC Donation'} link={'#'} />
              </div>
            </ul>
          </div>
        </div>

      </div>
      <div className="row" style={{backgroundColor: colors.pageBgDark, paddingTop: '20px', marginTop: 30}}>
        <div className="col-lg-3">
        </div>
        <div className="col-lg-6 text-center">
          <Desc>©2021 Contrax. All rights reserved.</Desc>
        </div>
      </div>
    </div>
  )
}
