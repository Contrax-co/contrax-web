import Button from '../button/Button';
import { H3, H2, Link } from "../text/Text";

import banner1 from "../../images/banner-1.png";
import ethereum from "../../images/ethereum-4x.png";
import arbiscan from "../../images/arbiscan-4x.png";
import uniswap from "../../images/uniswap-4x.png";
import { Image } from '../image/Image';
import { Col, Container, Row } from '../blocks/Blocks';
import * as colors from '../../theme/colors';
import { StyledH1 } from './Banner.styles';

export default function banner() {


  return (
    <div style={{ background: colors.pageBgLight, paddingBottom: '1rem' }}>
      <header className="masthead home-background">
        <Container className="h-100" >
          <Row>
            <Col size='7' className="my-auto">
              <p className={'mt-4 mb-2'} ><H2 color={colors.secondaryMideum} >Tokens. Pools. Farms.</H2></p>
              <StyledH1 color={colors.primary} size='4.5rem' lineHeight='5rem'>Fast. Secure. <br />Permissionless.</StyledH1>
              <Row><H3 color={colors.secondaryDark} className='mt-3 mb-1'>
                Contrax is Arbitrum's only AMM with integrated development tools and advanced farming features.
              </H3></Row>
              <Image src={ethereum} className='mr-4 mt-3' width='94' height='42' alt='ethereum' />
              <Image src={arbiscan} className='mr-4 mt-3' width='144' height='29' alt='arbiscan' />
              <Image src={uniswap} className='mr-4 mt-3' width='112' height='24' alt='uniswap' />
              <Row className='' >
              </Row>
              {/* <Button size='sm' className='mb-3 mt-3' primary label={'Explore Docs'} /> */}
              <Link link="https://contrax.gitbook.io/contrax-docs/"><Button className='mb-3 mt-3' size='sm' primary label={'Explore Docs'} /></Link> 
              &nbsp; &nbsp;
              <Link link="https://gleam.io/plWUe/trax-100k-giveaway-10k-to-5-random-winners-10k-to-the-top-5-of-entries" target="_blank" rel="noreferrer noopener"><Button className='mb-3 mt-3' size='sm' primary label={'TRAX Giveaway'} /></Link>
            </Col>
            <Col size='5' className='pt-4'>
              <Image src={banner1} alt='banner' className='mt-1  d-none d-md-block' />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}
