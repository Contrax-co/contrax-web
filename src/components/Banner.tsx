import Button from './button/Button';
import { H3, H2, H1 } from "./text/Text";

import ethereum from "../images/ethereum.svg";
import arbitrum from "../images/arbitrum.svg";
import banner1 from "../images/banner-1.png";
import uniswap from "../images/uniswap.svg";
import { Image } from './image/Image';
import { Col, Container, Row } from './blocks/Blocks';
import * as colors from '../theme/colors';

export default function banner() {
 

  return (
    <div style={{background: colors.pageBgLight, paddingBottom: '1rem'}}>
      <header className="masthead home-background">
        <Container className="h-100" >
          <Row>
            <Col size='7' className="my-auto">
              <p className={'mt-4 mb-2'} ><H2 color={colors.secondaryMideum} >Tokens. Pools. Farms.</H2></p>
              <H1 color={colors.primary} >Fast. Secure. <br/>Permissionless.</H1>
              <Row><H3 color={colors.secondaryDark} >
                Contrax is the first AMM designed to easily create tokens, pools and farms on the Arbitrum One network.
              </H3></Row>
              <Row className='mb-2' >
                <Image src={uniswap} className='brand-logo' alt='uniswap' />
              </Row>
              <Button size='sm' primary label={'Explore Docs'}  />
            </Col>
            <Col size='5' className='pt-4'>
              <Image src={banner1} alt='banner' className='mt-1' />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}
