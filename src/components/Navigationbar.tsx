import React from 'react';
import { getUserSession } from '../store/localstorage';

export default function Navigationbar() {
    let walletData: any;
    let walletAddress = '';
    let dataLoaded = false;

    let tempData = getUserSession();
    if (tempData) {
        walletData = JSON.parse(tempData)
        walletAddress = walletData.address;
        dataLoaded = true;
        console.log("dataLoaded ", dataLoaded)
        console.log("walletAddress ", walletAddress)
    }

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Contrax</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Create a Token</a>
                            </li>

                        </ul>
                        {dataLoaded ? (
                            <ul className="navbar-nav">
                                <span className="navbar-text">
                                    Address: {walletAddress}
                                </span>
                            </ul>
                        ) : 
                            null
                        }

                    </div>
                </div>
            </nav>
        </div>
    )
}
