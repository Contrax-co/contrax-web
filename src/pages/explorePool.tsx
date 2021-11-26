import React from 'react'
import Navigationbar from '../components/Navigationbar'
import BottomBar from '../components/bottomBar/BottomBar'
import { PageTitle, Title, Desc } from "../components/text/Text"; 
import PieChart from '../components/chart/PieChart';
import duckIcon from '../images/yellowDuck.svg' 

export default function ExplorePool() {
    let poolChartDataList = [["TT", "WETH"], ["TT", 73000], ["WETH", 54000]]

    return (
        <div>
            <Navigationbar />
            <div className="container h-100">
            <Title className="mt-5" value={'Explore Pools'} variant={'dark'} />
          <table className="table table-hover">
            <thead>
              <tr className="table-dark">
                <th>#</th>
                <th>Pool</th>
                <th>Fee Rate</th>
                <th>Liquidity</th>
                <th>My Liquidity</th>
                <th>Volume (24h)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>
                    <span> <a href='https://kovan.etherscan.io/address/0x00568c59aa94fafbdfce81d1e72fc96c8fc4b85c' target='_blank'>0x0056...b85c <i className='fa fa-external-link text-dark' aria-hidden="true"></i> </a> </span>
                    <br />
                    <span className="badge bg-warning text-dark">Public</span>
                </td>
                <td>0.36%</td>
                <td className="chartColumn">
                     <PieChart chartData={poolChartDataList} chartId={'1'} />
                </td>
                <td> 
                    <span> <img src={duckIcon}></img> 0 TT</span> 
                    <br /> 
                    <span> <img src={duckIcon}></img> 0 WETH</span>
                </td>
                <td>678,987</td>
              </tr>
              <tr>
                <th>2</th>
                <td>
                    <span> <a href='https://kovan.etherscan.io/address/0x75f5d66a7bbb9330a9067c0833ec9b3198b71666' target='_blank'>0x75fc...1666 <i className='fa fa-external-link text-dark' aria-hidden="true"></i> </a> </span>
                    <br />
                    <span className="badge bg-warning text-dark">Public</span>
                </td>
                <td> 0.54%</td>
                <td className="chartColumn"> 
                    <PieChart chartData={poolChartDataList} chartId={'2'} /> 
                </td>
                <td>
                    <span> <img src={duckIcon}></img> 0 WETH</span>
                    <br /> 
                    <span> <img src={duckIcon}></img> 0 USDC</span>
                </td>
                <td>788,334</td>
              </tr>
            </tbody>
          </table>
            </div>
            <BottomBar />
        </div>
    )
}
