import React, { useState, useEffect} from 'react';
import './Withdraw.css';
import { ethers } from "ethers";
import {checkIfWalletIsConnected} from './functions/connection';
import {getUserVaultBalance, wethAddress, withdraw} from './functions/connection';
import Toggle from './components/Toggle';
import {SyncLoader} from "react-spinners";

function Withdraw({pool, lightMode}: any) {
    const [loading, setLoading] = useState(false);

    const [currentWallet, setCurrentWallet] = useState("");
    const [toggleType, setToggleType] = useState(false);
    const [userVaultBalance, setUserVaultBalance] = useState(0);

    const [lpZapAmount, setLPZapAmount] = useState(0);


    useEffect(() => {
        checkIfWalletIsConnected(setCurrentWallet);
        getUserVaultBalance(pool, currentWallet, setUserVaultBalance, userVaultBalance);
    }, [pool, currentWallet, userVaultBalance])


    const zapOut = async() => {
        const {ethereum} = window;
        setLoading(true);
        try{
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const zapperContract = new ethers.Contract(pool.zapper_addr, pool.zapper_abi, signer); 

                
                /*
                * Execute the actual withdraw functionality from smart contract
                */
                console.log("The amount to be withdrawn from vault", lpZapAmount);
                const formattedBal = ethers.utils.parseUnits(lpZapAmount.toString(), 18);

                const vaultContract = new ethers.Contract(pool.vault_addr, pool.vault_abi, signer);
                vaultContract.approve(pool.zapper_addr, formattedBal);

                const lpContract = new ethers.Contract(pool.lp_address, pool.lp_abi, signer);
                await lpContract.approve(pool.zapper_addr, formattedBal);

                const gasEstimated:any = await zapperContract.estimateGas.zapOutAndSwap(pool.vault_addr, formattedBal, wethAddress, 0);
                const gasMargin = gasEstimated * 1.1;

                const withdrawTxn = await zapperContract.zapOutAndSwap(pool.vault_addr, formattedBal, wethAddress, 0, {gasLimit: Math.ceil(gasMargin)});
                console.log("Withdrawing...", withdrawTxn.hash);

                const withdrawTxnStatus = await withdrawTxn.wait(1);
                if (!withdrawTxnStatus.status) {
                    console.log("Error withdrawing into vault");
                }else{
                   console.log("Withdrawn --", withdrawTxn.hash); 
                   setLPZapAmount(0.0);
                }
                
            }else {
                console.log("Ethereum object doesn't exist!");
              }
        }catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    const handleZapChange = (e:any) => {
        setLPZapAmount(e.target.value);
    };

    const withdrawTotal = () => {
        setLPZapAmount(userVaultBalance);
    };

    return (
        <div className="whole_tab">
            <Toggle 
                pool={pool}
                active={toggleType}
                onClick={() => setToggleType(!toggleType)}
                lightMode={lightMode}
            />

            <div className="detail_container">

                <div className={`withdrawal_description ${lightMode && "withdrawal_description--light"}`}>
                    <p className={`withdrawal_title ${lightMode && "withdrawal_title--light"}`}>Removal of Liquidity</p>
                    {toggleType ? (
                        <p className="withdrawal_description2">Your deposited LP token can be withdrawn from the autocompounding vault back to the user's connected wallet. </p>
                    ): (
                        <p className="withdrawal_description2">Your deposited LP token can be withdrawn from the autocompounding vault back into wallet as 
                    native ETH tokens. </p>
                    )}
                </div>

                <div className={`withdraw_tab ${lightMode && "withdraw_tab--light"}`}>
                    <div className="lp_bal">
                        <p>LP balance:</p>
                        <p>{userVaultBalance.toFixed(4)}</p>
                    </div>

                    <div className="withdraw_tab2">
                        <div className={`lp_withdraw_amount ${lightMode && "lp_withdraw_amount--light"}`}>
                            <input type="number" className={`lp_bal_input ${lightMode && "lp_bal_input--light"}`} placeholder="0.0" value={lpZapAmount} onChange={handleZapChange}/>
                            <p onClick={withdrawTotal} className={`all_LP_tokens ${lightMode && "all_LP_tokens--light"}`}>MAX</p>
                        </div>
                        {toggleType ? (
                            <div className={`zap_button ${lightMode && "zap_button--light"}`} onClick={() => withdraw(pool, lpZapAmount, setLoading, setLPZapAmount)}>
                                <p>Withdraw LP</p>
                            </div>
                        ): (
                            <div className={`zap_button ${lightMode && "zap_button--light"}`} onClick={zapOut}>
                                <p>Withdraw ETH</p>
                            </div>
                        )}
                      
                    </div>

                </div>
            </div>

            {loading && (
            <div className="spinner_container">
                <SyncLoader loading={loading} className="spinner_object" color="#36d7b7"/>
            </div>
            )}
        </div>
    )
}

export default Withdraw