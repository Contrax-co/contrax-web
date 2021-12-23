import Navigationbar from '../components/Navigationbar/Navigationbar'
import BottomBar from '../components/bottomBar/BottomBar'
import { B1, Link, Title } from "../components/text/Text"; 
import PieChart from '../components/chart/PieChart';
import duckIcon from '../images/yellowDuck.svg' 
import { Container, Row } from '../components/blocks/Blocks';
import { Image } from '../components/image/Image';
import { Badge } from '../components/badge/Badge';

export default function ExplorePool() {
    let poolChartDataList = [["TT", "WETH"], ["11.29M TT-ETH (42%)", 73000], ["11.29M WETH (57%)", 54000]]

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
            <Container className="container h-100">
            <Title className="mt-5" value={'Explore Pools'} variant={'dark'} />
          <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                <tr className="table-light">
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
                                <Row>
                                <span><B1>{item.poolAddress.substring(0,6)}...{item.poolAddress.substring(38,42)}</B1> <Link link={item.poolUrl} target='_blank' rel="noreferrer"> <i className='fa fa-external-link' aria-hidden="true"></i> </Link> </span>
                                </Row>
                                <Badge>{item.poolType}</Badge>
                            </td>
                            <td>{item.feeRate}</td>
                            <td className="chartColumn" >
                              <PieChart chartData={poolChartDataList} chartId={index} height='57px' />
                            </td>
                            <td> 
                                <Row>
                                <span> <Image src={duckIcon} alt='' /> {item.liquidityValue1} {item.liquidityName1}</span> 
                                </Row>
                                <span> <Image src={duckIcon} alt='' /> {item.liquidityValue2} {item.liquidityName2}</span>
                            </td>
                            <td>{item.volume24H}</td>
                            <td>
                                <Link className="btn" link="/pool-detail">Manage</Link>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
          </div>
            </Container>
            <BottomBar />
        </div>
    )
}

