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
                    <PageSubTitle>Built on Arbitrum</PageSubTitle>
                    <PageTitle>Secure & Scalable</PageTitle>
                    <Title className='mb-5'>Secured by Ethereum while moving computations and data storage off of the main chain.</Title>
                    <Button label='Learn More' />
                  </Card>
                </div>

                <div className='col-4 mb-5'>
                  <Card>
                    <PageSubTitle>No-code Design</PageSubTitle>
                    <PageTitle>Highly Accessible</PageTitle>
                    <Title className='mb-5'>Create and manage projects on Ethereum and Arbitrum One without any coding. </Title>
                    <Button label='Learn More' />
                  </Card>
                </div>

                <div className='col-4 mb-5'>
                  <Card>
                    <PageSubTitle>DAO Controlled</PageSubTitle>
                    <PageTitle>Community Owned</PageTitle>
                    <Title className='mb-5'>TRAX token holders can vote on future products, features and fee structures for the platform.</Title>
                    <Button label='Learn More' />
                  </Card>
                </div>
              </div>
            </div>

            {/* feature section */}
            <div className='container'>
              <div className='row mt-5' >
                <Title>Designed with everyone in mind</Title>
                <PageTitle>Offering a Suite of DeFi Features</PageTitle>
              </div>
              <div className='row'>
                <div className='col-3 mb-5'>
                  <Card>
                    <Text size={24}>for</Text>
                    <PageSubTitle>Builders</PageSubTitle>
                    <Title className='mb-5'>Create and manage tokens, liquidity pools and farms.
                    Bring new projects to life on the most trusted & secure Ethereum rollup.</Title>
                  </Card>
                </div>

                <div className='col-3 mb-5'>
                  <Card>
                    <Text size={24}>for</Text>
                    <PageSubTitle>Traders</PageSubTitle>
                    <Title className='mb-5'>Trade Ethereum assets without the high gas costs.
                    Contrax executes all trades on Uniswap for optimal liquidity and price.</Title>
                  </Card>
                </div>

                <div className='col-3 mb-5'>
                  <Card>
                    <Text size={24}>For</Text>
                    <PageSubTitle>Farmers</PageSubTitle>
                    <Title className='mb-5'>Find and create farms for any asset under one roof
                    Contrax provides data and infographics on all listed pools and farms.</Title>
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
                  <Button label="Let's Go!" />
                </div>
              </div>
            </StyledCtaBar>
            <Footer />
        </div>
    )
}
