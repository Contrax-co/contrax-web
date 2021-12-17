import Navigationbar from '../../components/Navigationbar/Navigationbar';
import Banner from '../../components/Banner';
import Footer from '../../components/footer/Footer';
import * as colors from '../../theme/colors';
import Card from '../../components/card/Card';
import { H1, H3, Text, B1, H2 } from '../../components/text/Text';
import Button from "../../components/button/Button";
import { StyledC4Card, StyledCtaBar } from './Home.styles';
import { Block, Col, Container, Row } from '../../components/blocks/Blocks';

export default function home() {
    return (
      <div style={{ backgroundColor: colors.pageBgLight}}>
            <Navigationbar />
            <Banner />
            {/* benefits section */}
            <Container>
              <Row>
                <Col size='4' className='mb-5'>
                  <StyledC4Card>
                    <H3 color={colors.secondaryMideum}>Built on Solana </H3>
                    <Block className='mt-2'><H1 color={colors.accentDark}>Warp Speed</H1></Block>
                    <Block className='mt-4'><B1 className='mb-5'>With sub-second block times and microsopic fees, you'll never look back.</B1></Block>
                    <Button size={'sm'} primary className='mt-4' label='Get Started' />
                  </StyledC4Card>
                </Col>

                <Col size='4' className='mb-5'>
                  <StyledC4Card>
                    <H3 color={colors.secondaryMideum}>Powered by Serum </H3>
                    <Block className='mt-2'><H1 color={colors.accentDark}>Maximal Liquidity</H1></Block>
                    <Block className='mt-4'><B1 className='mb-5'>Experience the power and liquidity of a CEX with the decentralization of a DEX.</B1></Block>
                    <Button size={'sm'} primary className='mt-4' label='Get Started' />
                  </StyledC4Card>
                </Col>

                <Col size='4' className='mb-5'>
                  <StyledC4Card>
                    <H3 color={colors.secondaryMideum}>Built on Solana </H3>
                    <Block className='mt-2'><H1 color={colors.accentDark}>Warp Speed</H1></Block>
                    <Block className='mt-4'><B1 className='mb-5'>With sub-second block times and microsopic fees, you'll never look back.</B1></Block>
                    <Button size={'sm'} primary className='mt-4' label='Get Started' />
                  </StyledC4Card>
                </Col>
              </Row>
            </Container>

            {/* feature section */}
            <Container>
              <Row className='mt-5' >
                <H2 color={colors.secondaryMideum}>Made for the Community</H2>
                <Block className='mt-2 mb-4 '><H1 color={colors.secondaryDark}>There's Something for Everyone</H1></Block>
              </Row>
              <Row>
                <Col size='3' className='mb-5'>
                  <Card>
                    <Block><B1 color={colors.secondaryMideum}>For Projects </B1></Block>
                    <Block className='mt-3'><H3 color={colors.accentDark}>Create Serum liquidity pools and LP token</H3></Block>
                    <Block className='mt-4'><B1 className='mb-5'>Create pools and farms with custom emissions to kickstart your project.</B1></Block>
                  </Card>
                </Col>

                <Col size='3' className='mb-5'>
                  <Card>
                    <Block><B1 color={colors.secondaryMideum}>For Traders </B1></Block>
                    <Block className='mt-3'><H3 color={colors.accentDark}>Trade with minimal fees and minimal slippage</H3></Block>
                    <Block className='mt-4'><B1 className='mb-5'>Contrax performs all trades directly on Serum DEX without any additional fees.</B1></Block>
                  </Card>
                </Col>

                <Col size='3' className='mb-5'>
                  <Card>
                    <Block><B1 color={colors.secondaryMideum}>For Farmers </B1></Block>
                    <Block className='mt-3'><H3 color={colors.accentDark}>Find all your liquidity and farms in one place</H3></Block>
                    <Block className='mt-4'><B1 className='mb-5'>Contrax provides an intuitive interface with all your pools and farms in one place.</B1></Block>
                  </Card>
                </Col>

                <Col size='3' className='mb-5'>
                  <Card>
                    <Block><B1 color={colors.secondaryMideum}>For Traders </B1></Block>
                    <Block className='mt-3'><H3 color={colors.accentDark}>Trade with minimal fees and minimal slippage</H3></Block>
                    <Block className='mt-4'><B1 className='mb-5'>Contrax performs all trades directly on Serum DEX without any additional fees.</B1></Block>
                  </Card>
                </Col>

              </Row>
            </Container>

            <Footer />
        </div>
    )
}
