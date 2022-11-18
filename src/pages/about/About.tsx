import * as colors from '../../theme/colors';
import { StyledCard, StyledH1, StyledImage } from './About.styles';

import Navigationbar from '../../components/Navigationbar/Navigationbar';
import Footer from '../../components/footer/Footer';
import { H3, Link } from '../../components/text/Text';
import { Col, Container, Row } from '../../components/blocks/Blocks';
import { Image } from '../../components/image/Image';

import soheeb from '../../images/team/soheeb.jpeg';
import kj from '../../images/team/kj.jpeg';
import abbie from '../../images/team/abbie.jpeg';
import usman from '../../images/team/usman.jpeg';
import danyal from '../../images/team/danyal.jpeg';
import carson from '../../images/team/carson.jpeg';
import gianfranco from '../../images/team/gianfranco.jpeg';
import legal from '../../images/team/legal-team.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter-round.png';

export default function about() {
  return (
    <div style={{ backgroundColor: colors.white }}>
      <Navigationbar />
      <div style={{ background: colors.pageBgLight, paddingBottom: '2.5rem' }}>
        <Container className="video-section mt-4 mb-5 pb-3 text-center">
          <Row>
            <Col className="text-center mb-5 mt-5 pt-4">
              <StyledH1 color={colors.primary} size="3.4rem" lineHeight="5rem">
                What is Contrax?
              </StyledH1>
            </Col>
          </Row>
          <iframe
            width="60%"
            height="350"
            src="https://www.youtube.com/embed/-jH9GMOLXf4"
            title="Contrax explainer video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>

        <Container className="team-section">
          <Row>
            <Col className="text-center mt-5 mb-4 pb-3">
              <StyledH1 color={colors.primary} size="3.4rem" lineHeight="5rem">
                Meet the Team
              </StyledH1>
            </Col>
          </Row>
        </Container>

        <Container className="mt-4">
          <Row className="d-row justify-content-between">
            <StyledCard className="p-1 mb-4">
              <StyledImage src={soheeb} />
              <Row className="text-center mt-3">
                <H3 color={colors.primary}>Soheeb Aziz</H3>
              </Row>
              <Row className="text-center mt-1">
                <H3 color={colors.accentDark}>Co-Founder | Operations</H3>
              </Row>
              <Row>
                <Col className="text-center mt-2">
                  <Link
                    target="_blank"
                    link="https://www.linkedin.com/in/soheebaziz"
                  >
                    <Image className="mr-4" width="24px" src={linkedin} />
                  </Link>
                  <Link target="_blank" link="https://twitter.com/SoheebAziz">
                    <Image width="24px" src={twitter} />
                  </Link>
                </Col>
              </Row>
            </StyledCard>

            <StyledCard className="p-1 mb-4">
              <StyledImage src={kj} />
              <Row className="text-center mt-3">
                <H3 color={colors.primary}>KJ Magill</H3>
              </Row>
              <Row className="text-center mt-1">
                <H3 color={colors.accentDark}>Co-Founder | Engineering</H3>
              </Row>
              <Row>
                <Col className="text-center mt-2">
                  <Link
                    target="_blank"
                    link="https://www.linkedin.com/in/kjmagill"
                  >
                    <Image className="mr-4" width="24px" src={linkedin} />
                  </Link>
                  <Link target="_blank" link="https://twitter.com/kjmagill">
                    <Image width="24px" src={twitter} />
                  </Link>
                </Col>
              </Row>
            </StyledCard>

            <StyledCard className="p-1 mb-4">
              <StyledImage src={abbie} />
              <Row className="text-center mt-3">
                <H3 color={colors.primary}>Abigail Cameron</H3>
              </Row>
              <Row className="text-center mt-1">
                <H3 color={colors.accentDark}>Smart Contract Engineer</H3>
              </Row>
              <Row>
                <Col className="text-center mt-2">
                  <Link
                    target="_blank"
                    link="https://www.linkedin.com/in/abigailtcameron/"
                  >
                    <Image width="24px" src={linkedin} />
                  </Link>
                </Col>
              </Row>
            </StyledCard>

            <StyledCard className="p-1 mb-4">
              <StyledImage src={carson} />
              <Row className="text-center mt-3">
                <H3 color={colors.primary}>Carson Case</H3>
              </Row>
              <Row className="text-center mt-1">
                <H3 color={colors.accentDark}>Smart Contract Engineer</H3>
              </Row>
              <Row>
                <Col className="text-center mt-2">
                  <Link
                    target="_blank"
                    link="https://www.linkedin.com/in/carson-case-259b25149/"
                  >
                    <Image className="mr-4" width="24px" src={linkedin} />
                  </Link>
                  <Link target="_blank" link="https://twitter.com/CarsonCase7">
                    <Image width="24px" src={twitter} />
                  </Link>
                </Col>
              </Row>
            </StyledCard>

            <StyledCard className="p-1 mb-4">
              <StyledImage src={usman} />
              <Row className="text-center mt-4">
                <H3 color={colors.primary}>Usman Shamas</H3>
              </Row>
              <Row className="text-center mt-1">
                <H3 color={colors.accentDark}>Frontend Engineer</H3>
              </Row>
              <Row>
                <Col className="text-center mt-2">
                  <Link
                    target="_blank"
                    link="https://www.linkedin.com/in/usman-shamas56/"
                  >
                    <Image className="mr-4" width="24px" src={linkedin} />
                  </Link>
                  <Link
                    target="_blank"
                    link="https://twitter.com/m_usman_shamas"
                  >
                    <Image width="24px" src={twitter} />
                  </Link>
                </Col>
              </Row>
            </StyledCard>

            <StyledCard className="p-1 mb-4">
              <StyledImage src={danyal} />
              <Row className="text-center mt-3">
                <H3 color={colors.primary}>Danyal Ahmad</H3>
              </Row>
              <Row className="text-center mt-1">
                <H3 color={colors.accentDark}>Backend Engineer</H3>
              </Row>
              <Row>
                <Col className="text-center mt-2">
                  <Link
                    target="_blank"
                    link="https://www.linkedin.com/in/deenario/"
                  >
                    <Image width="24px" src={linkedin} />
                  </Link>
                </Col>
              </Row>
            </StyledCard>

            <StyledCard className="p-1 mb-4">
              <StyledImage src={gianfranco} />
              <Row className="text-center mt-3">
                <H3 color={colors.primary}>Jeff Gianfranco</H3>
              </Row>
              <Row className="text-center mt-1">
                <H3 color={colors.accentDark}>Strategic Advisor</H3>
              </Row>
              <Row>
                <Col className="text-center mt-2">
                  <Link
                    target="_blank"
                    link="https://www.linkedin.com/in/gianfranco-jeff-d-agostino-5611a520/"
                  >
                    <Image className="mr-4" width="24px" src={linkedin} />
                  </Link>
                  <Link target="_blank" link="https://twitter.com/riotaio">
                    <Image width="24px" src={twitter} />
                  </Link>
                </Col>
              </Row>
            </StyledCard>

            <StyledCard className="p-1 mb-4">
              <StyledImage src={legal} />
              <Row className="text-center mt-4">
                <H3 color={colors.primary}>Riveles Wahab LLP</H3>
              </Row>
              <Row className="text-center mt-1">
                <H3 color={colors.accentDark}>Legal Counsel</H3>
              </Row>
              <Row>
                <Col className="text-center mt-2">
                  <Link
                    target="_blank"
                    link="https://www.linkedin.com/company/riveles-wahab-llp/"
                  >
                    <Image width="24px" src={linkedin} />
                  </Link>
                </Col>
              </Row>
            </StyledCard>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
