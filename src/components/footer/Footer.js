import React from 'react'
import { useLocation } from 'react-router-dom'
import BottomBar from '../bottomBar/BottomBar';
import { Col, Row } from '../blocks/Blocks';
import * as colors from '../../theme/colors';
import { StyledBox } from './Footer.styles';
import footerLogo from "../../images/logo-footer.png";
import discordLogo from "../../images/discord.png";
import twitterLogo from "../../images/twitter.png";
import telegramLogo from "../../images/telegram.png";
import githubLogo from "../../images/github.png";
import mediumLogo from "../../images/medium.png";
import { Image } from '../image/Image';
// import Button from '../button/Button';

export default function Footer() {
  const location = useLocation();
  return (
    <div className="footer">
      <Row height='72px' />
      <StyledBox color={colors.accentDark} >
        <Row className="row">
          <Col size="6" >
            <Image src={footerLogo} alt='contrax' />
          </Col>
          <Col size="6">
          </Col>
        </Row>
        <Row>
          <Col size="6">
          <a href='https://discord.gg/rDdvyeWAtt'><Image src={discordLogo} alt='Discord' /></a>
            <a href='https://twitter.com/Contrax_Finance'><Image className='m-5 mt-3 mb-3' src={twitterLogo} alt='Twitter' /></a>
  
            <a href='https://t.me/Contrax'><Image src={telegramLogo} alt='Telegram' /></a> 
            <a href='https://medium.com/contrax-defi'><Image src={mediumLogo} alt='Medium' /></a> 
            <a href='https://github.com/Contrax-co'><Image src={githubLogo} alt='GitHub' /></a> 

          </Col>
          <Col size="6" className='text-right'>
            {/* <Button primary size='sm' className='mt-3'>Get Started</Button> */}
          </Col>
        </Row>
      </StyledBox>
      {location === '/' ?
        null
        : (
          <BottomBar />
        )}
    </div>
  )
}
