import React, {useState, useEffect} from 'react';
import PoolButton from '../../components/PoolButton';
import './compoundItem.css';
import Withdraw from './Withdraw';
import * as ethers from 'ethers';
import Deposit from './Deposit';
import {checkIfWalletIsConnected, getUserVaultBalance, getTotalValue} from './components/connection'; 

function CompoundItem({pool}: any) {
    const [currentWallet, setCurrentWallet] = useState("");
    const [tvl, setTVL] = useState(0);
    const [userVaultBalance, setUserVaultBalance] = useState(0);

    const [withdrawKey, setWithdrawKey] = useState(null);
    const [liquidityKey, setLiquidityKey] = useState(null);

    const [liquidityModal, setLiquidityModal] = useState(false);
    const [withdrawModal, setModalWithdraw] = useState(false);

    useEffect(() => {
          
        checkIfWalletIsConnected(setCurrentWallet); 
        getUserVaultBalance(pool, currentWallet, setUserVaultBalance, userVaultBalance);
        getTotalValue(pool, setTVL);
        grabKeys(withdrawKey, liquidityKey);
    })


    const grabKeys = (id1:any, id2: any) => {
        setWithdrawKey(id1);
        setLiquidityKey(id2);
    
        if(withdrawKey != null){
          setModalWithdraw(true);
        }else if (liquidityKey != null){
          setLiquidityModal(true);
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
                                <p>{userVaultBalance.toFixed(3)}</p>

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