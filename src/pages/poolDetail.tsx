import React, { useState } from 'react'
import BottomBar from '../components/bottomBar/BottomBar'
import Navigationbar from '../components/Navigationbar'
import BarChart from '../components/chart/BarChart';
import LineChart from '../components/chart/LineChart';
import Card from '../components/card/Card';
import { Title, Desc } from "../components/text/Text";
import Button from '../components/button/Button';
import PieChart from '../components/chart/PieChart';

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

    return (
        <div>
            <Navigationbar />
            <div className="container">
                <div className="row my-4">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="row mb-3">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <span> <b>USDT</b> / USDC</span>
                                <p className="mb-4"> 1 USDT = 1.0008917034604228 USDC </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
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
                            </div>
                        </div>
                        {state === 'tvl' ? (
                            <LineChart chartData={ChartData} />
                        ) : (
                            <BarChart chartData={ChartData} />
                        )
                        }
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <Card>
                            <span>
                                <a href={poolData.poolUrl} target='_blank' rel="noreferrer">
                                    {poolData.poolAddress.substring(0, 6)}...{poolData.poolAddress.substring(38, 42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i>
                                </a>
                                <span className="badge bg-warning text-dark float-end">{poolData.poolType}</span>
                            </span>
                            <div className="row my-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                                        <span>
                                            <div className="row">
                                                <div className="col-3 my-auto">
                                                    <i className="fas fa-chart-bar fa-2x faround"></i>
                                                </div>
                                                <div className="col-9 ps-4">
                                                    <Title value={'24'} variant={'dark'} />
                                                    <Desc value={'Traders (24H)'} variant={'dark'} />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                                        <span>
                                            <div className="row">
                                                <div className="col-3 my-auto">
                                                    <i className="fas fa-briefcase fa-2x faround"></i>
                                                </div>
                                                <div className="col-9 ps-4">
                                                    <Title value={'$43.1M'} variant={'dark'} />
                                                    <Desc value={'Total Liquidity'} variant={'dark'} />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                                        <span>
                                            <div className="row">
                                                <div className="col-3 my-auto">
                                                    <i className="fad fa-chart-line fa-2x faround"></i>
                                                </div>
                                                <div className="col-9 ps-4">
                                                    <Title value={'$22.43M'} variant={'dark'} />
                                                    <Desc value={'Volume'} variant={'dark'} />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                                        <span>
                                            <div className="row">
                                                <div className="col-3 my-auto">
                                                    <i className="far fa-donate fa-2x faround"></i>
                                                </div>
                                                <div className="col-9 ps-4">
                                                    <Title value={'$1.79K'} variant={'dark'} />
                                                    <Desc value={'Fees (24H)'} variant={'dark'} />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <Desc className="form-check-label" value={'Total Liquidity'} variant={'dark'} />
                                    <div className="col-12 my-2">
                                        <PieChart chartData={poolChartDataList} chartId={'1'} />
                                    </div>
                                </div>
                            </div>
                            <Button label='Edit Liquidity' />
                        </Card>
                    </div>
                </div>
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
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="parameters" role="tabpanel" aria-labelledby="parameters-tab">
                        <div className="row mt-3">
                            <div className="col-lg-6 col-md-6 col-sm-12 borderRight mt-2">
                                <div className="row my-3">
                                    <div className="col-4 my-auto">
                                        <Desc value={'Total Swap Volume'} variant={'dark'} />
                                    </div>
                                    <div className="col-8">
                                        <Title value={'$10,576,241,986.55'} variant={'dark'} />
                                        <span>10,575,363,434 USDT 
                                            <img src="https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp" alt='' className="ms-1"></img> / 10,577,149,605 USDC 
                                            <img src="https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp" alt='' className="ms-1"></img>
                                        </span> 
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-4 my-auto">
                                        <Desc value={'Total Swap Fee'} variant={'dark'} />
                                    </div>
                                    <div className="col-8">
                                        <Title value={'$996,650.94'} variant={'dark'} />
                                        <span>499,733.37 USDT 
                                            <img src="https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp" alt='' className="ms-1"></img> / 496,514.28 USDC  
                                            <img src="https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp" alt='' className="ms-1"></img>
                                        </span> 
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-4 my-auto">
                                        <Desc value={'Total Number of Traders'} variant={'dark'} />
                                    </div>
                                    <div className="col-8">
                                        <Title value={'9,606'} variant={'dark'} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row my-3">
                                    <div className="col-4 my-auto">
                                        <Desc value={'Creator'} variant={'dark'} />
                                    </div>
                                    <div className="col-8">
                                        <a href={poolData.poolUrl} target='_blank' rel="noreferrer">
                                            {poolData.poolAddress.substring(0, 6)}...{poolData.poolAddress.substring(38, 42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-4 my-auto">
                                        <Desc value={'Created'} variant={'dark'} />
                                    </div>
                                    <div className="col-8">
                                        <Desc value={'2020/10/21 22:54:32'} variant={'dark'} />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-4 my-auto">
                                        <Desc value={'Fee Rate'} variant={'dark'} />
                                    </div>
                                    <div className="col-8">
                                        <Desc value={'0.01%'} variant={'dark'} />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-4 my-auto">
                                        <Desc value={'Slippage Coefficient'} variant={'dark'} />
                                    </div>
                                    <div className="col-8">
                                        <Desc value={'0.0001'} variant={'dark'} />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-4 my-auto">
                                        <Desc value={'Guide Price'} variant={'dark'} />
                                    </div>
                                    <div className="col-8">
                                        <Desc value={'1'} variant={'dark'} />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-4 my-auto">
                                        <Desc value={'Equilibrium target'} variant={'dark'} />
                                    </div>
                                    <div className="col-8">
                                        <div className="row">
                                            <span>0 USDT 
                                                <img src="https://cmp.dodoex.io/d_AVO5xIyrJl_fT2ItXkdNeqyNcY_y1Rf4kix1tiMw8/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL1VTRFRfZThiNzFiNWYyOS9VU0RUX2U4YjcxYjVmMjkucG5n.webp" alt='' className="ms-1"></img> 
                                            </span> 
                                        </div>
                                        <div className="row">
                                            <span>0 USDC 
                                                <img src="https://cmp.dodoex.io/9kfMyaEhJBOwCKTXWVoPU8yPTdyx9rX7sSu9CYqRuqA/rs:fit:20:20:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvL3VzZGNfZWU1MmExZWQyYi91c2RjX2VlNTJhMWVkMmIucG5n.webp" alt='' className="ms-1"></img> 
                                            </span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="swaps" role="tabpanel" aria-labelledby="swaps-tab">Swaps...</div>
                    <div className="tab-pane fade" id="liquidity-providers" role="tabpanel" aria-labelledby="liquidity-providers">providers...</div>
                </div>

            </div>
            <BottomBar />
        </div>
    )
}