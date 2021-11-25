import React from 'react'
import BottomBar from '../components/bottomBar/BottomBar'
import Navigationbar from '../components/Navigationbar'
import LineChart from '../components/chart/LineChart';

export default function exchange() {

    let day = 'active', week = '', month = '';
    function changeState(state: any){
        console.log("changeState: ", state);
        if(state == 'day'){
            day = 'active';
            week = ''; month = '';
        }
        if(state == 'week'){
            week = 'active';
            day = ''; month = '';
        }
        if(state == 'month'){
            month = 'active';
            day = ''; week = '';
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
                                <span> <b>ETH</b> / USDC</span>
                                <h3> USDC: 14.362 </h3>
                                <span className="priceDecreaseDisplay mb-4"> -63.77 USDC (-1.47%) <span className="timeSpan">Past 24 Hours </span> </span>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <ul className="nav nav-pills float-lg-end mt-4">
                                    <li className="nav-item">
                                        <a className={`nav-link ${day}`} href="#" onClick={()=>changeState("day")}>24H</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${week}`} href="#" onClick={()=>changeState("week")}>1W</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${month}`} href="#" onClick={()=>changeState("month")}>1M</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <LineChart />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">

                    </div>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}

