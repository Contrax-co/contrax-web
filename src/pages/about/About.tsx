import Navigationbar from '../../components/Navigationbar/Navigationbar';
import Footer from '../../components/footer/Footer';
import * as colors from '../../theme/colors';
import { H3 } from '../../components/text/Text';
import { StyledCard, StyledH1, StyledImage } from './About.styles';
import { Col, Container, Row } from '../../components/blocks/Blocks';
import logo from "../../images/logo-4x.png";
import { Image } from '../../components/image/Image';
import member1 from '../../images/team/member-1.png';
import member2 from '../../images/team/member-2.png';
import member3 from '../../images/team/member-3.png';
import member4 from '../../images/team/member-4.png';
import member5 from '../../images/team/member-5.png';
import member6 from '../../images/team/member-6.png';
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
            <StyledImage src={member6} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Kris Marszalek</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>CEO</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Image className='mr-4' width="24px" src={linkedin} />
                <Image width="24px" src={twiter} />
              </Col>
            </Row>
          </StyledCard>

          <StyledCard className='p-1'>
            <StyledImage src={member1} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Diana Pires</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>CTO</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Image className='mr-4' width="24px" src={linkedin} />
                <Image width="24px" src={twiter} />
              </Col>
            </Row>
          </StyledCard>

          <StyledCard className='p-1'>
            <StyledImage src={member2} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Rob Markson</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Project Manager</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Image className='mr-4' width="24px" src={linkedin} />
                <Image width="24px" src={twiter} />
              </Col>
            </Row>
          </StyledCard>

          <StyledCard className='p-1'>
            <StyledImage src={member3} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Johna Sky</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Project Manager</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Image className='mr-4' width="24px" src={linkedin} />
                <Image width="24px" src={twiter} />
              </Col>
            </Row>
          </StyledCard>
        </Row>
        <Row>

          <StyledCard className='p-1 mr-4'>
            <StyledImage src={member4} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Johna Sky</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Project Manager</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Image className='mr-4' width="24px" src={linkedin} />
                <Image width="24px" src={twiter} />
              </Col>
            </Row>
          </StyledCard>

          <StyledCard className='p-1 ml-4'>
            <StyledImage src={member5} />
            <Row className="text-center mt-3">
              <H3 color={colors.primary}>Johna Sky</H3>
            </Row>
            <Row className="text-center mt-1">
              <H3 color={colors.accentDark}>Project Manager</H3>
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Image className='mr-4' width="24px" src={linkedin} />
                <Image width="24px" src={twiter} />
              </Col>
            </Row>
          </StyledCard>

        </Row>
      </Container>

      <Footer />
    </div>
  )
}
