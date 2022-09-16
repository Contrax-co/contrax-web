import React, {useState, useEffect} from 'react';
import {wethAddress, getLPTokenBalance, getEthBalance, deposit} from './functions/connection';
import * as ethers from 'ethers';
import './AddLiquidity.css';
import Toggle from './components/Toggle';
import DetailsMod from './components/showDetailsMod';
import {SyncLoader} from "react-spinners";


function AddLiquidity({pool, platform, rewards, lightMode, currentWallet, baseAPY, compoundAPY, connectWallet, showDetails, prop1, prop2}:any) {
    const [loading, setLoading] = useState(false);

    const [toggleType, setToggleType] = useState(false);

    const [ethUserBal, setEthUserBal] = useState(0);
    const [lpUserBal, setLPUserBal] = useState(0);

    const [ethZapAmount, setEthZapAmount] = useState(0.0);
    const [lpDepositAmount, setLPDepositAmount] = useState(0.0);

    useEffect(() => {
        getEthBalance(currentWallet, setEthUserBal, ethUserBal);
        getLPTokenBalance(pool, currentWallet, setLPUserBal, lpUserBal);
    }, [currentWallet, ethUserBal, lpUserBal, pool]);

    const zapIn = async() => {
        const {ethereum} = window;
        setLoading(true);
        try{
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const zapperContract = new ethers.Contract(pool.zapper_addr, pool.zapper_abi, signer); 

                /*
                * Execute the actual deposit functionality from smart contract
                */
                console.log("The amount to be deposited into vault", ethZapAmount);
                const formattedBal = ethers.utils.parseUnits(ethZapAmount.toString(), 18);
        
                const gasEstimated:any = await zapperContract.estimateGas.zapInETH(pool.vault_addr, formattedBal, wethAddress, {value:formattedBal});
                console.log("Estimated gas is: ", gasEstimated)
                const gasMargin = gasEstimated * 1.1; 
                
                const zapperTxn = await zapperContract.zapInETH(pool.vault_addr, formattedBal, wethAddress, {value:formattedBal, gasLimit: Math.ceil(gasMargin)});

                console.log("Zapping...", zapperTxn.hash);

                const zapperTxnStatus = await zapperTxn.wait(1);
                if (!zapperTxnStatus.status) {
                    console.log("Error zapping into vault");
                }else{
                    console.log("Deposited --", zapperTxn.hash);
                    setEthZapAmount(0.0); 
                }
            }
            else{
                console.log("Zapper object doesn't exist!")
            }

        }catch(error){
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }



    const handleZapChange = (e:any) => {
        setEthZapAmount(e.target.value);
    }

    const handleDepositChange = (e:any) => {
        setLPDepositAmount(e.target.value);
    }

    const depositTotalEth = () => {
        setEthZapAmount(ethUserBal);
    }

    const depositTotalLP = () => {
        setLPDepositAmount(lpUserBal);
    }

    return (
        <div className="addliquidity_outsidetab">

            <Toggle 
                pool={pool}
                active={toggleType}
                onClick={() => setToggleType(!toggleType)}
                lightMode={lightMode}
            />

            <div className="addliquidity_descriptiontab">
                <div className={`addliquidity_description ${lightMode && "addliquidity_description--light"}`}>
                    <p className={`addliquidity_description_title ${lightMode && "addliquidity_description_title--light"}`}>Description</p>
                    {toggleType ? (
                        <p className="description_description">This is a {platform} liquidity pool composed of <a href="https://app.sushi.com/legacy/pool?chainId=42161" className="span">{pool.name}</a> tokens. 
                        Your LP tokens are deposited directly into our vaults and then staked in the {platform} protocol 
                        for {rewards} rewards. All rewards are sold to purchase more LP tokens. </p>
                    ) : (
                        <p className="description_description">This is a {platform} liquidity pool composed of <a href="https://app.sushi.com/legacy/pool?chainId=42161" className="span">{pool.name}</a> tokens. 
                        Your native ETH token is zapped into the liquidity pool and the deposit token is then staked in the {platform} protocol 
                        for {rewards} rewards. All rewards are sold to purchase more LP tokens. </p>
                    )}
                
                </div>

                
                <div className={`addliquidity_tab ${lightMode && "addliquidity_tab--light"}`}>
               
                    <div className={`inside_toggle ${!currentWallet && "inside_toggle-none"}`}>
                
                        {toggleType ? (
                                <div className={`addliquidity_weth_bal ${lightMode && "addliquidity_weth_bal--light"}`}>
                                    <p>{pool.name} balance:</p>
                                    <p>{lpUserBal.toFixed(4)}</p>
                                </div>
                            ): (
                                <div className={`addliquidity_weth_bal ${lightMode && "addliquidity_weth_bal--light"}`}>
                                    <p>ETH balance:</p>
                                    <p>{ethUserBal.toFixed(4)}</p>
                                </div>
                        )}

                        {toggleType ? (
                                <div className={`deposit_tab ${!currentWallet && "deposit_tab-disable"}`}>
                                    <div className={`weth_deposit_amount ${lightMode && "weth_deposit_amount--light"}`}>
                                        <input type="number" className={`weth_bal_input ${lightMode && "weth_bal_input--light"}`} placeholder="0.0" value={lpDepositAmount} onChange={handleDepositChange}/>
                                        <p onClick={depositTotalLP} className={`all_weth_tokens ${lightMode && "all_weth_tokens--light"}`}>MAX</p>
                                    </div>
                                    <div className={`zap_button ${lightMode && "zap_button--light"}`} onClick={() => deposit(pool, lpDepositAmount, setLPDepositAmount, setLoading)}>
                                        <p>Deposit LP</p>
                                    </div>
                                    
                                </div>

                            ): (

                                <div className={`deposit_tab ${!currentWallet && "deposit_tab-disable"}`}>
                                    <div className={`weth_deposit_amount ${lightMode && "weth_deposit_amount--light"}`}>
                                        <input type="number" className={`weth_bal_input ${lightMode && "weth_bal_input--light"}`} placeholder="0.0" value={ethZapAmount} onChange={handleZapChange}/>
                                        <p onClick={depositTotalEth} className={`all_weth_tokens ${lightMode && "all_weth_tokens--light"}`}>MAX</p>
                                    </div>
                                    <div className={`zap_button ${lightMode && "zap_button--light"}`} onClick={zapIn}>
                                        <p>Deposit ETH</p>
                                    </div>
                                    
                                </div>
                                
                        )}

                    </div>
                    {currentWallet ? null : (
                        <div className={`no_overlay ${!currentWallet && "overlay"}`} onClick={connectWallet}>
                            <p>connect wallet</p>
                        </div>
                    )}
               
                </div>
                
            </div>
            <DetailsMod
                lightMode={lightMode}
                prop1={prop1}
                showDetails={showDetails}
                baseAPY={baseAPY}
                compoundAPY={compoundAPY}
                prop2={prop2}
            />

            {loading && (
            <div className="spinner_container">
                <SyncLoader loading={loading} className="spinner_object" color="#36d7b7"/>
            </div>
            )}  
          
        </div>
    )
}

export default AddLiquidity