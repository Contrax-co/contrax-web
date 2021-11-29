import { useState, useEffect } from 'react';
import { getUserSession, removeUserSession } from '../store/localstorage';
import Button from "../components/button/Button";
import Onboard from 'bnc-onboard';
import Web3 from 'web3';
import { setUserSession } from '../store/localstorage';

let web3
const onboard = Onboard({
  dappId: process.env.REACT_APP_DAPP_ID,  // [String] The API key of Blocknative
  networkId: 3,  // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: wallet => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      web3 = new Web3(wallet.provider)
    }
  }
});

export default function Navigationbar() {
    const [walletAddress, setWalletAddress] = useState('');

    useEffect(() => {
        let walletData: any;
        let tempData = getUserSession();
        if (tempData) {
            walletData = JSON.parse(tempData)
            setWalletAddress(walletData.address);
        }
    }, [])

    function logout() {
        removeUserSession();
        setWalletAddress('');
        window.location.href="/"
    }

    async function ConnectWallet() {
      const walletSelected = await onboard.walletSelect();
      if (walletSelected) {
        const readyToTransact = await onboard.walletCheck();
        if (readyToTransact) {
          const currentState = await onboard.getState()
          setUserSession({
            address: currentState.address,
            appNetworkId: currentState.appNetworkId,
            balance: currentState.balance,
            mobileDevice: currentState.mobileDevice,
            network: currentState.network,
          });
          window.location.href="/dashboard"
        }
      }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">Contrax</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        { walletAddress !== '' ? (
                            <>
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                  <li className="nav-item">
                                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="/dashboard">Dashboard</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="/create-a-token">Create a Token</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="/exchange">Exchange</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="/explore-pool">Explore Pool</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="/create-pool">Create Pool</a>
                                  </li>
                              </ul>
                              <ul className="navbar-nav">
                                  <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                          Address: {walletAddress}
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                          <li><a className="dropdown-item" onClick={logout} href='/#'>Logout</a></li>
                                      </ul>
                                  </li>
                              </ul>
                            </>
                        ) :
                        <>
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/docs">Docs</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/about">About</a>
                            </li>
                          </ul>
                          <Button variant={'primary'} label='Get Started' onClick={ConnectWallet} />
                        </>
                       }
                    </div>
                </div>
            </nav>
        </div>
    )
}
