import React, { useState, useEffect } from 'react';
import { getUserSession, removeUserSession } from '../store/localstorage';

export default function Navigationbar() {
    const [walletAddress, setWalletAddress] = useState('');

    useEffect(() => {
        let walletData: any;
        let tempData = getUserSession();
        if (tempData) {
            walletData = JSON.parse(tempData)
            setWalletAddress(walletData.address);
        }
    }, [])

    function logout() {
        removeUserSession();
        setWalletAddress('')
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
                                <a className="nav-link" href="/create-a-token">Create a Token</a>
                            </li>
                        </ul>
                        {walletAddress != '' ? (
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Address: {walletAddress}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" onClick={logout}>Logout</a></li>
                                    </ul>
                                </li>
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
