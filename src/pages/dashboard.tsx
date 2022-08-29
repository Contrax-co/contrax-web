import Navigationbar from '../components/Navigationbar/Navigationbar';
import Header from '../components/header/Header';
import StatsCard from '../components/statsCard/StatsCard';
import BottomBar from '../components/bottomBar/BottomBar';
import { B1, H3, Link } from '../components/text/Text';
import { Col, Container, Row } from '../components/blocks/Blocks';
import * as colors from '../theme/colors';
import tokenIcon from '../images/token-icon.svg';
import { useEffect, useState } from 'react';
import { getUserSession, setSelectedToken } from '../store/localstorage';
import Tokens from '../components/tokens';
// import { useInput } from "rooks";

const Web3 = require('web3');

const ethers = require('ethers');

export default function Dashboard(props: any) {
  const [usd, setUSD] = useState();
  const [eth, setEth] = useState();
  const [final, setFinal] = useState();

  useEffect(() => {
    let walletData: any;
    let res: any;
    let sessionData = getUserSession();
    if (sessionData) {
      walletData = JSON.parse(sessionData);
      getTokensList(walletData.address);
    }
  }, [final]);

  const getTokensList = async (address: string) => {
    const infuraProjectId = '547b7378b8c2400aafd92ef4281c732f';
    const ropstenAddress = address;
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        'https://arbitrum-mainnet.infura.io/v3/' + infuraProjectId
      )
    );

    var balance = await web3.eth.getBalance(ropstenAddress);
    const ethValue = ethers.utils.formatEther(balance);
    console.log(ethValue);
    var feth: any = Math.round(ethValue);

    setEth(feth);

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    fetch(`https://api.coinbase.com/v2/prices/ETH-USD/spot`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res) {
          console.log(res.data.amount);
          var fusd: any = Math.round(res.data.amount);
          setUSD(fusd);
          var num1: any = usd;
          var num2: any = eth;
          var res: any = 0;
          console.log(res);
          res = num1 * num2;
          setFinal(res);
          return;
        }
        console.log('no res.data reveived');
      });
  };

  return (
    <>
      <Navigationbar />
      <Header value={final} />
      <Container className="mb-5">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              <B1 color={colors.primary}>Key Metrics</B1>
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <Row className="mt-4 mb-3">
              <H3>Account Overview</H3>
            </Row>
            <Row>
              <Col size="4" className="my-2">
                {/* Account Overview Section - Start  */}
                <StatsCard
                  cardIcon={'fas fa-wallet'}
                  cardTitle={'Wallet'}
                  cardValue={'$' + final}
                />
              </Col>
              <Col size="4" className="my-2">
                <StatsCard
                  cardIcon={'fas fa-lock'}
                  cardTitle={'Staked'}
                  cardValue={'Pending'}
                />
              </Col>
              <Col size="4" className="my-2">
                <StatsCard
                  cardIcon={'fas fa-tractor'}
                  cardTitle={'Yield Farming'}
                  cardValue={'Pending'}
                />
              </Col>
            </Row>
            <Row className="mt-4 mb-3">
              <H3>Networks</H3>
            </Row>
            <Row>
              <Col size="4" className="my-2">
                <StatsCard
                  cardIcon="fas fa-wallet"
                  cardTitle={'Arbitrum'}
                  cardValue={eth + ' AETH'}
                />
              </Col>
            </Row>
            <Row className="mt-4 mb-3">
              <H3>Actions</H3>
            </Row>
            <Row>
              <Link link="/create-a-token">
                <Col size="4" className="my-2">
                  <StatsCard
                    iconImg={tokenIcon}
                    cardTitle={'Create a token'}
                    cardValue={'→'}
                  />
                </Col>
              </Link>
            </Row>
            <Row className="mt-4 mb-3">
              <H3>Total Tokens</H3>
            </Row>

            <Tokens />
          </div>
        </div>
      </Container>
      <BottomBar />
    </>
  );
}
