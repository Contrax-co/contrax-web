import React from 'react'
import { Desc, H1, H2, H3, Title } from '../text/Text'
import { useLocation } from 'react-router-dom'
import { Col, Row } from '../blocks/Blocks';
import { StyledHeader } from './Header.styles';
import * as colors from '../../theme/colors';
import { Image } from '../image/Image';
import headerBg from '../../images/banner-bg.svg';
import bannerImage from '../../images/dashboard-1.png';

export default function Header() {
  const location = useLocation();
  return (
    <>
      <StyledHeader fluid background={headerBg}>
        <div className="container h-100">
          <div className="row h-100">
            {location.pathname === '/dashboard' ? (
              <>
                <Col size='6' className="pt-3">
                  <Row className='mb-4 mt-4'><H1 color={colors.primary} className="mt-5 mb-5">Contrax Dashboard</H1></Row>
                  <Row className='pt-3'><H3 color={colors.white}> Net Worth</H3></Row>
                  <Row><H2 color={colors.white} className="mb-3">$6,905.51</H2></Row>
                  <Row height='92px' />
                </Col>
                <Col size='6' className='p-2'>
                  <Image src={bannerImage} width='491px' height='397px' /> 
                </Col>
              </>
            ) :
              <>
                <Col className="my-auto">
                  <H1 variant={'light'} className="fw-light text-center mt-5">Manage Token</H1>
                </Col>
                <Col className="my-auto">
                  <Desc variant={'light'}> Net Worth</Desc>
                  <Title variant={'light'} className="mb-3">$6,905.51</Title>
                </Col>
              </>
            }
          </div>
        </div>
      </StyledHeader>
      <Row height='62px' />
    </>
  )
}
