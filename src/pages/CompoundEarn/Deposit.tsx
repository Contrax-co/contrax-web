import React, {useRef, useState, useEffect} from 'react'; 
import * as ethers from 'ethers';
import './Deposit.css';
import {checkIfWalletIsConnected, getTotalValue, getLPTokenBalance, getEthBalance} from './components/connection';


const zapper_addr = "0x88c09E2897c36c9ce5A4F75FEb184280453f4691";
const zapper_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"investmentA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"_getSwapAmount","outputs":[{"internalType":"uint256","name":"swapAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"snowglobe","type":"address"},{"internalType":"uint256","name":"tokenAmountOutMin","type":"uint256"},{"internalType":"address","name":"tokenIn","type":"address"}],"name":"_swapAndStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"snowglobe","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"fullInvestmentIn","type":"uint256"}],"name":"estimateSwap","outputs":[{"internalType":"uint256","name":"swapAmountIn","type":"uint256"},{"internalType":"uint256","name":"swapAmountOut","type":"uint256"},{"internalType":"address","name":"swapTokenOut","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"snowglobe","type":"address"},{"internalType":"uint256","name":"tokenAmountOutMin","type":"uint256"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"tokenInAmount","type":"uint256"}],"name":"zapIn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"snowglobe","type":"address"},{"internalType":"uint256","name":"tokenAmountOutMin","type":"uint256"},{"internalType":"address","name":"tokenIn","type":"address"}],"name":"zapInETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"snowglobe","type":"address"},{"internalType":"uint256","name":"withdrawAmount","type":"uint256"}],"name":"zapOut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"snowglobe","type":"address"},{"internalType":"uint256","name":"withdrawAmount","type":"uint256"},{"internalType":"address","name":"desiredToken","type":"address"},{"internalType":"uint256","name":"desiredTokenOutMin","type":"uint256"}],"name":"zapOutAndSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

const wethAddress = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";

function Deposit({setLiquidityModal, setLiquidityKey, pool}: any) {
    const [tvl, setTVL] = useState(0);
    const [currentWallet, setCurrentWallet] = useState("");

    const [depositAmount, setDepositAmount] = useState(0);
    const [userLPBalance, setUserLPBalance] = useState(0);

    const [ethZapAmount, setEthZapAmount] = useState(0);
    const [ethUserBal, setEthUserBal] = useState(0);

    // close the modal when clicking outside the modal.
    const modalRef: any = useRef();

    useEffect(() => {
        checkIfWalletIsConnected(setCurrentWallet);
        getLPTokenBalance(pool, currentWallet, setUserLPBalance, userLPBalance);
        getTotalValue(pool, setTVL);
        getEthBalance(currentWallet, setEthUserBal, ethUserBal);
    })

    const closeModal = (e: any) => {
        if (e.target === modalRef.current) {
            setLiquidityModal(false);
            setLiquidityKey(null);
        }
    };

    const deposit = async() => {
        const {ethereum} = window;
        try{
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const vaultContract = new ethers.Contract(pool.vault_addr, pool.vault_abi, signer);
                
                /*
                * Execute the actual deposit functionality from smart contract
                */
                console.log("The amount to be deposited into vault", depositAmount);
                const formattedBal = ethers.utils.parseUnits(depositAmount.toString(), 18);
                const gasPrice = await provider.getGasPrice();

                // approve the vault to spend asset
                const lpContract = new ethers.Contract(pool.lp_address, pool.lp_abi, signer);
                await lpContract.approve(pool.vault_addr, formattedBal);


                //the abi of the vault contract needs to be checked 
                const depositTxn = await vaultContract.deposit(formattedBal, {gasLimit: gasPrice});
                console.log("Depositing...", depositTxn.hash);

                const depositTxnStatus = await depositTxn.wait(1);
                if (!depositTxnStatus.status) {
                    console.log("Error depositing into vault");
                }else{
                    console.log("Deposited --", depositTxn.hash);
                }
                
            }else {
                console.log("Ethereum object doesn't exist!");
              }
        }catch (error) {
            console.log(error);
        }
    }

    const zapIn = async() => {
        const {ethereum} = window;
        try{
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const zapperContract = new ethers.Contract(zapper_addr, zapper_abi, signer); 

                /*
                * Execute the actual deposit functionality from smart contract
                */
                console.log("The amount to be deposited into vault", ethZapAmount);
                const formattedBal = ethers.utils.parseUnits(ethZapAmount.toString(), 18);
                const gasPrice = await provider.getGasPrice();
                
                const zapperTxn = await zapperContract.zapInETH(pool.vault_addr, formattedBal, wethAddress, {value:formattedBal, gasLimit: gasPrice});

                console.log("Zapping...", zapperTxn.hash);

                const zapperTxnStatus = await zapperTxn.wait(1);
                if (!zapperTxnStatus.status) {
                    console.log("Error zapping into vault");
                }else{
                    console.log("Deposited --", zapperTxn.hash);
                }
            }
            else{
                console.log("Zapper object doesn't exist!")
            }

        }catch(error){
            console.log(error);
        }
    }

    const handleChange = (e:any) => {
        setDepositAmount(e.target.value);
    }

    const depositTotal = () => {
        setDepositAmount(userLPBalance);
    }

    const handleZapChange = (e:any) => {
        setEthZapAmount(e.target.value);
    }

    const depositTotalEth = () => {
        setEthZapAmount(ethUserBal);
    }


    return (
        <div className="liquidity_container" ref={modalRef} onClick={closeModal}>
            <div className="liquidity_modal">
                <div className="single_pool_container">

                    <div className="lp_title">
                        <img className="lp_logo" alt={pool.alt1} src={pool.logo1}/>
                        <p className="lp_name">{pool.pair1}</p>
                        <p className="lp_name">/</p>
                        <img className="lp_logo" alt={pool.alt2} src={pool.logo2}/>
                        <p className="lp_name">{pool.pair2}</p>
                    </div>

                    <div className="split_info">
                        <div className="leftside">
                            <div className="topleft_container">
                                <div className="topleft_info">
                                    <p>Liquidity</p>
                                    {(tvl < 1000) ? (
                                        <div>
                                        <p>{"<"}1000</p> 
                                        </div>
                                    ):(
                                        <div>{tvl}</div>
                                    )}

                                </div>

                                <div className="topleft_info">
                                    <p>Base APR</p>
                                    <p></p>
                                </div>

                                <div className="topleft_info">
                                    <p>Boosted APR</p>
                                    <p>-</p>
                                </div>

                            </div>
                            <div className="zap_container">
                                <div className="weth_bal">
                                    <p>Eth Balance</p>
                                    {ethUserBal.toFixed(4)}
                                </div>

                                <div className="weth_deposit_amount">
                                    <input type="number" className="weth_bal_input" placeholder="0.0" value={ethZapAmount} onChange={handleZapChange}/>
                                    <p onClick={depositTotalEth} className="all_weth_tokens">MAX</p>
                                </div>
                            
                                <p onClick={zapIn} className="zap_button">Zap in ETH</p>
                            </div>
                          

                        </div>

                        <div className="deposit_withdraw">
                            {/* If there is no current wallet then render this button  */}
                            {!currentWallet ? (
                                <div className="connect_wallet" onClick={checkIfWalletIsConnected}>Connect Wallet</div>
                                ):(
            
                                <form className="deposit_container" onSubmit={deposit}>
                                    <div>
                                        <div className="user_balance">
                                            <p className="bal">LP token Balance </p>
                                            <p>{userLPBalance.toFixed(2)}</p>
                                        </div>
                                        <div className ="deposit_amount">
                                            <input type="number" placeholder="0.0" className="bal_input" value={depositAmount} onChange={handleChange}/>
                                            <p onClick={depositTotal} className="all_tokens">MAX</p>
                                            <p className="name">{pool.name}</p>
                                        </div>
                                        <p className="get_lp">Get LP Tokens</p>
                                    </div>
                                    <div>
                                        <p onClick={deposit} className="deposit_button">deposit</p> 
                                    </div>
                              
                                </form>
                        
                            )}
                        </div>

                    </div>
                    
                </div>
            </div>
            
        </div>

        )
    }

export default Deposit