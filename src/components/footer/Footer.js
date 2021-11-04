import React from 'react'
import { Text } from "@components/text/Text";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <b>Affiliate Hardware Wallets</b>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="#" > Ledger </a>
              </li>
              <li class="list-group-item">
                <a href="#" > Bitbox </a>
              </li>
              <li class="list-group-item">
                <a href="#" > Ether Cards </a>
              </li>
              <li class="list-group-item">
                <a href="#" > Trezor </a>
              </li>
              <li class="list-group-item">
                <a href="#" > KeepKey </a>
              </li>
              <li class="list-group-item">
                <a href="#" > Finney </a>
              </li>
              <li class="list-group-item">
                <a href="#" > CoolWallet </a>
              </li>
              <li class="list-group-item">
                <a href="#" > Billfodl </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <b>Love MEW?</b>
            <Text>Help us keep MEW free and open-source, your donations go a long way towards making that possible.</Text>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="#" > ETH Donation </a>
              </li>
              <li class="list-group-item">
                <a href="#" > BTC Donation </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <Text>v6.2.1</Text>
          </div>
          <div className="col-lg-6">
            <Text>©2021 MyEtherWallet. All rights reserved. Pricing taken from CoinGecko.</Text>
          </div>
        </div>
      </div>
    </div>
  )
}
