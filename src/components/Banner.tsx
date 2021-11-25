import Button from './button/Button';
import { PageTitle, Desc, PageSubTitle, Title, Text } from "./text/Text";
import Onboard from 'bnc-onboard';
import Web3 from 'web3';
import { setUserSession } from '../store/localstorage';
import ethereum from "../images/ethereum.png";
import arbitrum from "../images/arbitrum.png";
import uniswap from "../images/uniswap.png";

let web3
const onboard = Onboard({
  dappId: process.env.REACT_APP_DAPP_ID,  // [String] The API key of Blocknative
  networkId: 3,  // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: wallet => {
      web3 = new Web3(wallet.provider)
    }
  }
});

export default function banner() {
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
      <header className="masthead home-background mb-5">
        <div className="container h-100">
          <div className="row">
            <div className="col-12 my-auto">
              <Text variant={'light'} className={'mt-5'} size={34} >Pools. Farms.</Text>
              <PageTitle className={'mt-4'} variant={'light'}>
                Accessible. <br/>
                Permissionless.
              </PageTitle>
              <Title variant={'light'} className='mt-3'>Contrax is the only Serum AMM that allows you to easily create liquidity pools and farms.</Title>
              <div className='row mb-2' >
                <img src={ethereum} className='brand-logo' alt='ethereum' />
                <img src={arbitrum} className='brand-logo' alt='arbitrum' />
                <img src={uniswap} className='brand-logo' alt='uniswap' />
              </div>
              <Button label={'Explore Docs'} />
            </div>
            {/* <div className="col-lg-6 col-sm-12 mx-auto my-auto">
              <PageTitle value={'Contrax Wallet'} variant={'light'} />
              <Desc value={'The Contrax web app simplifies the process of developing, testing, deploying and managing smart contracts with an intuitive interface.'} variant={'light'} />
              <Button onClick={ConnectWallet} label={'Connect Wallet'} variant="primary" />
            </div> */}
            {/* <div className="col-lg-6 col-sm-12">
              <div className="row h-100 align-items-center">
                <div className="home-image mt-3"> </div>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  )
}
