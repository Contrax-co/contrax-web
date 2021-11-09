import React from 'react'
import Button from './button/Button'
import { PageTitle, PageSubTitle, Title, Desc } from "./text/Text";
import Onboard from 'bnc-onboard'
import Web3 from 'web3'

// set a variable to store instantiated web3
let web3
const onboard = Onboard({
    dappId: 'b4ae356c-11d5-4439-baf0-8f452f2bdbcd',  // [String] The API key of Blocknative
    networkId: 3,  // [Integer] The Ethereum network ID your Dapp uses.
    subscriptions: {
      wallet: wallet => {
         web3 = new Web3(wallet.provider)
      }
    }
});

async function ConnectWallet() {
    await onboard.walletSelect();
    await onboard.walletCheck();
}


export default function banner() {
  return (
    <div>
      <header className="masthead home-background mb-5">
        <div className="container h-100">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mx-auto my-auto">
              <PageTitle value={'Contrax Wallet'} variant={'light'} />
              <Desc value={'The Contrax web app simplifies the process of developing, testing, deploying and managing smart contracts with an intuitive interface.'} variant={'light'} />
              <Button onClick={ConnectWallet} label={'Connect Wallet'} variant="primary" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="row h-100 align-items-center">
                <div className="home-image mt-3"> </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
