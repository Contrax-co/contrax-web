import React, { useEffect, useState } from 'react'
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
import swal from 'sweetalert';
const axios = require('axios')
export default function CompoundEarn() {
  const [volume, setVolume] = useState('active')
  const [tvl, setTvl] = useState('')
  const [liquidity, setLiquidity] = useState('')
  const [fees, setFees] = useState('')
  const [state, setState] = useState('volume')



  let swapsData = [
    {
      time: "2021/12/03 12:53:51",
      paidCurrencyMedia: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023",
      receiveCurrencyMedia: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=023",
      price: "ETH - DAI",
      apy: "0.008%",
      tvl: "0.48",
      deposite: "$50",
      depositeTokens: "25"
    }
  ]
  let usdData = [
   
    {
      time: "2021/12/03 12:53:51",
      paidCurrencyMedia: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=002",
      receiveCurrencyMedia: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=002",
      price: "USDC - Tether",
      apy: "0.008%",
      tvl: "0.48",
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

              <Col size="2"> <Image style={{ width: '20%', height: '20%' }} src={item.paidCurrencyMedia} /> <Image style={{ width: '20%', height: '20%' }} src={item.receiveCurrencyMedia} />
              </Col>
              <Col size="2"> {item.price} </Col>
              <Col size="2">
                APY<br />
                {item.apy}
              </Col>
              <Col size="1">
                tvl <br />
                {item.tvl}
              </Col>
              <Col size="2">
                Total Deposit  <br />
                {item.deposite}
              </Col>
              <Col size="1">
                <Button size='sm' onClick={() => {  swal("That functionality not connected ."); }}  >Harvest</Button>
              </Col>
              <Col size="2">
                <Button primary size='sm'  onClick={() => {   swal("That functionality not connected .");}} >Withdrawal</Button>
              </Col>
            </Row>
          ))
        }

{
          usdData.map((item, index) => (

            <Row className='compound-card'>

              <Col size="2"> <Image style={{ width: '20%', height: '20%' }} src={item.paidCurrencyMedia} /> <Image style={{ width: '20%', height: '20%' }} src={item.receiveCurrencyMedia} />
              </Col>
              <Col size="2"> {item.price} </Col>
              <Col size="2">
                APY<br />
                {item.apy}
              </Col>
              <Col size="1">
                tvl <br />
                {item.tvl}
              </Col>
              <Col size="2">
              
              </Col>
              <Col size="1">
                {/* <Button size='sm' onClick={() => { }} >Harvest</Button> */}
              </Col>
              <Col size="2">
                <Button primary size='sm' data-bs-toggle="modal" data-bs-target="#approvalModal" onClick={() => { }}  >Deposit</Button>
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