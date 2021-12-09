import Navigationbar from '../components/Navigationbar';
import Header from '../components/Header';
import StatsCard from '../components/statsCard/StatsCard';
import BottomBar from '../components/bottomBar/BottomBar';
import PieChart from '../components/chart/PieChart';
import { Desc, Title } from "../components/text/Text";
import { Col, Container, Row } from '../components/blocks/Blocks';
import { Button } from '../components/button/Button';
import { FormInput } from '../components/form/Form';

export default function manageToken() {
    let chartDataList = [["Title", "Supply"], ["Your Tokens", 64000000], ["Other Tokens", 36000000]]
    return (
        <div>
            <Navigationbar />
            <Header />
            <Container className="container mb-5">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Token Details</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <Title className="mt-4 mb-3">Coin Name: Solana Coin</Title>
                        <Row>
                            <Col size='8' className="my-2">
                                <Row className="row">
                                    <Col size='6' className="my-2">
                                        <StatsCard cardIcon={'fas fa-chart-line'} cardTitle={'Supply'} cardValue={'100,000,000'} />        
                                    </Col>
                                    <Col size='6' className="my-2">
                                        <StatsCard cardIcon={'fas fa-wallet'} cardTitle={'Your Balance'} cardValue={'56,000,000'} />        
                                    </Col>
                                    <Col size='6' className="my-2">
                                        <StatsCard cardIcon={'fas fa-chart-pie'} cardTitle={'% of Distribution'} cardValue={'65%'} />        
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
                                <a href='/#' data-bs-toggle="modal" data-bs-target="#SendTokens">
                                    <StatsCard cardIcon={'fas fa-money-check-alt'} cardTitle={'Send Tokens'} cardValue={'→'} />
                                </a>
                            </Col>
                            <Col size='4' className="my-2">
                                <a href='/#' data-bs-toggle="modal" data-bs-target="#BurnTokens">
                                    <StatsCard cardIcon={'fas fa-fire-alt'} cardTitle={'Burn Tokens'} cardValue={'→'} />
                                </a>
                            </Col>
                            <Col size='4' className="my-2">
                                    <StatsCard cardIcon={'fas fa-project-diagram'} cardTitle={'End Crowdsale'} cardValue={'→'} />
                            </Col>
                            <Col size='4' className="my-2">
                                <a href='/#' data-bs-toggle="modal" data-bs-target="#RateChange">
                                    <StatsCard cardIcon={'fas fa-file-invoice-dollar'} cardTitle={'Change Sale Rate'} cardValue={'→'} />
                                </a>
                            </Col>
                        </Row>

                    </div>
                </div>
            </Container>
            <BottomBar />

            <div className="modal fade" id="SendTokens" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <Title className="modal-title" id="exampleModalLabel">Send Tokens</Title>
                    <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                </div>
                <div className="modal-body">
                    <Row>
                        <Col size='12' className="my-2">
                          <FormInput name='amount' label='Amount' placeholder='Amount you will send' />
                        </Col>
                        <Col size='12' className="my-2">
                          <FormInput name='address' label='Address' placeholder='Recipient Address' />
                        </Col>
                    </Row>
                </div>
                <div className="modal-footer">
                    <Button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</Button>
                    <Button type="button" className="btn btn-primary">Send</Button>
                </div>
                </div>
            </div>
            </div>

            <div className="modal fade" id="BurnTokens" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <Title className="modal-title" id="exampleModalLabel">Burn Tokens</Title>
                    <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                </div>
                <div className="modal-body">
                    <Row className="row">
                        <Col size='12' className="my-2">
                          <FormInput name='amount' label='Amount' placeholder='Amount you will burn' />
                        </Col>
                    </Row>
                </div>
                <div className="modal-footer">
                    <Button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</Button>
                    <Button type="button" className="btn btn-primary">Burn</Button>
                </div>
                </div>
            </div>
            </div>

            <div className="modal fade" id="RateChange" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <Title className="modal-title" id="exampleModalLabel">Change Token Sale Rate</Title>
                    <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                </div>
                <div className="modal-body">
                    <Row>
                        <Col size='12' className="my-2">
                          <FormInput label='New Rate' name='' placeholder="Enter New Sale Rate" />
                        </Col>
                    </Row>
                </div>
                <div className="modal-footer">
                    <Button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</Button>
                    <Button type="button" className="btn btn-primary">Set New Rate</Button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
