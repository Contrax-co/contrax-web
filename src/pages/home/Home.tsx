import Navigationbar from '../../components/Navigationbar/Navigationbar';
import Banner from '../../components/Banner';
import Footer from '../../components/footer/Footer';
import * as colors from '../../theme/colors';
import { H1, H3, B1, H2 } from '../../components/text/Text';
// import Button from "../../components/button/Button";
import { StyledCard, StyledFeatureCard } from './Home.styles';
import { Block, Col, Container, Row } from '../../components/blocks/Blocks';

export default function home() {
  return (
    <div style={{ backgroundColor: colors.white }}>
      <Navigationbar />
      <Banner />
      {/* benefits section */}
      <Row height='72px' />
      <Container className=''>
        <Row className='d-row justify-content-between'>
          <StyledCard>
            <H3 color={colors.secondaryMideum}>Built on Arbitrum</H3>
            <Block className='mt-2'><H1 color={colors.accentDark}>Secure & Scalable</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>Secured by Ethereum while moving computations and data storage off of the main chain.</B1></Block>
            {/* <Button size={'sm'} primary className='mt-4' label='Learn More' /> */}
          </StyledCard>

          <StyledCard>
            <H3 color={colors.secondaryMideum}>No-code Design</H3>
            <Block className='mt-2'><H1 color={colors.accentDark}>Highly Accessible</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>Create and manage projects on Ethereum and Arbitrum One without any coding.</B1></Block>
            {/* <Button size={'sm'} primary className='mt-4' label='Learn More' /> */}
          </StyledCard>

          <StyledCard>
            <H3 color={colors.secondaryMideum}>DAO Controlled</H3>
            <Block className='mt-2'><H1 color={colors.accentDark}>Community Owned</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>TRAX token holders can vote on future products, features and fee structures for the platform.</B1></Block>
            {/* <Button size={'sm'} primary className='mt-4' label='Learn More' /> */}
          </StyledCard>
        </Row>
      </Container>

      {/* video session */}
      <Row height='72px' />
      <Container fluid color={colors.accentLight}>
        <Container >
          <Row height='72px' />
          <Row className='' >
            <Col size='6'>
              <iframe width="523" height="333" src="https://www.youtube.com/embed/kDmT1BPvRlU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </Col>
            <Col size='6' className='d-flex flex-column justify-content-center'>
              <Row>
                <H3 color={colors.secondaryMideum}>What is the Contrax Project?</H3>
              </Row>
              <Row>
                <H2 className='mb-2' color={colors.primary}>Understand Our Vision</H2>
              </Row>
              <Row>
                <B1 className='mt-4'>
                  Contrax believes in making DeFi accessible and feature-rich <br />
                  We are bringing easy token and DeFi creation to Arbitrum<br />
                  With many other chains around the corner.
                </B1>
              </Row>
            </Col>
          </Row>
          <Row height='72px' />
        </Container>
      </Container>

      {/* feature section */}
      <Row height='72px' />
      <Container className=''>
        <Row className='' >
          <H2 color={colors.secondaryMideum}>Made for the Community</H2>
          <Block className='mt-2 mb-4 '><H1 color={colors.secondaryDark}>There's Something for Everyone</H1></Block>
        </Row>
        <Row className='d-row justify-content-between '>
          <StyledFeatureCard>
            <Block className='mt-3'><H3 color={colors.accentDark}>For Builders</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Create and manage tokens, liquidity pools and farms.</B1></Block>
            <Block className='mt-4'><B1 className='mb-5'>Bring new projects to life on the most trusted & secure Ethereum rollup.</B1></Block>
          </StyledFeatureCard>

          <StyledFeatureCard>
            <Block className='mt-3'><H3 color={colors.accentDark}>For Traders</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Trade Ethereum assets without the high gas costs.</B1></Block>
            <Block className='mt-4'><B1 className='mb-5'>Contrax executes all trades on Uniswap for optimal liquidity and price.</B1></Block>
          </StyledFeatureCard>

          <StyledFeatureCard>
            <Block className='mt-3'><H3 color={colors.accentDark}>For Farmers</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Find and create farms for any asset under one roof.</B1></Block>
            <Block className='mt-4'><B1 className='mb-5'>Contrax provides data and infographics on all listed pools and farms.</B1></Block>
          </StyledFeatureCard>

          {/* <StyledFeatureCard>
            <Block><B1 color={colors.secondaryMideum}>For Traders </B1></Block>
            <Block className='mt-3'><H3 color={colors.accentDark}>Trade with minimal fees and minimal slippage</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Contrax performs all trades directly on Serum DEX without any additional fees.</B1></Block>
          </StyledFeatureCard> */}

        </Row>
      </Container>

      <Footer />
    </div>
  )
}
