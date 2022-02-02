import Navigationbar from '../../components/Navigationbar/Navigationbar';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import * as colors from '../../theme/colors';
import { H1, H3, B1, H2 } from '../../components/text/Text';
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
          <StyledCard className='p-1'>
            <H3 color={colors.secondaryMideum}>Built on Arbitrum</H3>
            <Block className='mt-2'><H1 color={colors.accentDark} >Secure & Scalable</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>
              Arbitrum is secured by Ethereum, and saves gas fees by moving computations and data storage off of the main chain.
            </B1></Block>
            {/* <Button size={'sm'} primary className='mt-4' label='Learn More' /> */}
          </StyledCard>

          <StyledCard className='p-1'>
            <H3 color={colors.secondaryMideum}>No-code Design</H3>
            <Block className='mt-2'><H1 color={colors.accentDark}>Highly Accessible</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>
              Made for anyone to use. Create and manage projects on Ethereum and Arbitrum One without any coding.
            </B1></Block>
            {/* <Button size={'sm'} primary className='mt-4' label='Learn More' /> */}
          </StyledCard>

          <StyledCard className='p-1'>
            <H3 color={colors.secondaryMideum}>DAO Controlled</H3>
            <Block className='mt-2'><H1 color={colors.accentDark}>Community Owned</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>
              TRAX token holders can vote on future products, features, and staking & farming rewards for the platform..</B1></Block>
            {/* <Button size={'sm'} primary className='mt-4' label='Learn More' /> */}
          </StyledCard>
        </Row>
      </Container>

      {/* video session */}
      <Row height='72px' />
      <Container fluid color={colors.accentLight}>
        <Container className='p-0'>
          <Row height='72px' />
          <Row className='' >
            <Col size='6'>
              <iframe width="100%" height="333" src="https://www.youtube.com/embed/bAOWN1MwJe4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </Col>
            <Col size='6' className='d-flex flex-column justify-content-center'>
              <Row>
                <H3 className='mb-1' color={colors.secondaryMideum}>What is the Contrax Project?</H3>
              </Row>
              <Row>
                <H2 className='mb-2' size='2.12rem' color={colors.primary}>Understand Our Vision</H2>
              </Row>
              <Row>
                <B1 className='mt-2'>
                  Contrax believes in making DeFi feature-rich and <br />
                  accessible to all. We are bringing easy token and <br />
                  DeFi creation to Arbitrum and others. <br />
                  Watch our one minute explainer to learn more.
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
        <Row height='35px'></Row>
        <Row className='d-row justify-content-between '>
          <StyledFeatureCard>
            <Block className='mt-3'><H3 color={colors.accentDark}>For Builders</H3></Block>
            <Block className='mt-2'><H3 className='mb-5'>Create and manage tokens, liquidity pools and farms.</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Bring new projects to life on the most trusted & secure Ethereum rollup.</B1></Block>
          </StyledFeatureCard>

          <StyledFeatureCard>
            <Block className='mt-3'><H3 color={colors.accentDark}>For Traders</H3></Block>
            <Block className='mt-2'><H3 className='mb-5'>Trade Ethereum assets without the high gas costs.</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Contrax executes existing swap pairs on Uniswap for optimal liquidity and price.</B1></Block>
          </StyledFeatureCard>

          <StyledFeatureCard>
            <Block className='mt-3'><H3 color={colors.accentDark}>For Farmers</H3></Block>
            <Block className='mt-2'><H3 className='mb-5'>Get more out of staking and farming for any token</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Auto-compounding and impermanent loss protectoion for all Arbitrum pools.</B1></Block>
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
