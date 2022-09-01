import * as ethers from 'ethers';

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