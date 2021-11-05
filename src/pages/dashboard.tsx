import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';

export default function dashboard() {
    return (
        <>
            <Navigationbar />
            <Header />

            <div className="container">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Key Metrics</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                        <h5 className="mt-4 mb-3">Account Overview</h5>

                        <div className="row">

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <StatsCard cardIcon={'fas fa-wallet'} cardTitle={'Wallet'} cardValue={'$3,345.74'} />        
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <StatsCard cardIcon={'fas fa-lock'} cardTitle={'Staked'} cardValue={'$4,145.45'} />        
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <StatsCard cardIcon={'fas fa-tractor'} cardTitle={'Yield Farming'} cardValue={'$182.19'} />        
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
