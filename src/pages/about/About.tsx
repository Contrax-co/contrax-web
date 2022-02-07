import Navigationbar from '../../components/Navigationbar/Navigationbar';
import Footer from '../../components/footer/Footer';
import * as colors from '../../theme/colors';
import { H3, Link } from '../../components/text/Text';
import { StyledCard, StyledH1, StyledImage } from './About.styles';
import { Col, Container, Row } from '../../components/blocks/Blocks';
import logo from "../../images/logo-4x.png";
import { Image } from '../../components/image/Image';
import member1 from '../../images/team/member-1.jpeg';
import member2 from '../../images/team/member-2.jpeg';
import member3 from '../../images/team/member-3.jpeg';
import member4 from '../../images/team/member-4.jpeg';
import member5 from '../../images/team/member-5.jpeg';
import member6 from '../../images/team/member-6.jpeg';
import member7 from '../../images/team/member-7.jpeg';
import linkedin from '../../images/linkedin.png';
import twiter from '../../images/twitter-round.png';

export default function about() {

  return (
    <div style={{ backgroundColor: colors.white }}>
      <Navigationbar />
      <div style={{ background: colors.pageBgLight, paddingBottom: '2.5rem' }}>
        <Container>
          <Image src={logo} width="354px" />
          <Row>
            <StyledH1 color={colors.primary} size='3.8rem' lineHeight='5rem'>
              Permissionless. Scalable. <br /> Community-led DeFi.
            </StyledH1>
          </Row>
        </Container>
      </div>
      {/* benefits section */}
      <Row height='72px' />

      <Container className=''>
        <Row>
          <Col className="text-center mb-4">
            <H3>Meet the Team</H3>
          </Col>
        </Row>
      </Container>

      <Container className='mt-4'>
        <Row className='d-row justify-content-between'>
          <StyledCard className='p-1'>
            <StyledImage src={member1} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Soheeb Aziz</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Co-founder | Operations</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Link target="_blank" link='https://www.linkedin.com/in/soheebaziz'>
                  <Image className='mr-4' width="24px" src={linkedin} />
                </Link>
                <Link target="_blank" link='https://twitter.com/SoheebAziz'>
                  <Image width="24px" src={twiter} />
                </Link>
              </Col>
            </Row>
          </StyledCard>

          <StyledCard className='p-1'>
            <StyledImage src={member2} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>KJ Magill</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Co-founder | Engineering</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Link target="_blank" link='https://www.linkedin.com/in/kjmagill'>
                  <Image className='mr-4' width="24px" src={linkedin} />
                </Link>
                <Link target="_blank" link='https://twitter.com/kjmagill'>
                  <Image width="24px" src={twiter} />
                </Link>
              </Col>
            </Row>
          </StyledCard>

          <StyledCard className='p-1'>
            <StyledImage src={member6} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Danyal Ahmad</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Back-End Developer</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Link target="_blank" link='https://www.linkedin.com/in/deenario/'>
                  <Image width="24px" src={linkedin} />
                </Link>
              </Col>
            </Row>
          </StyledCard>

          <StyledCard className='p-1'>
            <StyledImage src={member3} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Carson Case</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Engineering | Smart Contracts</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Link target="_blank" link='https://www.linkedin.com/in/carson-case-259b25149/'>
                  <Image className='mr-4' width="24px" src={linkedin} />
                </Link>
                <Link target="_blank" link='https://twitter.com/CarsonCase7'>
                  <Image width="24px" src={twiter} />
                </Link>
              </Col>
            </Row>
          </StyledCard>
        
        </Row>
        
        <Row className='text-center d-block'>
          <StyledCard className='p-1 mr-4'>
            <StyledImage src={member4} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Gianfranco D'agostino</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Strategic Advisor</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Link target="_blank" link='https://www.linkedin.com/in/gianfranco-jeff-d-agostino-5611a520/'>
                  <Image className='mr-4' width="24px" src={linkedin} />
                </Link>
                <Link target="_blank" link='https://twitter.com/riotaio'>
                  <Image width="24px" src={twiter} />
                </Link>
              </Col>
            </Row>
          </StyledCard>

          <StyledCard className='p-1 mr-4 ml-4'>
            <StyledImage src={member7} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Sidney Powell</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Strategic Advisor</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Link target="_blank" link='https://www.linkedin.com/in/sidneypowell'>
                  <Image className='mr-4' width="24px" src={linkedin} />
                </Link>
                <Link target="_blank" link='https://twitter.com/sidbpowell'>
                  <Image width="24px" src={twiter} />
                </Link>
              </Col>
            </Row>
          </StyledCard>

          <StyledCard className='p-1 ml-4'>
            <StyledImage src={member5} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>SavicFoley P.C.</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Legal Team</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Link target="_blank" link='https://www.linkedin.com/company/savicfoley/'>
                  <Image width="24px" src={linkedin} />
                </Link>
              </Col>
            </Row>
          </StyledCard>
        </Row>
        <Row>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}
