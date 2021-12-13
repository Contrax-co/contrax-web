import React, { useState } from 'react'
import BottomBar from '../components/bottomBar/BottomBar'
import Navigationbar from '../components/Navigationbar'
import BarChart from '../components/chart/BarChart';
import LineChart from '../components/chart/LineChart';
import Card from '../components/card/Card';
import { Title, Desc } from "../components/text/Text";
import Button from '../components/button/Button';
import PieChart from '../components/chart/PieChart';
import { Col, Container, Row } from '../components/blocks/Blocks';

export default function PoolDetail() {
    // State of Volume, Tvl, Liquidity and Fees - Only One State Will Be Active At a time
    const [volume, setVolume] = useState('active')
    const [tvl, setTvl] = useState('')
    const [liquidity, setLiquidity] = useState('')
    const [fees, setFees] = useState('')
    const [state, setState] = useState('volume')
    // Initial Chart Data
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
    // Method To Change Chart Type (volume, tvl, liquidity, fees)
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
    // Pool Data For Info Card
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
    // Pie Chart Data
    let poolChartDataList = [["36,408,389.5732 USDC (84.46%)", "6,691,425.1753 USDT (15.54%)"], ["36,408,389.5732 USDC (84.46%)", 36408389.5732], ["6,691,425.1753 USDT (15.54%)", 6691425.1753]]
    // Array of Swap Data
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
    // Array Of Liquidity Provider Data
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
            <Container>
                <Row className="my-4">
                    <Col size='8'>
                        <Row className="mb-3">
                            <Col size='6'>
                                <span> <b>USDT</b> / USDC</span>
                                <p className="mb-4"> 1 USDT = 1.0008917034604228 USDC </p>
                            </Col>
                            <Col size='6'>
                                {/* Nav Buttons To Switch Chart Type (volume, tvl, liquidity and fees) - Start */}
                                <ul className="nav nav-pills float-lg-end mt-4">
                                    <li className="nav-item">
                                        <button className={`nav-link ${volume}`} onClick={() => changeState("volume")}>Volume</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`nav-link ${tvl}`} onClick={() => changeState("tvl")}>TVL</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`nav-link ${liquidity}`} onClick={() => changeState("liquidity")}>Liquidity</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`nav-link ${fees}`} onClick={() => changeState("fees")}>Fees</button>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        {/* If Chart Type Tvl then Display Line Chart Else Display Bar Chart - Start */}
                        {state === 'tvl' ? (
                            <LineChart chartData={ChartData} />
                        ) : (
                            <BarChart chartData={ChartData} />
                        )
                        }
                    </Col>
                    <Col size='4'>
                        <Card>
                            <span>
                                <a href={poolData.poolUrl} target='_blank' rel="noreferrer">
                                    {poolData.poolAddress.substring(0, 6)}...{poolData.poolAddress.substring(38, 42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i>
                                </a>
                                <span className="badge bg-warning text-dark float-end">{poolData.poolType}</span>
                            </span>
                            <Row className="row my-4">
                                <Row className="row">
                                    <Col size='6' className="my-3">
                                        <span>
                                            <Row>
                                                <Col size='3' className="my-auto">
                                                    <i className="fas fa-chart-bar fa-2x faround"></i>
                                                </Col>
                                                <Col size='9' className="ps-4">
                                                    <Title value={'24'} variant={'dark'} />
                                                    <Desc value={'Traders (24H)'} variant={'dark'} />
                                                </Col>
                                            </Row>
                                        </span>
                                    </Col>
                                    <Col size='6' className="my-3">
                                        <span>
                                            <Row>
                                                <Col size='3' className="my-auto">
                                                    <i className="fas fa-briefcase fa-2x faround"></i>
                                                </Col>
                                                <Col size='9' className="ps-4">
                                                    <Title value={'$43.1M'} variant={'dark'} />
                                                    <Desc value={'Total Liquidity'} variant={'dark'} />
                                                </Col>
                                            </Row>
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size='6' className="my-3">
                                        <span>
                                            <Row>
                                                <Col size='3' className="my-auto">
                                                    <i className="fad fa-chart-line fa-2x faround"></i>
                                                </Col>
                                                <Col size='9' className="ps-4">
                                                    <Title value={'$22.43M'} variant={'dark'} />
                                                    <Desc value={'Volume'} variant={'dark'} />
                                                </Col>
                                            </Row>
                                        </span>
                                    </Col>
                                    <Col size='6' className="my-3">
                                        <span>
                                            <Row>
                                                <Col size='3' className="my-auto">
                                                    <i className="far fa-donate fa-2x faround"></i>
                                                </Col>
                                                <Col size='9' className="ps-4">
                                                    <Title value={'$1.79K'} variant={'dark'} />
                                                    <Desc value={'Fees (24H)'} variant={'dark'} />
                                                </Col>
                                            </Row>
                                        </span>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Desc className="form-check-label" value={'Total Liquidity'} variant={'dark'} />
                                    <Col size='12' className="my-2">
                                        <PieChart chartData={poolChartDataList} chartId={'1'} />
                                    </Col>
                                </Row>
                            </Row>
                            <Button label='Edit Liquidity' />
                        </Card>
                    </Col>
                </Row>
                {/* Buttons To Switch Pool Details Section - Start */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="parameters-tab" data-bs-toggle="tab" data-bs-target="#parameters" type="button" role="tab" aria-controls="parameters" aria-selected="true">Parameters</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="swaps-tab" data-bs-toggle="tab" data-bs-target="#swaps" type="button" role="tab" aria-controls="swaps" aria-selected="false">Swaps</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="liquidity-providers-tab" data-bs-toggle="tab" data-bs-target="#liquidity-providers" type="button" role="tab" aria-controls="liquidity-providers" aria-selected="false">Liquidity Providers</button>
                    </li>
                </ul>
                {/* Buttons To Switch Pool Details Section - Start */}
                <div className="tab-content" id="myTabContent">
                    {/* Parameters Section - Start */}
                    <div className="tab-pane fade show active" id="parameters" role="tabpanel" aria-labelledby="parameters-tab">
                        <Row className="mt-3">
                            <Col size='6' className="borderRight mt-2">
                                <Row className="my-3">
                                    <Col size='4' className="my-auto">
                                        <Desc value={'Total Swap Volume'} variant={'dark'} />
                                    </Col>
                                    <Col size="8">
                                        <Title value={'$10,576,241,986.55'} variant={'dark'} />
                                        <span>10,575,363,434 USDT
                                            <img src="https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp" alt='' className="ms-1"></img> / 10,577,149,605 USDC
                                            <img src="https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp" alt='' className="ms-1"></img>
                                        </span>
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col size='4' className="my-auto">
                                        <Desc value={'Total Swap Fee'} variant={'dark'} />
                                    </Col>
                                    <Col size="8">
                                        <Title value={'$996,650.94'} variant={'dark'} />
                                        <span>499,733.37 USDT
                                            <img src="https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp" alt='' className="ms-1"></img> / 496,514.28 USDC
                                            <img src="https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp" alt='' className="ms-1"></img>
                                        </span>
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col size='4' className="my-auto">
                                        <Desc value={'Total Number of Traders'} variant={'dark'} />
                                    </Col>
                                    <Col size="8">
                                        <Title value={'9,606'} variant={'dark'} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col size='6' >
                                <Row className="my-3">
                                    <Col size='4' className="my-auto">
                                        <Desc value={'Creator'} variant={'dark'} />
                                    </Col>
                                    <Col size='8'>
                                        <a href={poolData.poolUrl} target='_blank' rel="noreferrer">
                                        {poolData.poolAddress.substring(0, 6)}...{poolData.poolAddress.substring(38, 42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i>
                                       </a>
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col size='4' className="my-auto">
                                        <Desc value={'Created'} variant={'dark'} />
                                    </Col>
                                    <Col size='8'>
                                        <Desc value={'2020/10/21 22:54:32'} variant={'dark'} />
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col size='4' className="my-auto">
                                        <Desc value={'Fee Rate'} variant={'dark'} />
                                    </Col>
                                    <Col size='8'>
                                        <Desc value={'0.01%'} variant={'dark'} />
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col size='4' className="my-auto">
                                        <Desc value={'Slippage Coefficient'} variant={'dark'} />
                                    </Col>
                                    <Col size='8'>
                                        <Desc value={'0.0001'} variant={'dark'} />
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col size='4' className="my-auto">
                                        <Desc value={'Guide Price'} variant={'dark'} />
                                    </Col>
                                    <Col size='8'>
                                        <Desc value={'1'} variant={'dark'} />
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col size='4' className="my-auto">
                                        <Desc value={'Equilibrium target'} variant={'dark'} />
                                    </Col>
                                    <Col size='8'>
                                        <Row>
                                            <span>0 USDT
                                              <img src="https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp" alt='' className="ms-1"></img>
                                            </span>
                                        </Row>
                                        <Row>
                                            <span>0 USDC
                                                <img src="https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp" alt='' className="ms-1"></img>
                                            </span>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    {/* Parameters Section - End */}
                    {/* Swaps Section - Start */}
                    <div className="tab-pane fade table-responsive" id="swaps" role="tabpanel" aria-labelledby="swaps-tab">
                        <table className="table table-hover my-4">
                            <thead>
                                <tr className="table-dark">
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
                                    <td> <span> <a href={item.traderAddressUrl} target='_blank' rel="noreferrer"> {item.traderAddress.substring(0,6)}...{item.traderAddress.substring(38,42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i> </a> </span> </td>
                                    <td> <span> <img src={item.paidCurrencyMedia} alt=''></img> {item.paidCurrency} </span> </td>
                                    <td> <span> <img src={item.receiveCurrencyMedia} alt=''></img> {item.receiveCurrency} </span> </td>
                                    <td>{item.price}</td>
                                    <td>{item.feeRate}</td>
                                    <td>{item.fee}</td>
                                </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    {/* Swaps Section - End */}
                    {/* Liquidity Providers Section - Start */}
                    <div className="tab-pane fade table-responsive" id="liquidity-providers" role="tabpanel" aria-labelledby="liquidity-providers">
                    <table className="table table-hover my-4">
                            <thead>
                                <tr className="table-dark">
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
                                    <td> <span> <a href={item.liquidityProviderAddressUrl} target='_blank' rel="noreferrer"> {item.liquidityProviderAddress.substring(0,6)}...{item.liquidityProviderAddress.substring(38,42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i> </a> </span> </td>
                                    <td> 
                                        <span> <img src={item.liquiditySuppliedPaidCurrencyMedia} alt=''></img> {item.liquiditySuppliedPaidCurrency} </span>
                                        <br />
                                        <span> <img src={item.liquiditySuppliedReceiveCurrencyMedia} alt=''></img> {item.liquiditySuppliedReceiveCurrency} </span> 
                                    </td>
                                    <td>{item.value}</td>
                                    <td>{item.share}</td>
                                </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    {/* Liquidity Providers  Section - End */}
                </div>

            </Container>
            <BottomBar />
        </div>
    )
}