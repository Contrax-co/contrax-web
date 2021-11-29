import Navigationbar from '../../components/Navigationbar';
import Banner from '../../components/Banner';
import Footer from '../../components/footer/Footer';
import * as colors from '../../theme/colors';
import Card from '../../components/card/Card';
import { PageTitle, Title, PageSubTitle, Text } from '../../components/text/Text';
import Button from "../../components/button/Button";
import { StyledCtaBar } from './Home.styles';

export default function home() {
    return (
      <div style={{ backgroundColor: colors.pageBgLight}}>
            <Navigationbar />
            <Banner />
            {/* benefits section */}
            <div className='container'>
              <div className='row'>
                <div className='col-4 mb-5'>
                  <Card>
                    <PageSubTitle>Built on Solana </PageSubTitle>
                    <PageTitle>Warp Speed</PageTitle>
                    <Title className='mb-5'>With sub-second block times and microsopic fees, you'll never look back.</Title>
                    <Button label='Get Started' />
                  </Card>
                </div>

                <div className='col-4 mb-5'>
                  <Card>
                    <PageSubTitle>Powered by Serum </PageSubTitle>
                    <PageTitle>Maximal Liquidity</PageTitle>
                    <Title className='mb-5'>Experience the power and liquidity of a CEX with the decentralization of a DEX.</Title>
                    <Button label='Get Started' />
                  </Card>
                </div>

                <div className='col-4 mb-5'>
                  <Card>
                    <PageSubTitle>Built on Solana </PageSubTitle>
                    <PageTitle>Warp Speed</PageTitle>
                    <Title className='mb-5'>With sub-second block times and microsopic fees, you'll never look back.</Title>
                    <Button label='Get Started' />
                  </Card>
                </div>
              </div>
            </div>

            {/* feature section */}
            <div className='container'>
              <div className='row mt-5' >
                <Title>Made for the Community</Title>
                <PageTitle>There's Something for Everyone</PageTitle>
              </div>
              <div className='row'>
                <div className='col-3 mb-5'>
                  <Card>
                    <Text size={24}>For Projects </Text>
                    <PageSubTitle>Create Serum liquidity pools and LP token</PageSubTitle>
                    <Title className='mb-5'>Create pools and farms with custom emissions to kickstart your project.</Title>
                  </Card>
                </div>

                <div className='col-3 mb-5'>
                  <Card>
                    <Text size={24}>For Traders </Text>
                    <PageSubTitle>Trade with minimal fees and minimal slippage</PageSubTitle>
                    <Title className='mb-5'>Contrax performs all trades directly on Serum DEX without any additional fees.</Title>
                  </Card>
                </div>

                <div className='col-3 mb-5'>
                  <Card>
                    <Text size={24}>For Farmers </Text>
                    <PageSubTitle>Find all your liquidity and farms in one place</PageSubTitle>
                    <Title className='mb-5'>Contrax provides an intuitive interface with all your pools and farms in one place.</Title>
                  </Card>
                </div>

                <div className='col-3 mb-5'>
                  <Card>
                    <Text size={24}>For Traders </Text>
                    <PageSubTitle>Trade with minimal fees and minimal slippage</PageSubTitle>
                    <Title className='mb-5'>Contrax performs all trades directly on Serum DEX without any additional fees.</Title>
                  </Card>
                </div>

              </div>
            </div>

            {/* call to action bar */}
            <StyledCtaBar className='container'>
              <div className='row' >
                <div className='col-md-6 mt-2'>
                  <PageSubTitle variant='light'>Ready to get started?</PageSubTitle>
                </div>
                <div className='col-md-6 text-right'  style={{paddingTop: '12px'}} >
                  <Button label='Get Started' />
                </div>
              </div>
            </StyledCtaBar>

            <Footer />
        </div>
    )
}
