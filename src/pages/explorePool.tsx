import { useEffect, useState } from 'react';
import Navigationbar from '../components/Navigationbar/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { B1, Link, Title } from '../components/text/Text';
import { Container, Row } from '../components/blocks/Blocks';
import { Badge } from '../components/badge/Badge';

// import PieChart from '../components/chart/PieChart';
// import duckIcon from '../images/yellowDuck.svg'
// import { Image } from '../components/image/Image';

const axios = require('axios');

export default function ExplorePool() {
  // let poolChartDataList = [
  //   ['TT', 'WETH'],
  //   ['11.29M TT-ETH (42%)', 73000],
  //   ['11.29M WETH (57%)', 54000],
  // ];

  const [pools, setPools] = useState<any[]>([]);

  useEffect(() => {
    getApiDetails();
  }, []);

  const getApiDetails = async () => {
    try {
      const result = await axios.post(
        'https://api.thegraph.com/subgraphs/name/sushiswap/arbitrum-exchange',
        {
          query: `
          {
            pairs(first:50) {
              id
              token0 {
                symbol
              }
              token1 {
                symbol
              }
              name
              reserve0
              reserve1
              reserveETH
              totalSupply
              token0Price
              token1Price
              volumeToken0
              volumeToken1
              liquidityProviderCount
              volumeUSD
            }
          }
          `,
        }
      );
      console.log(result.data.data.pairs);
      setPools(result.data.data.pairs);
      console.log(pools);
    } catch (error) {
      console.error(error);
    }
  };

  // let tableData = [
  //   {
  //     poolUrl:
  //       'https://kovan.etherscan.io/address/0x00568c59aa94fafbdfce81d1e72fc96c8fc4b85c',
  //     poolAddress: '0x00568c59aa94fafbdfce81d1e72fc96c8fc4b85c',
  //     poolType: 'Public',
  //     feeRate: '0.36%',
  //     liquidityName1: 'TT',
  //     liquidityValue1: 0,
  //     liquidityName2: 'WETH',
  //     liquidityValue2: 0,
  //     volume24H: '678,987',
  //   },
  //   {
  //     poolUrl:
  //       'https://kovan.etherscan.io/address/0x75f5d66a7bbb9330a9067c0833ec9b3198b71666',
  //     poolAddress: '0x75f5d66a7bbb9330a9067c0833ec9b3198b71666',
  //     poolType: 'Public',
  //     feeRate: '0.54%',
  //     liquidityName1: 'WETH',
  //     liquidityValue1: 0,
  //     liquidityName2: 'USDC',
  //     liquidityValue2: 0,
  //     volume24H: '788,334',
  //   },
  //   {
  //     poolUrl:
  //       'https://kovan.etherscan.io/address/0x875ba7d9b71aee6580db2d3d5c74021e6af02933',
  //     poolAddress: '0x875ba7d9b71aee6580db2d3d5c74021e6af02933',
  //     poolType: 'Public',
  //     feeRate: '0.24%',
  //     liquidityName1: 'USDT',
  //     liquidityValue1: 0,
  //     liquidityName2: 'DODO',
  //     liquidityValue2: 0,
  //     volume24H: '48,334',
  //   },
  // ];

  return (
    <div>
      <Navigationbar />
      <Container className="container h-100">
        <Title className="mt-5" value={'Explore Pools'} variant={'dark'} />
        <div className="table-responsive">
          {/* Explore Pool Table - Start */}
          <table className="table table-hover">
            <thead>
              <tr className="table-light">
                <th>#</th>
                <th>Pool</th>
                <th>Symbols</th>
                <th>Volume USD</th>
                <th>Volume</th>
                <th>Reserve</th>
                <th>Total Supply</th>
              </tr>
            </thead>
            <tbody>
              {pools.map((item, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <Row>
                      <span>
                        <B1>
                          {item.id.substring(0, 6)}...
                          {item.id.substring(38, 42)}
                        </B1>{' '}
                        <Link
                          link={'https://arbiscan.io/address/' + item.id}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {' '}
                          <i
                            className="fa fa-external-link"
                            aria-hidden="true"
                          ></i>{' '}
                        </Link>{' '}
                      </span>
                    </Row>
                    <Badge></Badge>
                  </td>
                  <td>
                    {item.token0.symbol}-{item.token1.symbol}
                  </td>
                  <td>{parseFloat(item.volumeUSD).toFixed(5)}</td>
                  {/* <td className="chartColumn" >
                              <PieChart chartData={poolChartDataList} chartId={index} height='57px' />
                            </td> */}
                  <td>
                    <Row>
                      <span>
                        {' '}
                        <b>{item.token0.symbol}</b>=
                        {parseFloat(item.volumeToken0).toFixed(5)}{' '}
                      </span>
                    </Row>
                    <span>
                      <b>{item.token1.symbol}</b> =
                      {parseFloat(item.volumeToken1).toFixed(5)}
                    </span>
                  </td>
                  <td>
                    <Row>
                      <span>
                        {' '}
                        <b>{item.token0.symbol}</b>=
                        {parseFloat(item.reserve0).toFixed(5)}{' '}
                      </span>
                    </Row>
                    <span>
                      <b>{item.token1.symbol}</b> =
                      {parseFloat(item.reserve1).toFixed(5)}
                    </span>
                  </td>
                  <td>{parseFloat(item.totalSupply).toFixed(5)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Explore Pool Table - End */}
        </div>
      </Container>
      <BottomBar />
    </div>
  );
}
