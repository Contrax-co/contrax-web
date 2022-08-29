import React, {useRef, useState, useEffect} from 'react'; 
import * as ethers from 'ethers';
import './Deposit.css';

function Deposit({setLiquidityModal, setLiquidityKey, pool}: any) {
    const [tvl, setTVL] = useState(0);
    const [currentWallet, setCurrentWallet] = useState("");

    const [depositAmount, setDepositAmount] = useState(0);
    const [userLPBalance, setUserLPBalance] = useState(0);

    // close the modal when clicking outside the modal.
    const modalRef: any = useRef();

    useEffect(() => {
        checkIfWalletIsConnected();
        getLPTokenBalance();
        getTotalValue();
    })

    const closeModal = (e: any) => {
        if (e.target === modalRef.current) {
            setLiquidityModal(false);
            setLiquidityKey(null);
        }
    };


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

    /*
    * Balance of lp token that the user has
    */
    const getLPTokenBalance = async() => {
        const {ethereum} = window; 
        try {
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const lpContract = new ethers.Contract(pool.lp_address, pool.lp_abi, provider);

                const balance = await lpContract.balanceOf(currentWallet);
                const formattedBal = Number(ethers.utils.formatUnits(balance, 18));
                setUserLPBalance(formattedBal);
                console.log(`User's balance of the lp token is: ${userLPBalance}`);
            }
            else {
                console.log("Ethereum object doesn't exist!");
            }
        }
        catch (error){
            console.log(error);
        }
    }

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

    const handleChange = (e:any) => {
        setDepositAmount(e.target.value);
    }

    const depositTotal = () => {
        setDepositAmount(userLPBalance);
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