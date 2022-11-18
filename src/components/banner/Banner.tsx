import Button from '../button/Button';
import { H3, H2, H1 } from '../text/Text';
import * as colors from '../../theme/colors';
import { Col, Container, Row } from '../blocks/Blocks';
import { Link } from 'react-router-dom';
import './Banner.css';

import { Image } from '../image/Image';
import banner1 from '../../images/banner-1.png';
import arbitrum from '../../images/arbitrum_grayscaled.png';
import arbiscan from '../../images/arbiscan_grayscaled.png';
import sushiswap from '../../images/sushiswap_grayscaled.png';

export default function Banner() {
  return (
    <div style={{ background: colors.pageBgLight, paddingBottom: '1rem' }}>
      <header className="masthead home-background">
        <Container className="h-100">
          <Row>
            <Col size="7" className="my-auto">
              <p className={'mt-4 mb-2'}>
                <H2 color={colors.secondaryMedium}>
                  Open-Source. Permissionless.
                </H2>
              </p>
              <H1 color={colors.primary} size="4.4rem" lineHeight="4.7rem">
                Let Your Crypto Work For You
              </H1>
              <Row>
                <H3
                  color={colors.secondaryDark}
                  size="1.55rem"
                  className="mt-3 mb-1"
                >
                  Auto-compounding vaults for "real yield" assets
                </H3>
              </Row>
              <Image
                src={arbitrum}
                className="mr-4 mt-3"
                width="140"
                height="27"
                alt="Arbitrum"
              />
              <Image
                src={sushiswap}
                className="mr-4 mt-3"
                width="125"
                height="22"
                alt="Sushiswap"
              />
              <Image
                src={arbiscan}
                className="mr-4 mt-3"
                width="140"
                height="27"
                alt="Arbiscan"
              />
              <Row className=""></Row>
              <Button
                size="sm"
                className="mx-2 mb-3 mt-4 p-3 px-4 radius-change"
                primary
                label={'Explore Docs'}
                onClick={() =>
                  window.open('https://docs.contrax.finance/', '_blank')
                }
              />
              <Link to="/about">
                <Button
                  size="sm"
                  className="mx-2 mb-3 mt-4 p-3 px-4 radius-change"
                  primary
                  label={'About Us'}
                />
              </Link>
            </Col>
            <Col size="5" className="pt-5">
              <Image
                src={banner1}
                alt="banner"
                className="mt-3 pt-4 hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}
