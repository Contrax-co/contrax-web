nimport Button from './button/Button';
import { H3, H2, H1 } from "./text/Text";

import banner1 from "../images/banner-1.png";
import ethereum from "../images/ethereum-4x.png";
import arbiscan from "../images/arbiscan-4x.png";
import uniswap from "../images/uniswap-4x.png";
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
              <p className={'mt-4 mb-2'} ><H2 color={colors.secondaryMideum} >Permissionless. Pools. Farms.</H2></p>
              <H1 color={colors.primary} size='4.5rem' lineHeight='5rem'>Fast. Secure. <br/>Testing.</H1>
              <Row><H3 color={colors.secondaryDark} className='mt-3 mb-1'>
                Contrax is the only Serum AMM that allows you to easily create liquidity pools and farms.
              </H3></Row>
                <Image src={ethereum} className='mr-4 mt-3' width='94' height='42' alt='ethereum' />
                <Image src={arbiscan} className='mr-4 mt-3' width='144' height='29' alt='arbiscan' />
                <Image src={uniswap} className='mr-4 mt-3' width='112' height='24' alt='uniswap' />
              <Row className='' >
              </Row>
              <Button size='sm' className='mb-3 mt-3' primary label={'Explore Docs'}  />
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
