import React, { useState } from 'react'
import BottomBar from '../components/bottomBar/BottomBar'
import Navigationbar from '../components/Navigationbar'
import BarChart from '../components/chart/BarChart';
import LineChart from '../components/chart/LineChart';
import Card from '../components/card/Card';

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

    return (
        <div>
            <Navigationbar />
            <div className="container">
                <div className="row mt-4">
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
                        </Card>
                    </div>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}

