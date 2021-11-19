import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Header from '../components/Header';
import StatsCard from '../components/statsCard/StatsCard';
import BottomBar from '../components/bottomBar/BottomBar';
import PieChart from '../components/chart/PieChart';

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
                                <StatsCard cardIcon={'fas fa-money-check-alt'} cardTitle={'Send Tokens'} cardValue={'→'} />
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
        </div>
    )
}
