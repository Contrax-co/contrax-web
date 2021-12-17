import { useState, useEffect } from 'react';
import { getUserSession, removeUserSession } from '../../store/localstorage';
import { Button } from "../button/Button";
import Onboard from 'bnc-onboard';
import Web3 from 'web3';
import { setUserSession } from '../../store/localstorage';
import logo from "../../images/logo.svg";
import { Image } from '../image/Image';
import { Link } from '../text/Text';
import { Container } from '../blocks/Blocks';
import { StyledNavLink } from './Navigationbar.styles';

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
    window.location.href = "/"
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
        window.location.href = "/dashboard"
      }
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-1">
        <Container>
          <Link className="navbar-brand pt-0" link="/#">
            <Image src={logo} className='main-logo' alt='Contrax' />
          </Link>
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {walletAddress !== '' ? (
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <StyledNavLink className="nav-link active" aria-current="page" link="/">Home</StyledNavLink>
                  </li>
                  <li className="nav-item">
                    <StyledNavLink className="nav-link" link="/dashboard">Dashboard</StyledNavLink>
                  </li>
                  <li className="nav-item">
                    <StyledNavLink className="nav-link" link="/create-a-token">Create a Token</StyledNavLink>
                  </li>
                  <li className="nav-item">
                    <StyledNavLink className="nav-link" link="/exchange">Exchange</StyledNavLink>
                  </li>
                  <li className="nav-item">
                    <StyledNavLink className="nav-link" link="/explore-pool">Explore Pool</StyledNavLink>
                  </li>
                  <li className="nav-item">
                    <StyledNavLink className="nav-link" link="/create-pool">Create Pool</StyledNavLink>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <StyledNavLink className="nav-link dropdown-toggle" link="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Address: {walletAddress}
                    </StyledNavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><StyledNavLink className="dropdown-item" onClick={logout} href='/#'>Logout</StyledNavLink></li>
                    </ul>
                  </li>
                </ul>
              </>
            ) :
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <StyledNavLink className="nav-link active" aria-current="page" link="/docs">Docs</StyledNavLink>
                  </li>
                  <li className="nav-item">
                    <StyledNavLink className="nav-link active" aria-current="page" link="/about">About</StyledNavLink>
                  </li>
                </ul>
                <Button primary size='sm' onClick={ConnectWallet} >Connect Wallet</Button>
              </>
            }
          </div>
        </Container>
      </nav>
    </div>
  )
}
