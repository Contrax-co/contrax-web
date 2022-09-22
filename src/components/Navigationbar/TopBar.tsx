import React from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import LightModeToggle from '../../pages/CompoundEarn/components/LightModeToggle';
import './TopBar.css';


function TopBar({lightMode, walletAddress, connectWallet, logout, account, ...props}:any) {


  return (
    <div className="topbar_placement">
        <LightModeToggle
            onClick={props.onClick} 
            lightMode={lightMode}
        />

        {walletAddress ?(
            <div className={`wallet_address ${lightMode && "wallet_address--light"}`}>
                <div className={`ethBal ${lightMode && "ethBal--light"}`}>
                    <p>Arbitrum</p>
                </div>
                
                <div className={`connected_wallet ${lightMode && "connected_wallet--light"}`} onClick={logout}>
                    <p className="address">{walletAddress.substring(0,6)}...{walletAddress.substring(walletAddress.length - 5)}</p>
                    <Jazzicon diameter={30} seed={jsNumberForAddress(account)}/>
                </div>
                
            </div>
        ) : (
            <div className={`connect_wallet`} onClick={connectWallet}>
                connect to wallet
            </div>
        )}
        
    </div>

  )
}

export default TopBar