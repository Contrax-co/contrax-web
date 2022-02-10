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

export default function ManageToken() {
  let chartDataList = [["Title", "Supply"], ["Your Tokens", 64000000], ["Other Tokens", 36000000]]
  let any:any = {};
  const [selectedToken, setSelectedToken] = useState(any);  
  useEffect(() => {
    const data = getSelectedToken();
    setSelectedToken(JSON.parse(data || ''));
    console.log(selectedToken);
  }, []);
  
  return (
    <div>
      <Navigationbar />
      <Header />
      <Container className="container mb-5">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              <B1 color={colors.primary}>Token Details</B1>
            </button>
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
