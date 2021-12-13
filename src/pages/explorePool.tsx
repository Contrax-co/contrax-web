import Navigationbar from '../components/Navigationbar'
import BottomBar from '../components/bottomBar/BottomBar'
import { Title } from "../components/text/Text"; 
import PieChart from '../components/chart/PieChart';
import duckIcon from '../images/yellowDuck.svg' 

export default function ExplorePool() {
    // Pie Chart Data 
    let poolChartDataList = [["TT", "WETH"], ["TT", 73000], ["WETH", 54000]]
    // Explore Pool Table Data
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
          <div className="table-responsive">
            {/* Explore Pool Table - Start */}
            <table className="table table-hover">
                <thead>
                <tr className="table-dark">
                    <th>#</th>
                    <th>Pool</th>
                    <th>Fee Rate</th>
                    <th>Liquidity</th>
                    <th>My Liquidity</th>
                    <th>Volume (24h)</th>
                    <th>Operation</th>
                </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, index) => (
                            <tr>
                            <th>{index+1}</th>
                            <td>
                                <div className="row">
                                <span> <a href={item.poolUrl} target='_blank' rel="noreferrer"> {item.poolAddress.substring(0,6)}...{item.poolAddress.substring(38,42)} <i className='fa fa-external-link text-dark' aria-hidden="true"></i> </a> </span>
                                </div>
                                <span className="badge bg-warning text-dark">{item.poolType}</span>
                            </td>
                            <td>{item.feeRate}</td>
                            <td className="chartColumn">
                                {/* Display Pie Chart - Start */}
                                <PieChart chartData={poolChartDataList} chartId={index} />
                                {/* Display Pie Chart - End */}
                            </td>
                            <td> 
                                <div className="row">
                                <span> <img src={duckIcon} alt=''></img> {item.liquidityValue1} {item.liquidityName1}</span> 
                                </div>
                                <span> <img src={duckIcon} alt=''></img> {item.liquidityValue2} {item.liquidityName2}</span>
                            </td>
                            <td>{item.volume24H}</td>
                            <td>
                                <a className="btn btn-primary" href="/pool-detail">Manage</a>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* Explore Pool Table - End */}
          </div>
            </div>
            <BottomBar />
        </div>
    )
}

