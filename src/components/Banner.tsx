import Button from './button/Button';
import { H3, H2, H1 } from "./text/Text";

import ethereum from "../images/ethereum.svg";
import arbitrum from "../images/arbitrum.svg";
import uniswap from "../images/uniswap.svg";
import { Image } from './image/Image';
import { Col, Container, Row } from './blocks/Blocks';
import * as colors from '../theme/colors';

export default function banner() {
 

  return (
    <div>
      <header className="masthead home-background mb-5">
        <Container className="h-100">
          <Row>
            <Col size='12' className="my-auto">
              <p className={'mt-5'} ><H2 color={colors.secondaryMideum} >Pools. Farms.</H2></p>
              <H1 color={colors.primary} >Accessible. <br/>Permissionless.</H1>
              <p><H3 color={colors.secondaryDark} >
                Contrax is the only Serum AMM that allows you to easily<br/> create liquidity pools and farms.
              </H3></p>
              <Row className='mb-2' >
                <Image src={ethereum} className='brand-logo' alt='ethereum' />
                <Image src={arbitrum} className='brand-logo' alt='arbitrum' />
                <Image src={uniswap} className='brand-logo' alt='uniswap' />
              </Row>
              <Button size='sm' primary label={'Explore Docs'}  />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}
