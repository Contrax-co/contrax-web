import React, {useState, useEffect} from 'react';
import PoolButton from '../../components/PoolButton';
import './compoundItem.css';
import Withdraw from './Withdraw';
import * as ethers from 'ethers';
import Deposit from './Deposit';

function CompoundItem({pool}: any) {
    const [currentWallet, setCurrentWallet] = useState("");
    const [tvl, setTVL] = useState(0);
    const [userVaultBalance, setUserVaultBalance] = useState(0);

    const [withdrawKey, setWithdrawKey] = useState(null);
    const [liquidityKey, setLiquidityKey] = useState(null);

    const [liquidityModal, setLiquidityModal] = useState(false);
    const [withdrawModal, setModalWithdraw] = useState(false);

    useEffect(() => {
          
        checkIfWalletIsConnected(); 
        getUserVaultBalance();
        // getLPTokenBalance();
        getTotalValue();
        grabKeys(withdrawKey, liquidityKey);
    })

    const checkIfWalletIsConnected = async () => {
        try {
            const ethereum = window;
            if(!ethereum) {
                console.log("Make sure you have metamask!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }

            /*
            * Check if we're authorized to access the user's wallet
            */
            const accounts = await window.ethereum.request({method: "eth_accounts"}); 

            if(accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setCurrentWallet(account); 
            }
            else {
                console.log("No authorized account found")
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    const getUserVaultBalance = async() => {
        const {ethereum} = window; 
        try {
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const vaultContract = new ethers.Contract(pool.vault_addr, pool.vault_abi, signer);

                const balance = await vaultContract.balanceOf(currentWallet);
                const formattedBal = Number(ethers.utils.formatUnits(balance, 18));
                setUserVaultBalance(formattedBal);
                console.log(`User's balance of the lp token in vault is: ${userVaultBalance}`);
            }
            else {
                console.log("Ethereum object doesn't exist!");
            }
        }
        catch (error){
            console.log(error);
        }
    }


    const grabKeys = (id1:any, id2: any) => {
        setWithdrawKey(id1);
        setLiquidityKey(id2);
    
        if(withdrawKey != null){
          setModalWithdraw(true);
        }else if (liquidityKey != null){
          setLiquidityModal(true);
        } 
    }

    const getTotalValue = async() => {
        const {ethereum} = window;
        try{
            if(ethereum){
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const vaultContract = new ethers.Contract(pool.vault_addr, pool.vault_abi, signer);

                    const totalValue = await vaultContract.balance();
                    const formattedBal = Number(ethers.utils.formatUnits(totalValue, 18));
                    setTVL(formattedBal);
            }
            else {
                console.log("Ethereum object doesn't exist!");
            }
    
        }catch (error) {
            console.log(error);
        }
    }

    return (
            <div>
                <div className="single_pool" key={pool.id}>
                    <div className="row_items">

                        <div className="title_container">
                            <div className="pair">
                            <img alt={pool.alt1} className="logofirst" src={pool.logo1}/>
                            <img alt={pool.alt2} className="logo" src={pool.logo2}/>
                            </div>
                            <div>
                            <p className="pool_name">{pool.name}</p>
                            <p className="farm_type">SushiSwap</p>
                            </div>
                        </div>

                        <div className="pool_info">
                            <div className="container">
                                <p className="pool_name">DEPOSITED</p>
                                <p>{userVaultBalance}</p>

                            </div>
                            
                            <div className="container">
                                <p className="pool_name">EARNED</p>

                            </div>

                            <div className="container">
                                <p className="pool_name">LIQUIDITY</p>
                                {tvl < 1000 ? (
                                    <p>{"<"} 1000</p>
                                ):
                                <p>{tvl}</p>
                                }
                                
                            </div>

                            <div className="container">
                                <p className="pool_name">APR</p>
                                <p>{pool.apy}</p>
                            </div>

                            <div className="container">
                                <p className="pool_name">REWARDS</p>
                                <img alt={pool.rewards_alt} className="rewards" src={pool.rewards}/>
                            </div>
                        </div>

                    </div>

                    <div className="buttons">
                        <PoolButton props={() => setWithdrawKey(withdrawKey => withdrawKey === pool.id ? null : pool.id)}  description="withdraw"/> 
                        <PoolButton props={() => setLiquidityKey(liquidityKey => liquidityKey === pool.id ? null : pool.id)} description="add liquidity"/>
                    </div>
                </div>
                {liquidityModal && <Deposit pool={pool} setLiquidityModal={setLiquidityModal} setLiquidityKey={setLiquidityKey}/>}
                {withdrawModal && <Withdraw pool={pool} setModalWithdraw={setModalWithdraw} setWithdrawKey={setWithdrawKey}/>}
            </div>
    )
}

export default CompoundItem;