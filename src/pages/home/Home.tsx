import Navigationbar from '../../components/Navigationbar/Navigationbar';
import Banner from '../../components/Banner';
import Footer from '../../components/footer/Footer';
import * as colors from '../../theme/colors';
import { H1, H3, B1 } from '../../components/text/Text';
import Button from '../../components/button/Button';
import { StyledCard } from './Home.styles';
import { Block, Container, Row } from '../../components/blocks/Blocks';

export default function home() {
  return (
    <div style={{ backgroundColor: colors.white }}>
      <Navigationbar />
      <Banner />
      {/* benefits section */}
      <Row height="72px" />
      <Container className="">
        <Row className="d-row justify-content-between">
          <StyledCard className="p-1">
            <H3 color={colors.secondaryMideum}>Built on Arbitrum</H3>
            <Block className="mt-2">
              <H1 color={colors.accentDark}>Secure & Scalable</H1>
            </Block>
            <Block className="mt-4">
              <B1 className="mb-5">
                Arbitrum is secured by Ethereum, and saves gas fees by moving
                computations and data storage off of the main chain.
              </B1>
            </Block>
            <Button size={'sm'} primary className="mt-4" label="Learn More" />
          </StyledCard>

          <StyledCard className="p-1">
            <H3 color={colors.secondaryMideum}>No-code Design</H3>
            <Block className="mt-2">
              <H1 color={colors.accentDark}>Highly Accessible</H1>
            </Block>
            <Block className="mt-4">
              <B1 className="mb-5">
                Designed for anyone to use. Create and manage projects on
                Ethereum and Arbitrum One with no coding necessary.
              </B1>
            </Block>
            <Button size={'sm'} primary className="mt-4" label="Learn More" />
          </StyledCard>

          <StyledCard className="p-1">
            <H3 color={colors.secondaryMideum}>DAO-Controlled</H3>
            <Block className="mt-2">
              <H1 color={colors.accentDark}>Community-Owned</H1>
            </Block>
            <Block className="mt-4">
              <B1 className="mb-5">
                TRAX token holders can vote on future product updates, features,
                farming incentives, treasury allocations &amp; more!
              </B1>
            </Block>
            <Button size={'sm'} primary className="mt-4" label="Learn More" />
          </StyledCard>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
