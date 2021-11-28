import React from 'react'
import Navigationbar from '../components/Navigationbar'
import BottomBar from '../components/bottomBar/BottomBar'
import { PageTitle, Title, Desc } from "../components/text/Text"; 
import PieChart from '../components/chart/PieChart';
import duckIcon from '../images/yellowDuck.svg' 

export default function ExplorePool() {
    let poolChartDataList = [["TT", "WETH"], ["TT", 73000], ["WETH", 54000]]

    let tableData = [
        {
            poolUrl: 'https://kovan.etherscan.io/address/0x00568c59aa94fafbdfce81d1e72fc96c8fc4b85c',
            poolAddress: '0x00568c59aa94fafbdfce81d1e72fc96c8fc4b85c',
            poolType: 'Public',
            feeRate: '0.36%',
            liquidityName1: 'TT',
            liquidityValue1: 0,
            liquidityName2: 'WETH',
            liquidityValue2: 0,
            volume24H: '678,987'
        },
        {
            poolUrl: 'https://kovan.etherscan.io/address/0x75f5d66a7bbb9330a9067c0833ec9b3198b71666',
            poolAddress: '0x75f5d66a7bbb9330a9067c0833ec9b3198b71666',
            poolType: 'Public',
            feeRate: '0.54%',
            liquidityName1: 'WETH',
            liquidityValue1: 0,
            liquidityName2: 'USDC',
            liquidityValue2: 0,
            volume24H: '788,334'
        },
        {
            poolUrl: 'https://kovan.etherscan.io/address/0x875ba7d9b71aee6580db2d3d5c74021e6af02933',
            poolAddress: '0x875ba7d9b71aee6580db2d3d5c74021e6af02933',
            poolType: 'Public',
            feeRate: '0.24%',
            liquidityName1: 'USDT',
            liquidityValue1: 0,
            liquidityName2: 'DODO',
            liquidityValue2: 0,
            volume24H: '48,334'
        }
    ]

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
                {
                    tableData.map((item, index) => (
                        <tr>
                        <th>{index+1}</th>
                        <td>
                            <span> <a href={item.poolUrl} target='_blank'> {item.poolAddress.substring(0,6)}...{item.poolAddress.substring(38,42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i> </a> </span>
                            <br />
                            <span className="badge bg-warning text-dark">{item.poolType}</span>
                        </td>
                        <td>{item.feeRate}</td>
                        <td className="chartColumn">
                             <PieChart chartData={poolChartDataList} chartId={index} />
                        </td>
                        <td> 
                            <span> <img src={duckIcon}></img> {item.liquidityValue1} {item.liquidityName1}</span> 
                            <br /> 
                            <span> <img src={duckIcon}></img> {item.liquidityValue2} {item.liquidityName2}</span>
                        </td>
                        <td>{item.volume24H}</td>
                      </tr>
                    ))
                }
            </tbody>
          </table>
            </div>
            <BottomBar />
        </div>
    )
}

