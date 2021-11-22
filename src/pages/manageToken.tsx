import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import BottomBar from '../components/bottomBar/BottomBar';
import PieChart from '../components/chart/PieChart';
import { PageTitle, PageSubTitle, Title, Desc } from "../components/text/Text";

export default function manageToken() {
    return (
        <div>
            <Navigationbar />
            <Header />
            <div className="container mb-5">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Token Details</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <h5 className="mt-4 mb-3">Coin Name: Solana Coin</h5>
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 my-2">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                                        <StatsCard cardIcon={'fas fa-chart-line'} cardTitle={'Supply'} cardValue={'100,000,000'} />        
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                                        <StatsCard cardIcon={'fas fa-wallet'} cardTitle={'Your Balance'} cardValue={'56,000,000'} />        
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                                        <StatsCard cardIcon={'fas fa-chart-pie'} cardTitle={'% of Distribution'} cardValue={'65%'} />        
                                    </div>
                                </div>    
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 my-2">
                                <PieChart />
                            </div>        
                        </div>
                        <h5 className="mt-4 mb-3">Token Actions</h5>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 my-2">
                            <a data-bs-toggle="modal" data-bs-target="#SendTokens">
                                <StatsCard cardIcon={'fas fa-money-check-alt'} cardTitle={'Send Tokens'} cardValue={'→'} />
                            </a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 my-2">
                                <StatsCard cardIcon={'fas fa-fire-alt'} cardTitle={'Burn Tokens'} cardValue={'→'} />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 my-2">
                                <StatsCard cardIcon={'fas fa-project-diagram'} cardTitle={'End Crowdsale'} cardValue={'→'} />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 my-2">
                                <StatsCard cardIcon={'fas fa-file-invoice-dollar'} cardTitle={'Change Sale Rate'} cardValue={'→'} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <BottomBar />

            <div className="modal fade" id="SendTokens" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Send Tokens</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-12 my-2">
                            <Desc value={'Amount'} variant={'dark'} />
                            <input type="text" placeholder="Amount you will send" className="form-control" id="SendTokenAmount" name="SendTokenAmount" />
                        </div>
                        <div className="col-12 my-2">
                            <Desc value={'Address'} variant={'dark'} />
                            <input type="text" placeholder="Recipient Address" className="form-control" id="SendTokenAddress" name="SendTokenAddress" />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Send</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
