import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link, PageTitle, Title, Desc } from '../text/Text';
import BottomBar from '../bottomBar/BottomBar';
import { Col, Container, Row } from '../blocks/Blocks';

export default function Footer() {
  const location = useLocation();
  return (
    <div className="footer">
      <Container className="container">
        <Row className="row">
          <Col size="4" >
            <PageTitle>Contrax</PageTitle>
            <Title>Govern better, together</Title>
          </Col>
          <Col size="4">
            <Title>Affiliate Hardware Wallets</Title>
            <Row>
              <Link text={'Ledger'} link={'#'} />
            </Row>
            <Row>
              <Link text={'Bitbox'} link={'#'} />
            </Row>
            <Row>
              <Link text={'Ether Cards'} link={'#'} />
            </Row>
            <Row>
              <Link text={'Trezor'} link={'#'} />
            </Row>
          </Col>
          <Col size="4">
            <Title>Love Contrax?</Title>
            <Desc>Help us keep Contrax free and open-source, your donations go a long way towards making that possible.</Desc>
            <Row>
              <Link text={'ETH Donation'} link={'#'} />
            </Row>
            <Row>
              <Link text={'BTC Donation'} link={'#'} />
            </Row>
          </Col>
        </Row>
      </Container>
      {location === '/' ?
        null
        : (
          <BottomBar />
        )}
    </div>
  )
}
