import React, { useState } from 'react'
import BottomBar from '../../components/bottomBar/BottomBar'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import BarChart from '../../components/chart/BarChart';
import LineChart from '../../components/chart/LineChart';
import Card from '../../components/card/Card';
import { Title, B1, H2, Link, H3 } from "../../components/text/Text";
import Button from '../../components/button/Button';
import PieChart from '../../components/chart/PieChart';
import { Col, Container, Row } from '../../components/blocks/Blocks';
import { Image } from '../../components/image/Image';
import ethIcon from '../images/eth-round-icon.png';
import usdcIcon from '../images/USDC-round-icon.png';
import * as colors from '../../theme/colors';
import { Badge } from '../../components/badge/Badge';
import Icon from '../../components/icon/Icon';
import ApprovalModal from './components/ApprovalModal';

export default function CompoundEarn() {
  const [volume, setVolume] = useState('active')
  const [tvl, setTvl] = useState('')
  const [liquidity, setLiquidity] = useState('')
  const [fees, setFees] = useState('')
  const [state, setState] = useState('volume')

  let swapsData = [
    {
      time: "2021/12/03 12:53:51",
      paidCurrencyMedia: "https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp",
      receiveCurrencyMedia: "https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp",
      price: "USDT - USDC",
      apy: "0.008%",
      tvl: "0.48 USDC",
      deposite: "$50",
      depositeTokens: "25"
    },
    {
      time: "2021/12/02 20:45:21",
      paidCurrencyMedia: "https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp",
      receiveCurrencyMedia: "https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp",
      price: "USDC - USDT",
      apy: "0.008%",
      tvl: "9.59 USDT",
      deposite: "$50",
      depositeTokens: "25"
    }
  ]
  return (
    <div>
      <Navigationbar />
      <Container className=' mt-4 pt-1'>
        {
          swapsData.map((item, index) => (
            <Row className='compound-card'>
              <Col size="1">
                <Image src={item.paidCurrencyMedia} alt='' />
                <Image src={item.receiveCurrencyMedia} alt='' />
              </Col>
              <Col size="2">{item.price}</Col>
              <Col size="2">
                APY<br />
                {item.apy}
              </Col>
              <Col size="2">
                TYL<br />
                {item.tvl}
              </Col>
              <Col size="2">
                Deposite Amount <br />
                <b>{item.deposite}</b> {`(${item.depositeTokens} tokens)`}
              </Col>
              <Col size="1">
                <Button size='sm' onClick={() => { }} >Harvest</Button>
              </Col>
              <Col size="1">
                <Button primary size='sm' data-bs-toggle="modal" data-bs-target="#approvalModal" onClick={() => { }} >Withdrawal</Button>
              </Col>
            </Row>
          ))
        }
        <ApprovalModal totalTokens={8.0456345} />
      </Container>
      <BottomBar />
    </div>
  )
}