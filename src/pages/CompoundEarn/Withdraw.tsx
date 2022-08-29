import React, {useRef, useState, useEffect} from 'react';
import './Withdraw.css';
import { ethers } from "ethers";
import {checkIfWalletIsConnected} from './components/connection';
import {getUserVaultBalance} from './components/connection';

function Withdraw({setModalWithdraw, setWithdrawKey, pool}: any) {
    const [currentWallet, setCurrentWallet] = useState("");
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [userVaultBalance, setUserVaultBalance] = useState(0);

    // close the modal when clicking outside the modal.
    const modalRef: any = useRef();

    useEffect(() => {
        checkIfWalletIsConnected(setCurrentWallet);
        console.log('the current account is', currentWallet);
        getUserVaultBalance(pool, currentWallet, setUserVaultBalance, userVaultBalance);
    })

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
                const vaultContract = new ethers.Contract(pool.vault_addr, pool.vault_abi, signer);

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
                            <p className="withdraw_name">{pool.name}</p>
                        </div>
                    </div>

                    <div>
                        <p onClick={withdraw} className="withdraw_button">withdraw</p> 
                    </div>
  
                   
                </form>
            </div>
        </div>
    )
}

export default Withdraw