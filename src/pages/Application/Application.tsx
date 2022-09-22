import React, {useState, useEffect} from 'react'
import SideBar from '../../components/Navigationbar/SideBar';
import TopBar from '../../components/Navigationbar/TopBar';
import Compound from '../CompoundEarn/compound';
import { getEthBalance } from '../CompoundEarn/functions/connection';
import CreateToken from '../createToken';
import Dashboard from '../dashboard';
import Exchange from '../exchange';
import Onboard from 'bnc-onboard';
import './Application.css';
import Web3 from 'web3';
import { setUserSession } from '../../store/localstorage';
import LogoutPage from '../Logout/LogoutPage';

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
  const [currentWallet, setCurrentWallet] = useState('');
  const [ethUserBal, setUserEthBal] = useState(0); 
  const [lightMode, setLightMode] = useState(true); 
  const[menuItem, setMenuItem] = useState("Dashboard"); 
  const [logoutInfo, setLogout] = useState(false);

  useEffect(() => {
    getEthBalance(currentWallet, setUserEthBal, ethUserBal); 
  }, [currentWallet, ethUserBal]);

  useEffect(() => {
      const data = window.localStorage.getItem('lightMode');
      const data2 = window.localStorage.getItem('menuItem');
      const data3 = window.localStorage.getItem('currentWallet'); 
      if(data != null){
          setLightMode(JSON.parse(data));
      }
      if(data2 != null){
        setMenuItem(JSON.parse(data2));
      }
      if(data3 != null){
        setCurrentWallet(JSON.parse(data3));
      }
  }, []);

  useEffect(() => {
      window.localStorage.setItem('lightMode', JSON.stringify(lightMode));
      window.localStorage.setItem('menuItem', JSON.stringify(menuItem));
      window.localStorage.setItem('currentWallet', JSON.stringify(currentWallet));
  }, [lightMode, menuItem, currentWallet]);

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
        }
    }
  }

  const toggleLight = () => {
      setLightMode(!lightMode);
  }

  return (
      <div className={`page ${lightMode && "page--light"}`}>
        <div className="ac_page">
          <div className="sidebar">
            <SideBar
              onClick={toggleLight}
              lightMode={lightMode}
              menuItem = {menuItem}
              setMenuItem={setMenuItem}
            />
          </div>

          <div className={`rightside ${lightMode && "rightside--light"}`}>
            <div className="topbar">
              <TopBar 
                lightMode={lightMode}
                ethBal={ethUserBal}
                walletAddress={currentWallet}
                connectWallet={connectWallet}
                logout={() => setLogout(true)}
                account={currentWallet}
              />
            </div>
            
            {menuItem === "Farms" && <Compound lightMode={lightMode} currentWallet={currentWallet} connectWallet={connectWallet}/>}
            {menuItem === "Dashboard" && <Dashboard/>}
            {menuItem === "Create token" && <CreateToken/>}
            {menuItem === "Exchange" && <Exchange lightMode={lightMode}/>}
          </div>

        </div>

      {logoutInfo ? <LogoutPage setLogout={setLogout} lightMode={lightMode} account={currentWallet} setCurrentWallet={setCurrentWallet} /> : null}

      </div>
    
  )
}

export default Application