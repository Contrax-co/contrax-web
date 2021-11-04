import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Header from '../components/Header';

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






                    </div>
                </div>
            </div>

        </>    
    )
}
