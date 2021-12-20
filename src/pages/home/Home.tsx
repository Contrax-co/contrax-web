import Navigationbar from '../../components/Navigationbar/Navigationbar';
import Banner from '../../components/Banner';
import Footer from '../../components/footer/Footer';
import * as colors from '../../theme/colors';
import { H1, H3, B1, H2 } from '../../components/text/Text';
import Button from "../../components/button/Button";
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
            <H3 color={colors.secondaryMideum}>Built on Solana </H3>
            <Block className='mt-2'><H1 color={colors.accentDark}>Warp Speed</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>With sub-second block times and microsopic fees, you'll never look back.</B1></Block>
            <Button size={'sm'} primary className='mt-4' label='Get Started' />
          </StyledCard>

          <StyledCard>
            <H3 color={colors.secondaryMideum}>Powered by Serum </H3>
            <Block className='mt-2'><H1 color={colors.accentDark}>Maximal Liquidity</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>Experience the power and liquidity of a CEX with the decentralization of a DEX.</B1></Block>
            <Button size={'sm'} primary className='mt-4' label='Get Started' />
          </StyledCard>

          <StyledCard>
            <H3 color={colors.secondaryMideum}>Built on Solana </H3>
            <Block className='mt-2'><H1 color={colors.accentDark}>Warp Speed</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>With sub-second block times and microsopic fees, you'll never look back.</B1></Block>
            <Button size={'sm'} primary className='mt-4' label='Get Started' />
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
                  We believe the fate of humanity will be decided at <br /> 
                  the frontier of technological innovation and <br /> 
                  human collaboration.
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
            <Block><B1 color={colors.secondaryMideum}>For Projects </B1></Block>
            <Block className='mt-3'><H3 color={colors.accentDark}>Create Serum liquidity pools and LP token</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Create pools and farms with custom emissions to kickstart your project.</B1></Block>
          </StyledFeatureCard>

          <StyledFeatureCard>
            <Block><B1 color={colors.secondaryMideum}>For Traders </B1></Block>
            <Block className='mt-3'><H3 color={colors.accentDark}>Trade with minimal fees and minimal slippage</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Contrax performs all trades directly on Serum DEX without any additional fees.</B1></Block>
          </StyledFeatureCard>

          <StyledFeatureCard>
            <Block><B1 color={colors.secondaryMideum}>For Farmers </B1></Block>
            <Block className='mt-3'><H3 color={colors.accentDark}>Find all your liquidity and farms in one place</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Contrax provides an intuitive interface with all your pools and farms in one place.</B1></Block>
          </StyledFeatureCard>

          <StyledFeatureCard>
            <Block><B1 color={colors.secondaryMideum}>For Traders </B1></Block>
            <Block className='mt-3'><H3 color={colors.accentDark}>Trade with minimal fees and minimal slippage</H3></Block>
            <Block className='mt-4'><B1 className='mb-5'>Contrax performs all trades directly on Serum DEX without any additional fees.</B1></Block>
          </StyledFeatureCard>

        </Row>
      </Container>

      <Footer />
    </div>
  )
}
