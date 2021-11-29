import Button from './button/Button';
import { PageTitle, Title, Text } from "./text/Text";

import ethereum from "../images/ethereum.svg";
import arbitrum from "../images/arbitrum.svg";
import uniswap from "../images/uniswap.svg";

export default function banner() {
 

  return (
    <div>
      <header className="masthead home-background mb-5">
        <div className="container h-100">
          <div className="row">
            <div className="col-12 my-auto">
              <Text variant={'dark'} className={'mt-5'} size={34} >Pools. Farms.</Text>
              <PageTitle className={'mt-4'} variant={'dark'}>
                Accessible. <br/>
                Permissionless.
              </PageTitle>
              <Title variant={'dark'} className='mt-3'>Contrax is the only Serum AMM that allows you to easily create liquidity pools and farms.</Title>
              <div className='row mb-2' >
                <img src={ethereum} className='brand-logo' alt='ethereum' />
                <img src={arbitrum} className='brand-logo' alt='arbitrum' />
                <img src={uniswap} className='brand-logo' alt='uniswap' />
              </div>
              <Button label={'Explore Docs'}  />
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
