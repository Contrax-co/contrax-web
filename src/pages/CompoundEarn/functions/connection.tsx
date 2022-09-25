import * as ethers from 'ethers';
import Web3 from 'web3';

export const wethAddress="0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";

/**
 * Checks to see if there is a wallet connected to the app
 * @param setCurrentWallet 
 * @returns 
 */
export const checkIfWalletIsConnected = async (setCurrentWallet: any) => {
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

/**
 * Gets the total amount of LP tokens (liquidity) that exists in the vault 
 * @param pool 
 * @param setTVL 
 */
export const getTotalValue = async(pool:any, setTVL:any) => {
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

/**
 * Gets the balance of the lp tokens that the user has 
 * @param pool 
 * @param currentWallet 
 * @param setUserLPBalance 
 * @param userLPBalance 
 */
export const getLPTokenBalance = async(pool:any, currentWallet:any, setUserLPBalance:any, userLPBalance:any) => {
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

/**
 * Gets the amount of LP tokens (receipt tokens) the user has in the vault
 * @param pool 
 * @param currentWallet 
 * @param setUserVaultBalance 
 * @param userVaultBalance 
 */
export const getUserVaultBalance = async(pool:any, currentWallet:any, setUserVaultBalance:any, userVaultBalance:any) => {
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

/**
 * Gets the balance of the native eth that the user has
 * @param currentWallet 
 * @param setEthUserBal 
 * @param ethUserBal 
 */
export const getEthBalance = async(currentWallet:any, setEthUserBal:any, ethUserBal:any) => {
    const {ethereum} = window;
    try{
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum);

            const balance = await provider.getBalance(currentWallet);
            const formattedBal = Number(ethers.utils.formatUnits(balance, 18));
            setEthUserBal(formattedBal);
            console.log(`User's balance of the eth token is: ${ethUserBal}`);

        }
        else{
            console.log("Ethereum object doesn't exist!");
        }
    }
    catch(error){
        console.log(error);
    }
}

/**
 * Deposits the lp token from user into the vault
 * @param pool 
 * @param depositAmount 
 */
export const deposit = async(pool:any, depositAmount:any, setLPDepositAmount:any, setLoading:any) => {
    const {ethereum} = window;
    setLoading(true);
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

            // approve the vault to spend asset
            const lpContract = new ethers.Contract(pool.lp_address, pool.lp_abi, signer);
            await lpContract.approve(pool.vault_addr, formattedBal);

            const gasEstimated:any = await vaultContract.estimateGas.deposit(formattedBal);
            const gasMargin = gasEstimated * 1.1;


            //the abi of the vault contract needs to be checked 
            const depositTxn = await vaultContract.deposit(formattedBal, {gasLimit: Math.ceil(gasMargin)});
            console.log("Depositing...", depositTxn.hash);

            const depositTxnStatus = await depositTxn.wait(1);
            if (!depositTxnStatus.status) {
                console.log("Error depositing into vault");
            }else{
                console.log("Deposited --", depositTxn.hash);
                setLPDepositAmount(0.0);
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

/**
 * Withdraws the lp token from the vault to the user
 * @param pool 
 * @param withdrawAmount 
 */
export const withdraw = async(pool:any, withdrawAmount:any, setLoading:any, setLPZapAmount:any) => {
    const {ethereum} = window;
    setLoading(true);
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

/**
 * Calculates compound APY
 * @param poolBaseAPY 
 * @param rewardPoolAPY 
 * @param setCompoundAPY 
 */
export const compoundAPYCalculator = (poolBaseAPY:any, rewardPoolAPY:any, setCompoundAPY:any) => {
    const baseAPY = poolBaseAPY / 100; 
    const rewardAPY = rewardPoolAPY / 100;

    const innerBracket = 1 + (0.8 * (rewardAPY/12));
    const power = innerBracket **  12;
    const base = power - 1; 

    const apy = (base + baseAPY) * 100; 
    setCompoundAPY(apy);
}

/**
 * Gets the total supply of the lp token
 * @param pool 
 * @param setTotalSupply 
 */
export const calculateTotalSupply = async(pool:any, setTotalSupply:any) => {
    const {ethereum} = window;
    try{
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum);
            const lpContract = new ethers.Contract(pool.lp_address, pool.lp_abi, provider);

            const supply = await lpContract.totalSupply();
            const formattedBal = Number(ethers.utils.formatUnits(supply, 18));
            setTotalSupply(formattedBal);      
            
            console.log(`total supply of lp tokens is ${formattedBal}`)

        }else {
            console.log("Ethereum object doesn't exist!");
        }
    }
    catch(error){
        console.log(error);
    }
}


export const calculateTotalVaultSupply = async (poolUsdValue:any, totalSupply:any, setOurTVL:any, tvl:any) => {
    const ourTVL = (poolUsdValue/totalSupply) * tvl; 
    setOurTVL(ourTVL); 
}

export const calculateUserUSDValue = async (poolUsdValue:any, totalSupply:any, setUserTVL:any, userVaultBalance:any) => {
    const ourTVL = (poolUsdValue/totalSupply) * userVaultBalance; 
    setUserTVL(ourTVL); 
}

export const queryAccount = async (setPoolQueryAddress: any) => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];

    setPoolQueryAddress(address);
}

