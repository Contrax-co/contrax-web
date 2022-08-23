import React, {useEffect, useRef, useState} from 'react';
import './addLiquidityModal.css';
import * as ethers from 'ethers';

function AddLiquidity({setLiquidityModal, liquidityKey, setLiquidityKey, pool}: any) {
    
    // close the modal when clicking outside the modal.
    const modalRef: any = useRef();
   
    const [currentWallet, setCurrentWallet] = useState("");
    const [userLPBalance, setUserLPBalance] = useState(0);
    const [depositAmount, setDepositAmount] = useState(0);


    // gets the specific pool from the JSON file
    const specificPool = pool.slice(liquidityKey-1, liquidityKey);

    const [poolName, setPoolName] = useState("");
    const [pair1, setPair1] = useState("");
    const [pair2, setPair2] = useState("");
    const [poolLogo1, setPoolLogo1] = useState("");
    const [poolLogo2, setPoolLogo2] = useState("");
    const [alt1, setAlt1] = useState("");
    const [alt2, setAlt2] = useState("");
    const [lpAddress, setLPAddress] = useState("");
    const [lpAbi, setLpAbi] = useState([]);
    const [vaultAddr, setVaultAddr] = useState("");
    const [vaultAbi, setVaultAbi] = useState([]);

    useEffect(() => {
        specificPool.forEach((pool:any) => {
            setPoolName(pool.name);
            setPair1(pool.pair1);
            setPair2(pool.pair2);
            setPoolLogo1(pool.logo1);
            setPoolLogo2(pool.logo2);
            setAlt1(pool.alt1);
            setAlt2(pool.alt2);

            setLPAddress(pool.lp_address);
            setLpAbi(pool.lp_abi);
            setVaultAddr(pool.vault_addr);
            setVaultAbi(pool.vault_abi);
        });
        checkIfWalletIsConnected(); 
        getLPTokenBalance();
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
                const lpContract = new ethers.Contract(lpAddress, lpAbi, provider);

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
                const vaultContract = new ethers.Contract(vaultAddr, vaultAbi, signer);
                

                /*
                * Execute the actual deposit functionality from smart contract
                */
               console.log("The amount to be deposited into vault", depositAmount);
                const formattedBal = ethers.utils.parseUnits(depositAmount.toString(), 18);
                const gasPrice = await provider.getGasPrice();
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

    const depositAll = async () => {
        const {ethereum} = window;
        try {
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const vaultContract = new ethers.Contract(vaultAddr, vaultAbi, signer);

                const gasPrice = await provider.getGasPrice();
                const depositAllTxn = await vaultContract.depositAll({gasLimit:gasPrice});
                const depositTxnStatus = await depositAllTxn.wait(1);

                if(!depositTxnStatus.status){
                    console.log("Error depositing into vault");
                }else {
                    console.log("Deposited --", depositAllTxn.hash);
                }
            }else {
                console.log("Ethereum object doesn't exist!");
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



    return (
        <div className="liquidity_container" ref={modalRef} onClick={closeModal}>
            <div className="liquidity_modal">
             
                
                <div className="single_pool_container">
            
                    <div className="lp_title">
                        <img className="lp_logo" alt={alt1} src={poolLogo1}/>
                        <p className="lp_name">{pair1}</p>
                        <p className="lp_name">/</p>
                        <img className="lp_logo" alt={alt2} src={poolLogo2}/>
                        <p className="lp_name">{pair2}</p>
                    </div>

                    <div className="lp_info">
                        <p>Liquidity</p>

                        <p>Pool APR</p>
                        <p>Underlying {pair1}</p>
                        <p>Underlying {pair2}</p>
                    </div>

                    <div className="split_info">
                        <div className="leftside">
                            <p>left side info</p>
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
                                            <p className="name">{poolName}</p>
                                        </div>
                                        <p className="get_lp">Get LP Tokens</p>
                                    </div>
                                    <div>
                                        <p onClick={deposit} className="deposit_button">deposit</p> 
                                        <p className="depositAll_button" onClick={depositAll}>depositAll</p>
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

export default AddLiquidity;