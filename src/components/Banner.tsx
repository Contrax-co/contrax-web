import Button from './button/Button';
import { PageTitle, Title, PageSubTitle } from "./text/Text";

import ethereum from "../images/ethereum.svg";
import arbitrum from "../images/arbitrum.svg";
import uniswap from "../images/uniswap.svg";
import { Image } from './image/Image';
import { Col, Container, Row } from './blocks/Blocks';

export default function banner() {
 

  return (
    <div>
      <header className="masthead home-background mb-5">
        <Container className="h-100">
          <Row>
            <Col size='12' className="my-auto">
              <PageSubTitle variant={'dark'} className={'mt-5'} >Pools. Farms.</PageSubTitle>
              <PageTitle className={'mt-4'} variant={'dark'}>
                Accessible. <br/>
                Permissionless.
              </PageTitle>
              <Title variant={'dark'} className='mt-3'>Contrax is the only Serum AMM that allows you to easily create liquidity pools and farms.</Title>
              <Row className='mb-2' >
                <Image src={ethereum} className='brand-logo' alt='ethereum' />
                <Image src={arbitrum} className='brand-logo' alt='arbitrum' />
                <Image src={uniswap} className='brand-logo' alt='uniswap' />
              </Row>
              <Button label={'Explore Docs'}  />
            </Col>
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
          </Row>
        </Container>
      </header>
    </div>
  )
}
