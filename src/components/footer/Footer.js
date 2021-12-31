import React from 'react'
import { useLocation } from 'react-router-dom'
import BottomBar from '../bottomBar/BottomBar';
import { Col, Row } from '../blocks/Blocks';
import * as colors from '../../theme/colors';
import { StyledBox } from './Footer.styles';
import footerLogo from "../../images/logo-footer.png";
import discordLogo from "../../images/discord.png";
import twitterLogo from "../../images/twitter.png";
import { Image } from '../image/Image';
import Button from '../button/Button';

export default function Footer() {
  const location = useLocation();
  return (
    <div className="footer">
      <Row height='72px' />
      <StyledBox color={colors.accentDark} >
        <Row className="row">
          <Col size="6" >
            <Image src={footerLogo} width='565px' alt='contrax' />
          </Col>
          <Col size="6">
          </Col>
        </Row>
        <Row>
          <Col size="6">
            <Image src={discordLogo} alt='Discord' />
            <Image className='m-5 mt-3 mb-3' src={twitterLogo} alt='Twitter' />
          </Col>
          <Col size="6" className='text-right'>
            <Button primary size='sm' className='mt-3'>Get Started</Button>
          </Col>
        </Row>
      </StyledBox>
      {location === '' ?
        ''
        : (
          <BottomBar />
        )}
    </div>
  )
}
