import React, { useState } from 'react'
import BottomBar from '../components/bottomBar/BottomBar'
import Navigationbar from '../components/Navigationbar'
import LineChart from '../components/chart/LineChart';
import DropdownInput from '../components/dropdownInput/DropdownInput';

export default function Exchange() {
    const [day, setDay] = useState('active')
    const [week, setWeek] = useState('')
    const [month, setMonth] = useState('')
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
        if (state == 'day') {
            setDay('active');
            setWeek('');
            setMonth('');
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
        if (state == 'week') {
            setDay('');
            setWeek('active');
            setMonth('');
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
        if (state == 'month') {
            setDay('');
            setWeek('');
            setMonth('active');
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
    }

    const currencies = [
      {title: 'ETH', subTitle: 'Ethereum'},
      {title: 'BTC', subTitle: 'Bitcoin'},
      {title: 'USDT', subTitle: 'Tether'},
      {title: 'SOL', subTitle: 'Solana'},
      {title: 'ABT', subTitle: 'Arcblock'},
      {title: 'GTS', subTitle: 'GT STAR'},
    ]

    return (
        <div>
            <Navigationbar />
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="row mb-3">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <span> <b>ETH</b> / USDC</span>
                                <h3> USDC: 14.362 </h3>
                                <span className="priceDecreaseDisplay mb-4"> -63.77 USDC (-1.47%) <span className="timeSpan">Past 24 Hours </span> </span>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <ul className="nav nav-pills float-lg-end mt-4">
                                    <li className="nav-item">
                                        <a className={`nav-link ${day}`} href="#" onClick={() => changeState("day")}>24H</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${week}`} href="#" onClick={() => changeState("week")}>1W</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${month}`} href="#" onClick={() => changeState("month")}>1M</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <LineChart chartData={ChartData} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <DropdownInput searchable={true} items={currencies} value={{title: 'Eth'}} />
                    </div>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}

