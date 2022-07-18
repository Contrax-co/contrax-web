import React, { useState } from 'react';
import { Col, Row } from '../../../components/blocks/Blocks';
import Button from '../../../components/button/Button';
import { Image } from '../../../components/image/Image';
import { Modal } from '../../../components/modal/Modal';
import { Text } from '../../../components/text/Text';
import Slider from 'react-rangeslider'

enum SliderPosition {
  'Low' = 25,
  'Medium' = 50,
  'High' = 75,
  'VeryHigh' = 100,
}

interface Props {
  totalTokens: number;
}

const ApprovalModal = ({totalTokens}: Props) => {

  const [view, setView] = useState(1);
  const [position, setPosition] = useState(SliderPosition.Low);

  return (
    <Modal id="approvalModal"
      title="Deposite"
      hasOkayButton={false}>
      <div className='slider' style={{ paddingLeft: '6%', paddingRight: '6%' }}>
        <Row style={{ flex: 1, textAlign: 'center' }}>
          <Col>
            <Image style={{ width: 32, height: 32 }} src={"https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp"} alt='' />
            <Image style={{ width: 32, height: 32 }} src={"https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp"} alt='' />
          </Col>
        </Row>
        <Row style={{ marginTop: '4%', textAlign: 'center' }}>
          <Col style={{ fontSize: 12, fontWeight: 'bold' }}>
            USDT - USDC
          </Col>
        </Row>
        <Row className='compound-card' style={{marginTop: '3%', marginBottom: '8%', paddingTop: 15, paddingBottom: 15}}>
          <div style={{fontSize:24, fontWeight: 'bold', textAlign:'center', justifyContent: 'center', alignItems:'center'}}>
            {totalTokens}
            <Image style={{ width: 24, height: 24, marginLeft: 5, }} src={"https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp"} alt='' />
          </div>
          <div style={{fontSize:12, color: '#9CA3AF' ,textAlign:'center', justifyContent: 'center', alignItems:'center'}}>
            Available {totalTokens}
          </div>
        </Row>
        <Slider
          min={25}
          max={100}
          step={25}
          value={position}
          orientation={"horizontal"}
          className="compound-range-slider"
        />
        <Row style={{ marginTop: '3%', marginBottom: '10%' }}>
          <Col>
            <Button style={{ borderRadius: 3 }} primary={position === SliderPosition.Low} size='sm' onClick={() => { setPosition(SliderPosition.Low) }} >25%</Button>
          </Col>
          <Col>
            <Button style={{ borderRadius: 3 }} primary={position === SliderPosition.Medium} size='sm' onClick={() => { setPosition(SliderPosition.Medium) }} >50%</Button>
          </Col>
          <Col>
            <Button style={{ borderRadius: 3 }} primary={position === SliderPosition.High} size='sm' onClick={() => { setPosition(SliderPosition.High) }} >75%</Button>
          </Col>
          <Col>
            <Button style={{ borderRadius: 3 }} primary={position === SliderPosition.VeryHigh} size='sm' onClick={() => { setPosition(SliderPosition.VeryHigh) }} >MAX</Button>
          </Col>
        </Row>
        <Row style={{ marginTop: '3%' }}>
          <Col>
            <Button style={{ paddingLeft: '20%', paddingRight: '20%' }} primary size='sm' onClick={() => { setView(2) }} >Approve</Button>
          </Col>
          <Col style={{ textAlign: 'right' }}>
            <Button style={{ paddingLeft: '20%', paddingRight: '20%' }} disabled={view === 1} primary size='sm' onClick={() => { }} >Deposite</Button>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{`${view}/2`}</Text>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default ApprovalModal;