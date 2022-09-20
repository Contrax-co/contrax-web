import React from 'react';
import {IoIosWallet} from 'react-icons/io';
import './TopBar.css';

function TopBar({lightMode, ethBal, walletAddress, connectWallet, logout}:any) {

  return (
    <div className="topbar_placement">
        {walletAddress ?(
            <div className={`wallet_address ${lightMode && "wallet_address--light"}`} onClick={logout}>
                <div className="ethBal">
                    <p>{ethBal.toFixed(3)} ETH</p>
                </div>
                
                <div className={`connected_wallet ${lightMode && "connected_wallet--light"}`}>
                    <p>{walletAddress.substring(0,6)}...{walletAddress.substring(walletAddress.length - 5)}</p>
                    <IoIosWallet /> 
                </div>
                
            </div>
        ) : (
            <div className="connect_wallet" onClick={connectWallet}>
                connect wallet
            </div>
        )}
        
    </div>

  )
}

export default TopBar