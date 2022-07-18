import Navigationbar from '../components/Navigationbar/Navigationbar';
import Header from '../components/header/Header';
import StatsCard from '../components/statsCard/StatsCard';
import BottomBar from '../components/bottomBar/BottomBar';
import PieChart from '../components/chart/PieChart';
import { B1, H3, Link, Title } from "../components/text/Text";
import { Col, Container, Row } from '../components/blocks/Blocks';
import { FormInput } from '../components/form/Form';
import { Modal } from '../components/modal/Modal';
import * as colors from '../theme/colors';
import { useEffect, useState } from 'react';
import { getSelectedToken } from '../store/localstorage';
import { Badge } from '../components/badge/Badge';
import { Image } from '../components/image/Image';
import duckIcon from '../images/yellowDuck.svg'

const poolChartDataList = [["TT", "WETH"], ["11.29M TT-ETH (42%)", 73000], ["11.29M WETH (57%)", 54000]]
const tableData = [
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

export default function ManageToken() {
  let chartDataList = [["Title", "Supply"], ["Your Tokens", 64000000], ["Other Tokens", 36000000]]
  let any: any = {};
  const [selectedToken, setSelectedToken] = useState(any);
  useEffect(() => {
    const data = getSelectedToken();
    setSelectedToken(data ? JSON.parse(data) : '');
    console.log(selectedToken);
  }, []);

  return (
    <div>
      <Navigationbar />
      <Header />
      <Container className="container mb-5">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            {/* <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              <B1 color={colors.primary}>Token Details</B1>
            </button> */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="parameters-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="parameters" aria-selected="true">
                  <B1 color={colors.primary}>Token Details</B1>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="swaps-tab" data-bs-toggle="tab" data-bs-target="#pool-details" type="button" role="tab" aria-controls="swaps" aria-selected="false">
                  <B1 color={colors.primary}>Pool Details</B1>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <Row className="mt-4 mb-3">
              <Col size='12'>
                <H3>Coin Name: </H3><H3 color={colors.primary}>{selectedToken.name}</H3>
              </Col>
            </Row>
            <Row>
              <Col size='8' className="my-2">
                <Row className="row">
                  <Col size='6' className="my-2">
                    <StatsCard cardIcon={'fas fa-chart-line'} cardTitle={'Supply'} cardValue={'--'} />
                  </Col>
                  <Col size='6' className="my-2">
                    <StatsCard cardIcon={'fas fa-wallet'} cardTitle={'Your Balance'} cardValue={selectedToken.balance} />
                  </Col>
                  <Col size='6' className="my-2">
                    <StatsCard cardIcon={'fas fa-chart-pie'} cardTitle={'% of Distribution'} cardValue={'--'} />
                  </Col>
                </Row>
              </Col>
              <Col size='4' className="my-2">
                <PieChart chartData={chartDataList} chartId={'1'} />
              </Col>
            </Row>
            <Title className="mt-4 mb-3">Token Actions</Title>
            <Row>
              <Col size='4' className="my-2">
                <Link link='/#' data-bs-toggle="modal" data-bs-target="#SendTokens">
                  <StatsCard cardIcon={'fas fa-money-check-alt'} cardTitle={'Send Tokens'} cardValue={'→'} />
                </Link>
              </Col>
              <Col size='4' className="my-2">
                <Link link='/#' data-bs-toggle="modal" data-bs-target="#BurnTokens">
                  <StatsCard cardIcon={'fas fa-fire-alt'} cardTitle={'Burn Tokens'} cardValue={'→'} />
                </Link>
              </Col>
              <Col size='4' className="my-2">
                <StatsCard cardIcon={'fas fa-project-diagram'} cardTitle={'End Crowdsale'} cardValue={'→'} />
              </Col>
              <Col size='4' className="my-2">
                <Link link='/#' data-bs-toggle="modal" data-bs-target="#RateChange">
                  <StatsCard cardIcon={'fas fa-file-invoice-dollar'} cardTitle={'Change Sale Rate'} cardValue={'→'} />
                </Link>
              </Col>
            </Row>

          </div>
          <div className="tab-pane fade show active" id="pool-details" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="table-responsive">
              {/* Explore Pool Table - Start */}
              <table className="table table-hover pool-deatil-table">
                <thead>
                  <tr className="table-light pool-deatil-tr">
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
                        <th>{index + 1}</th>
                        <td>
                          <Row>
                            <span><B1>{item.poolAddress.substring(0, 6)}...{item.poolAddress.substring(38, 42)}</B1> <Link link={item.poolUrl} target='_blank' rel="noreferrer"> <i className='fa fa-external-link' aria-hidden="true"></i> </Link> </span>
                          </Row>
                          <Badge>{item.poolType}</Badge>
                        </td>
                        <td>{item.feeRate}</td>
                        <td className="chartColumn" >
                          <PieChart chartData={poolChartDataList} chartId={index} height='60px' />
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
              {/* Explore Pool Table - End */}
            </div>
          </div>
        </div>
      </Container>
      <BottomBar />

      <Modal id="SendTokens" title='Send Tokens'
        okLabel='Send'
        titleIcon='fa-money-bill-alt'
      >
        <Row>
          <Col size='12' className="my-2">
            <FormInput name='amount' caption='Amount you will send' placeholder='Amount' />
          </Col>
          <Col size='12' className="my-2 mt-3">
            <FormInput name='address' caption='Recipient Address' placeholder='Address' />
          </Col>
        </Row>
      </Modal>

      <Modal id="BurnTokens" title='Burn Tokens'
        okLabel='Burn'
        titleIcon='fa-fire'
      >
        <Row className="row">
          <Col size='12' className="my-2">
            <FormInput name='amount' caption='Amount you will burn' placeholder='Amount' />
          </Col>
        </Row>
      </Modal>

      <Modal id="RateChange" title='Change Token Sale Rate'
        okLabel='Set New Rate'
        titleIcon='fa-file-invoice-dollar'
      >
        <Row>
          <Col size='12' className="my-2">
            <FormInput caption='Enter new sale rate' name='' placeholder="New Rate" />
          </Col>
        </Row>
      </Modal>

    </div>
  )
}
