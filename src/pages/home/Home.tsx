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
                    <PageSubTitle>No Code Needed</PageSubTitle>
                    <PageTitle>Create Projects</PageTitle>
                    <Title className='mb-5'>Easily create and manage tokens, pools, and farms on Ethereum or Arbitrum.</Title>
                    <Button label='Learn More' />
                  </Card>
                </div>

                <div className='col-4 mb-5'>
                  <Card>
                    <PageSubTitle>Maximum Rewards</PageSubTitle>
                    <PageTitle>Optimized Staking</PageTitle>
                    <Title className='mb-5'>Customize your Arbitrum staking and farming experience and recieve all rewards automatically. </Title>
                    <Button label='Learn More' />
                  </Card>
                </div>

                <div className='col-4 mb-5'>
                  <Card>
                    <PageSubTitle>The TRAX DAO</PageSubTitle>
                    <PageTitle>Community Owned</PageTitle>
                    <Title className='mb-5'>Contrax is a DAO controlled by the token holders. You decide its rewards, features, and direction.</Title>
                    <Button label='Learn More' />
                  </Card>
                </div>
              </div>
            </div>

            {/* feature section */}
            <div className='container'>
              <div className='row mt-5' >
                <Title>For All in DeFi</Title>
                <PageTitle>Contrax covers different DeFi needs</PageTitle>
              </div>
              <div className='row'>
                <div className='col-3 mb-5'>
                  <Card>
                    <Text size={24}>for</Text>
                    <PageSubTitle>DeFi Creators</PageSubTitle>
                    <Title className='mb-5'>In minutes, create your token on Arbitrum or Ethereum, then set
                    up ways to distbute, stake, farm, or swap your token within the dApp</Title>
                  </Card>
                </div>

                <div className='col-3 mb-5'>
                  <Card>
                    <Text size={24}>for</Text>
                    <PageSubTitle>Stakers</PageSubTitle>
                    <Title className='mb-5'>Contrax allows you stake and farm in Uniswap and custom pools, with 
                    auto-compounding rewards and earning additional TRAX rewards.</Title>
                  </Card>
                </div>

                <div className='col-3 mb-5'>
                  <Card>
                    <Text size={24}>For</Text>
                    <PageSubTitle>Traders</PageSubTitle>
                    <Title className='mb-5'>Contrax uses Uniswap to allow you to swap into freshly minted tokens in their first token distibution events.</Title>
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
