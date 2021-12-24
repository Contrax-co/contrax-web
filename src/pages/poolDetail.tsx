import React, { useState } from 'react'
import BottomBar from '../components/bottomBar/BottomBar'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import BarChart from '../components/chart/BarChart';
import LineChart from '../components/chart/LineChart';
import Card from '../components/card/Card';
import { Title, B1, H2, Link, H3 } from "../components/text/Text";
import Button from '../components/button/Button';
import PieChart from '../components/chart/PieChart';
import { Col, Container, Row } from '../components/blocks/Blocks';
import { Image } from '../components/image/Image';
import ethIcon from '../images/eth-round-icon.png';
import usdcIcon from '../images/USDC-round-icon.png';
import * as colors from '../theme/colors';
import { Badge } from '../components/badge/Badge';
import Icon from '../components/icon/Icon';

export default function PoolDetail() {
  const [volume, setVolume] = useState('active')
  const [tvl, setTvl] = useState('')
  const [liquidity, setLiquidity] = useState('')
  const [fees, setFees] = useState('')
  const [state, setState] = useState('volume')
  const [ChartData, setChartData] = useState([
    ["Date / Time", "Price"],
    ["09:40 AM", 22.4],
    ["09:45 AM", 13.5],
    ["09:49 AM", 19.9],
    ["10:14 AM", 25],
    ["10:44 AM", 21],
    ["10:59 AM", 28],
    ["11:36 AM", 14],
  ])
  function changeState(state: any) {
    setState(state)
    if (state === 'volume') {
      setVolume('active');
      setTvl('');
      setLiquidity('');
      setFees('');
      setChartData([
        ["Date / Time", "Price"],
        ["09:40 AM", 22.4],
        ["09:45 AM", 13.5],
        ["09:49 AM", 19.9],
        ["10:14 AM", 25],
        ["10:44 AM", 21],
        ["10:59 AM", 28],
        ["11:36 AM", 14],
      ])
    }
    if (state === 'tvl') {
      setVolume('');
      setTvl('active');
      setLiquidity('');
      setFees('');
      setChartData([
        ["Date / Time", "Price"],
        ["9/11/21 10:23 AM", 12.4],
        ["10/11/21 12:45 PM", 33.5],
        ["11/11/21 09:49 AM", 23.9],
        ["12/11/21 10:14 AM", 18],
        ["13/11/21 10:44 AM", 24],
        ["14/11/21 10:59 AM", 28],
        ["15/11/21 11:36 AM", 15],
      ])
    }
    if (state === 'liquidity') {
      setVolume('');
      setTvl('');
      setLiquidity('active');
      setFees('');
      setChartData([
        ["Date / Time", "Price"],
        ["1/11/21 10:23 AM", 12.4],
        ["2/11/21 12:45 PM", 33.5],
        ["4/11/21 09:49 AM", 23.9],
        ["6/11/21 10:14 AM", 18],
        ["10/11/21 10:44 AM", 24],
        ["11/11/21 10:59 AM", 28],
        ["14/11/21 11:36 PM", 15],
        ["16/11/21 12:36 AM", 24],
        ["17/11/21 01:36 AM", 13],
        ["19/11/21 03:36 PM", 27],
        ["21/11/21 11:33 PM", 35],
        ["23/11/21 08:36 PM", 38],
        ["24/11/21 10:36 AM", 24],
        ["26/11/21 05:36 PM", 42],
        ["27/11/21 09:36 PM", 41],
      ])
    }
    if (state === 'fees') {
      setVolume('');
      setTvl('');
      setLiquidity('');
      setFees('active');
      setChartData([
        ["Date / Time", "Price"],
        ["1/11/21 10:23 AM", 12.4],
        ["2/11/21 12:45 PM", 33.5],
        ["4/11/21 09:49 AM", 23.9],
        ["6/11/21 10:14 AM", 18],
        ["10/11/21 10:44 AM", 24],
        ["11/11/21 10:59 AM", 28],
        ["14/11/21 11:36 PM", 15],
        ["16/11/21 12:36 AM", 24],
        ["17/11/21 01:36 AM", 13],
        ["19/11/21 03:36 PM", 27],
        ["27/11/21 09:36 PM", 41],
      ])
    }
  }
  let poolData = {
    poolUrl: 'https://kovan.etherscan.io/address/0x00568c59aa94fafbdfce81d1e72fc96c8fc4b85c',
    poolAddress: '0x00568c59aa94fafbdfce81d1e72fc96c8fc4b85c',
    poolType: 'Public',
    feeRate: '0.36%',
    liquidityName1: 'TT',
    liquidityValue1: 0,
    liquidityName2: 'WETH',
    liquidityValue2: 0,
    volume24H: '678,987'
  }
  let poolChartDataList = [["36,408,389.5732 USDC (84.46%)", "6,691,425.1753 USDT (15.54%)"], ["36,408,389.5732 USDC (84.46%)", 36408389.5732], ["6,691,425.1753 USDT (15.54%)", 6691425.1753]]
  let swapsData = [
    {
      time: "2021/12/03 12:53:51",
      traderAddress: "0x30c5312d9cf0d873994f000e72f1cbf561d0209c",
      traderAddressUrl: "https://etherscan.io/address/0x30c5312d9cf0d873994f000e72f1cbf561d0209c",
      paidCurrency: "6,000 USDT",
      paidCurrencyMedia: "https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp",
      receiveCurrency: "6,004.24 USDC",
      receiveCurrencyMedia: "https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp",
      price: "1 USDT = 1 USDC",
      feeRate: "0.008%",
      fee: "0.48 USDC"
    },
    {
      time: "2021/12/02 20:45:21",
      traderAddress: "0x2b6f908bf9082ad39adb27c04e88adfec8f58110",
      traderAddressUrl: "https://etherscan.io/address/0x2b6f908bf9082ad39adb27c04e88adfec8f58110",
      paidCurrency: "119,999.99 USDC",
      paidCurrencyMedia: "https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp",
      receiveCurrency: "119,893.05 USDT",
      receiveCurrencyMedia: "https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp",
      price: "1 USDC = 0.99 USDT",
      feeRate: "0.008%",
      fee: "9.59 USDT"
    }
  ]
  let liquidityProviderData = [
    {
      liquidityProviderAddress: "0x30c5312d9cf0d873994f000e72f1cbf561d0209c",
      liquidityProviderAddressUrl: "https://etherscan.io/address/0x30c5312d9cf0d873994f000e72f1cbf561d0209c",
      liquiditySuppliedPaidCurrency: "8,218,322.4856 USDT",
      liquiditySuppliedPaidCurrencyMedia: "https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp",
      liquiditySuppliedReceiveCurrency: "9,399,065.4253 USDC",
      liquiditySuppliedReceiveCurrencyMedia: "https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp",
      value: "$17,624,011.87	",
      share: "40.87%",
    },
    {
      liquidityProviderAddress: "0x10bf1dcb5ab7860bab1c3320163c6dddf8dcc0e4",
      liquidityProviderAddressUrl: "https://etherscan.io/address/0x10bf1dcb5ab7860bab1c3320163c6dddf8dcc0e4",
      liquiditySuppliedPaidCurrency: "0 USDT",
      liquiditySuppliedPaidCurrencyMedia: "https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp",
      liquiditySuppliedReceiveCurrency: "4,090,763.46 USDC",
      liquiditySuppliedReceiveCurrencyMedia: "https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp",
      value: "$4,090,763.46",
      share: "9.48%",
    }
  ]
  return (
    <div>
      <Navigationbar />
      <Container className=' mt-4 pt-1'>
        <Row className="my-4">
          <Col size='8'>
            <Row className="mb-3">
              <Col size="6" >
                <Col className='align-items-center'>
                  <Image height='34' alt='ethIcon' src={ethIcon} />
                  <Image height='34' alt='usdcIcon' src={usdcIcon} />
                  &nbsp; &nbsp; <B1 color={colors.secondaryMideum}> ETH / USDC</B1>
                </Col>
                <Row><H2>ETH / USDC</H2></Row>
                <Row><B1 color={colors.accentDark}>+63.77 USDC (+1.47%) <B1 color={colors.secondaryMideum}>Past 24 Hours</B1></B1></Row>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col size='12'>
                <ul className="nav nav-pills float-lg-end mt-4">
                  <li className="nav-item">
                    <Button size='sm' primary={volume} onClick={() => changeState("volume")}>Volume</Button>
                  </li>
                  <li className="nav-item">
                    &nbsp; &nbsp; <Button size='sm' primary={tvl} onClick={() => changeState("tvl")}>TVL</Button>
                  </li>
                  <li className="nav-item">
                    &nbsp; &nbsp; <Button size='sm' primary={liquidity} onClick={() => changeState("liquidity")}>Liquidity</Button>
                  </li>
                  <li className="nav-item">
                    &nbsp; &nbsp; <Button size='sm' primary={fees} onClick={() => changeState("fees")}>Fees</Button>
                  </li>
                </ul>
              </Col>
            </Row>
            {state === 'tvl' ? (
              <LineChart chartData={ChartData} />
            ) : (
              <BarChart chartData={ChartData} />
            )
            }
          </Col>
          <Col size='4' className='pt-3'>
            <Card className='mt-3 border-0' background={colors.secondaryLight}>
              <span>
                <Link link={poolData.poolUrl} target='_blank' rel="noreferrer">
                  <B1>{poolData.poolAddress.substring(0, 6)}...{poolData.poolAddress.substring(38, 42)} &nbsp;</B1>
                  <i className='fa fa-external-link' aria-hidden="true"></i>
                </Link>
                <Badge className="float-end">{poolData.poolType}</Badge>
              </span>
              <Row className="row my-4">
                <Col><H3>My Pool Analysis</H3></Col>
                <Row className="row">
                  <Col className='d-flex flex-column align-items-center'>
                    <Row className='mb-3 mt-5'><Icon name="fa-chart-bar fa-2x faround"></Icon></Row>
                    <Row><B1 bold>24</B1></Row>
                    <Row><B1 color={colors.accentDark}>Traders (24H)</B1></Row>
                  </Col>
                  <Col className='d-flex flex-column align-items-center'>
                    <Row className='mb-3 mt-5'><Icon name="fa-briefcase fa-2x faround"></Icon></Row>
                    <Row><B1 bold>$43.1M</B1></Row>
                    <Row><B1 color={colors.accentDark}>Total Liquidity</B1></Row>
                  </Col>
                </Row>
                <Row>
                  <Col className='d-flex flex-column align-items-center'>
                    <Row className='mb-3 mt-5'><Icon name="fa-chart-line fa-2x faround"></Icon></Row>
                    <Row><B1 bold>$22.43M</B1></Row>
                    <Row><B1 color={colors.accentDark}>Volume</B1></Row>
                  </Col>
                  <Col className='d-flex flex-column align-items-center'>
                    <Row className='mb-3 mt-5'><Icon name="fa-donate fa-2x faround"></Icon></Row>
                    <Row><B1 bold>$1.79K</B1></Row>
                    <Row><B1 color={colors.accentDark}>Fees (24H)</B1></Row>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <B1 bold >Total Liquidity</B1>
                  <Col size='12' className="my-2">
                    <PieChart chartData={poolChartDataList} chartId={'1'} />
                  </Col>
                </Row>
              </Row>
              <Row>
                <Button primary label='Edit Liquidity' />
              </Row>
            </Card>
          </Col>
        </Row>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="parameters-tab" data-bs-toggle="tab" data-bs-target="#parameters" type="button" role="tab" aria-controls="parameters" aria-selected="true">
              <B1 color={colors.primary}>Parameters</B1>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="swaps-tab" data-bs-toggle="tab" data-bs-target="#swaps" type="button" role="tab" aria-controls="swaps" aria-selected="false">
              <B1 color={colors.primary}>Swaps</B1>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="liquidity-providers-tab" data-bs-toggle="tab" data-bs-target="#liquidity-providers" type="button" role="tab" aria-controls="liquidity-providers" aria-selected="false">
              <B1 color={colors.primary}>Liquidity Providers</B1>
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="parameters" role="tabpanel" aria-labelledby="parameters-tab">
            <Row className="mt-3">
              <Col size='6' className="borderRight mt-2">
                <Row className="my-3">
                  <Col size='4' className="my-auto">
                    <B1 value={'Total Swap Volume'} variant={'dark'} />
                  </Col>
                  <Col size="8">
                    <Title value={'$10,576,241,986.55'} variant={'dark'} />
                    <B1>10,575,363,434 USDT
                      <Image src="https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp" alt='' className="ms-1" /> / 10,577,149,605 USDC
                      <Image src="https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp" alt='' className="ms-1" />
                    </B1>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col size='4' className="my-auto">
                    <B1 value={'Total Swap Fee'} variant={'dark'} />
                  </Col>
                  <Col size="8">
                    <Title value={'$996,650.94'} variant={'dark'} />
                    <B1>499,733.37 USDT
                      <Image src="https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp" alt='' className="ms-1" /> / 496,514.28 USDC
                      <Image src="https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp" alt='' className="ms-1" />
                    </B1>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col size='4' className="my-auto">
                    <B1 value={'Total Number of Traders'} variant={'dark'} />
                  </Col>
                  <Col size="8">
                    <Title value={'9,606'} variant={'dark'} />
                  </Col>
                </Row>
              </Col>
              <Col size='6' >
                <Row className="my-3">
                  <Col size='4' className="my-auto">
                    <B1 value={'Creator'} variant={'dark'} />
                  </Col>
                  <Col size='8'>
                    <Link link={poolData.poolUrl} target='_blank' rel="noreferrer">
                      {poolData.poolAddress.substring(0, 6)}...{poolData.poolAddress.substring(38, 42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i>
                    </Link>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col size='4' className="my-auto">
                    <B1 value={'Created'} variant={'dark'} />
                  </Col>
                  <Col size='8'>
                    <B1 value={'2020/10/21 22:54:32'} variant={'dark'} />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col size='4' className="my-auto">
                    <B1 value={'Fee Rate'} variant={'dark'} />
                  </Col>
                  <Col size='8'>
                    <B1 value={'0.01%'} variant={'dark'} />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col size='4' className="my-auto">
                    <B1 value={'Slippage Coefficient'} variant={'dark'} />
                  </Col>
                  <Col size='8'>
                    <B1 value={'0.0001'} variant={'dark'} />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col size='4' className="my-auto">
                    <B1 value={'Guide Price'} variant={'dark'} />
                  </Col>
                  <Col size='8'>
                    <B1 value={'1'} variant={'dark'} />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col size='4' className="my-auto">
                    <B1 value={'Equilibrium target'} variant={'dark'} />
                  </Col>
                  <Col size='8'>
                    <Row>
                      <B1>0 USDT
                        <Image src="https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp" alt='' className="ms-1" />
                      </B1>
                    </Row>
                    <Row>
                      <B1>0 USDC
                        <Image src="https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp" alt='' className="ms-1" />
                      </B1>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="tab-pane fade table-responsive" id="swaps" role="tabpanel" aria-labelledby="swaps-tab">
            <table className="table table-hover my-4">
              <thead>
                <tr className="table-light">
                  <th>Time</th>
                  <th>Trader</th>
                  <th>Paid</th>
                  <th>Receive</th>
                  <th>Price</th>
                  <th>Fee Rate</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                {
                  swapsData.map((item, index) => (
                    <tr>
                      <td>{item.time}</td>
                      <td> <span> <Link link={item.traderAddressUrl} target='_blank' rel="noreferrer"> {item.traderAddress.substring(0, 6)}...{item.traderAddress.substring(38, 42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i> </Link> </span> </td>
                      <td> <span> <Image src={item.paidCurrencyMedia} alt='' /> {item.paidCurrency} </span> </td>
                      <td> <span> <Image src={item.receiveCurrencyMedia} alt='' /> {item.receiveCurrency} </span> </td>
                      <td>{item.price}</td>
                      <td>{item.feeRate}</td>
                      <td>{item.fee}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="tab-pane fade table-responsive" id="liquidity-providers" role="tabpanel" aria-labelledby="liquidity-providers">
            <table className="table table-hover my-4">
              <thead>
                <tr className="table-light">
                  <th>Liquidity Provider</th>
                  <th>Liquidity Supplied</th>
                  <th>Value (USD)</th>
                  <th>Share</th>
                </tr>
              </thead>
              <tbody>
                {
                  liquidityProviderData.map((item, index) => (
                    <tr>
                      <td> <span> <Link link={item.liquidityProviderAddressUrl} target='_blank' rel="noreferrer"> {item.liquidityProviderAddress.substring(0, 6)}...{item.liquidityProviderAddress.substring(38, 42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i> </Link> </span> </td>
                      <td>
                        <span> <Image src={item.liquiditySuppliedPaidCurrencyMedia} alt='' /> {item.liquiditySuppliedPaidCurrency} </span>
                        <br />
                        <span> <Image src={item.liquiditySuppliedReceiveCurrencyMedia} alt='' /> {item.liquiditySuppliedReceiveCurrency} </span>
                      </td>
                      <td>{item.value}</td>
                      <td>{item.share}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

      </Container>
      <BottomBar />
    </div>
  )
}