import React, { useState, useEffect } from 'react';
import SideBar from '../../components/Navigationbar/SideBar';
import TopBar from '../../components/Navigationbar/TopBar';
import Compound from '../CompoundEarn/compound';
import CreateToken from '../createToken';
import Dashboard from '../dashboard';
import Exchange from '../exchange';
import Onboard from 'bnc-onboard';
import './Application.css';
import Web3 from 'web3';
import {
  getUserSession,
  removeUserSession,
  setUserSession,
} from '../../store/localstorage';
import LogoutPage from '../Logout/LogoutPage';

const ethers = require('ethers');

const onboard = Onboard({
  dappId: process.env.REACT_APP_DAPP_ID, // [String] The API key of Blocknative
  networkId: 42161,
  subscriptions: {
    wallet: (wallet) => {
      new Web3(wallet.provider);
    },
  },
});

function Application() {
  const [menuItem, setMenuItem] = useState('Dashboard');
  const [networkId, setNetworkId] = useState(0);
  const [currentWallet, setCurrentWallet] = useState('');
  const [lightMode, setLightMode] = useState(true);

  const [logoutInfo, setLogout] = useState(false);

  useEffect(() => {
    chainid();
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    } else {
      console.log('MetaMask is not installed!');
      removeUserSession();
      setCurrentWallet('');
    }
  });

  useEffect(() => {
    let walletData: any;
    let tempData = getUserSession();
    if (tempData) {
      walletData = JSON.parse(tempData);
      setCurrentWallet(walletData.address);
      setNetworkId(walletData.appNetworkId);
    }
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem('lightMode');
    const data2 = window.localStorage.getItem('menuItem');

    if (data != null) {
      setLightMode(JSON.parse(data));
    }
    if (data2 != null) {
      setMenuItem(JSON.parse(data2));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('lightMode', JSON.stringify(lightMode));
    window.localStorage.setItem('menuItem', JSON.stringify(menuItem));
  }, [lightMode, menuItem]);

  async function chainid() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const { chainId } = await provider.getNetwork();
    console.log(chainId);
    if (chainId === 42161) {
      console.log('ok');
    } else {
      removeUserSession();
      setCurrentWallet('');
    }
  }

  const connectWallet = async () => {
    const walletSelected = await onboard.walletSelect();
    if (walletSelected) {
      const readyToTransact = await onboard.walletCheck();

      if (readyToTransact) {
        const currentState = await onboard.getState();
        setUserSession({
          address: currentState.address,
          appNetworkId: currentState.appNetworkId,
          balance: currentState.balance,
          mobileDevice: currentState.mobileDevice,
          network: currentState.network,
        });
        setCurrentWallet(currentState.address);
        setNetworkId(currentState.appNetworkId);
      }
    }
  };

  const toggleLight = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={`page ${lightMode && 'page--light'}`}>
      <div className="ac_page">
        <div className="sidebar">
          <SideBar
            lightMode={lightMode}
            menuItem={menuItem}
            setMenuItem={setMenuItem}
          />
        </div>

        <div className={`rightside ${lightMode && 'rightside--light'}`}>
          <div className="topbar">
            <TopBar
              lightMode={lightMode}
              currentWallet={currentWallet}
              connectWallet={connectWallet}
              logout={() => setLogout(true)}
              account={currentWallet}
              onClick={toggleLight}
              networkId={networkId}
            />
          </div>

          {menuItem === 'Farms' && (
            <Compound
              lightMode={lightMode}
              currentWallet={currentWallet}
              connectWallet={connectWallet}
            />
          )}
          {menuItem === 'Dashboard' && <Dashboard />}
          {menuItem === 'Create token' && <CreateToken />}
          {menuItem === 'Exchange' && <Exchange lightMode={lightMode} />}
        </div>
      </div>

      {logoutInfo ? (
        <LogoutPage
          setLogout={setLogout}
          lightMode={lightMode}
          account={currentWallet}
          setCurrentWallet={setCurrentWallet}
          onboard={onboard}
        />
      ) : null}
    </div>
  );
}

export default Application;
