import React from 'react'
import Navigationbar from '../components/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';

export default function createToken() {
    return (
        <>
             <Navigationbar />
             <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">

                </div>
             </div>
             <BottomBar />
        </>
    )
}
