import React from 'react'
import { Col, Row } from '../blocks/Blocks';
import { Desc } from "../text/Text";

export default function BottomBar() {
  return (
      <Row className="bottombar-design">
        <Col size='3'>
        </Col>
        <Col size='6' className="text-center">
          <Desc color={'#334A52'}>View website terms and conditions <a href = "https://pdfhost.io/v/bTVkDyPle_termsofuse" target="_blank" rel="noreferrer noopener">here</a>.</Desc>
        </Col>
      </Row>
  )
}
