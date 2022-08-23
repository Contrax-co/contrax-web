import React, {useRef, useState, useEffect} from 'react';
import { ethers } from "ethers";
import './withdrawModal.css';

function WithdrawModal({setModalWithdraw, withdrawKey, setWithdrawKey, pool}: any) {
    // close the modal when clicking outside the modal.
    const modalRef: any = useRef();

    const [currentWallet, setCurrentWallet] = useState("");
    const [userVaultBalance, setUserVaultBalance] = useState(0);
    const [withdrawAmount, setWithdrawAmount] = useState(0);

    // gets the specific pool from the JSON file
    const specificPool = pool.slice(withdrawKey-1, withdrawKey);

    const [poolName, setPoolName] = useState("");
    const [pair1, setPair1] = useState("");
    const [pair2, setPair2] = useState("");
    const [poolLogo1, setPoolLogo1] = useState("");
    const [poolLogo2, setPoolLogo2] = useState("");
    const [alt1, setAlt1] = useState("");
    const [alt2, setAlt2] = useState("");
    const [lpAddress, setLPAddress] = useState("");
    const [lpAbi, setLpAbi] = useState([]);
    const [vaultAddress, setVaultAddress] = useState("");
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
            setVaultAddress(pool.vault_addr);
            setVaultAbi(pool.vault_abi);
        });

        checkIfWalletIsConnected();
        getUserVaultBalance();

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
                const vaultContract = new ethers.Contract(vaultAddress, vaultAbi, signer);

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

    const closeModal = (e: any) => {
        if (e.target === modalRef.current) {
            setModalWithdraw(false);
            setWithdrawKey(null);
        }
    };

    const withdraw = async() => {
        const {ethereum} = window;
        try{
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const vaultContract = new ethers.Contract(vaultAddress, vaultAbi, signer);

                /*
                * Execute the actual withdraw functionality from smart contract
                */
                const formattedBal = ethers.utils.parseUnits(withdrawAmount.toString(), 18);
                const gasPrice = await provider.getGasPrice();
                const withdrawTxn = await vaultContract.withdraw(formattedBal, {gasLimit:gasPrice});
                console.log("Withdrawing...", withdrawTxn.hash);

                const withdrawTxnStatus = await withdrawTxn.wait(1);
                if (!withdrawTxnStatus.status) {
                    console.log("Error withdrawing into vault");
                }else{
                   console.log("Withdrawn --", withdrawTxn.hash); 
                }
                
            }else {
                console.log("Ethereum object doesn't exist!");
              }
        }catch (error) {
            console.log(error);
        }
    }

    const withdrawAll = async() => {
        const {ethereum} = window;
        try{
            if (ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const vaultContract = new ethers.Contract(vaultAddress, vaultAbi, signer);

                /*
                * Execute the actual withdraw functionality from smart contract
                */
                const gasPrice = await provider.getGasPrice();
                const withdrawTxn = await vaultContract.withdrawAll({gasLimit: gasPrice});
                console.log("Withdrawing...", withdrawTxn.hash);

                const withdrawTxnStatus = await withdrawTxn.wait(1);
                if (!withdrawTxnStatus.status) {
                    console.log("Error withdrawing into vault");
                }else{
                   console.log("Withdrawn --", withdrawTxn.hash); 
                }

            }else{
                console.log("Ethereum object does not exist!")
            }

        }catch(error){
            console.log(error);
        }
    }

    const handleChange = (e:any) => {
        setWithdrawAmount(e.target.value);
    };

    const withdrawTotal = () => {
        setWithdrawAmount(userVaultBalance);
    };

    return (
        <div className="detail_container" ref={modalRef} onClick={closeModal}>
            <div className="detail_modal">
                <form className="amount" onSubmit={withdraw}>
                    <div className="top">
                        <div className="staked_balance">
                            <p className="staked_bal">Tokens staked</p> 
                            <p>{userVaultBalance} LP</p> 
                        </div>

                        <div className ="withdraw_amount">
                            <input type="number" placeholder="0.0" className="bal_input" value={withdrawAmount} onChange={handleChange}/>
                            <p onClick={withdrawTotal} className="allWithdraw_tokens">MAX</p>
                            <p className="withdraw_name">{poolName}</p>
                        </div>
                    </div>

                    <div>
                        <p onClick={withdraw} className="withdraw_button">withdraw</p> 
                        <p onClick={withdrawAll} className="withdrawAll_button">withdraw all</p>
                    </div>
  
                   
                </form>
                
            </div>
        </div>
    )
}

export default WithdrawModal;