import * as ethers from 'ethers';


export const SUSHI_CHEF = "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3";
export const sushiAbi = [{"inputs":[{"internalType":"contract IERC20","name":"_sushi","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":true,"internalType":"contract IERC20","name":"lpToken","type":"address"},{"indexed":true,"internalType":"contract IRewarder","name":"rewarder","type":"address"}],"name":"LogPoolAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":true,"internalType":"contract IRewarder","name":"rewarder","type":"address"},{"indexed":false,"internalType":"bool","name":"overwrite","type":"bool"}],"name":"LogSetPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"sushiPerSecond","type":"uint256"}],"name":"LogSushiPerSecond","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"lastRewardTime","type":"uint64"},{"indexed":false,"internalType":"uint256","name":"lpSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accSushiPerShare","type":"uint256"}],"name":"LogUpdatePool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"SUSHI","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"contract IRewarder","name":"_rewarder","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"calls","type":"bytes[]"},{"internalType":"bool","name":"revertOnFail","type":"bool"}],"name":"batch","outputs":[{"internalType":"bool[]","name":"successes","type":"bool[]"},{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lpToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"pids","type":"uint256[]"}],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingSushi","outputs":[{"internalType":"uint256","name":"pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permitToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"uint128","name":"accSushiPerShare","type":"uint128"},{"internalType":"uint64","name":"lastRewardTime","type":"uint64"},{"internalType":"uint64","name":"allocPoint","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"pools","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewarder","outputs":[{"internalType":"contract IRewarder","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IRewarder","name":"_rewarder","type":"address"},{"internalType":"bool","name":"overwrite","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sushiPerSecond","type":"uint256"}],"name":"setSushiPerSecond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sushiPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"bool","name":"direct","type":"bool"},{"internalType":"bool","name":"renounce","type":"bool"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"updatePool","outputs":[{"components":[{"internalType":"uint128","name":"accSushiPerShare","type":"uint128"},{"internalType":"uint64","name":"lastRewardTime","type":"uint64"},{"internalType":"uint64","name":"allocPoint","type":"uint64"}],"internalType":"struct MiniChefV2.PoolInfo","name":"pool","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"int256","name":"rewardDebt","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawAndHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"}];



export const response = async (address:any, setPrices:any) => {
    await fetch(`https://api.coingecko.com/api/v3/simple/token_price/arbitrum-one?contract_addresses=${address}&vs_currencies=usd`)
    .then(response => response.json())
    .then(data => {
        const prices = JSON.stringify(data);
        const parse = JSON.parse(prices);

        const price = parse[`${address}`]["usd"]; 

        setPrices(Number(price));
     })
} 


export const tokensFromContract = async(pool:any, prices1:any, prices2:any, setSingleValue:any) => {
    const {ethereum} = window; 
    try{
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum); 
            const lpContract = new ethers.Contract(pool.lp_address, pool.lp_abi, provider);

            const _totalSupply = await lpContract.totalSupply();
            const totalSupply = parseFloat(ethers.utils.formatEther(_totalSupply));

            const[_reserve0, _reserve1, ] = await lpContract.getReserves(); 
            const reserve0 = parseFloat(ethers.utils.formatEther(_reserve0));
            const reserve1 = parseFloat(ethers.utils.formatEther(_reserve1));

            const value0 = reserve0 * prices1; 
            const value1 = reserve1 * prices2;

            const singleValue = (value0+value1)/totalSupply;
            setSingleValue(singleValue); 
        }
        else{
            console.log("Ethereum object doesn't exist!'")
        }

    }
    catch(error){
        console.log(error);
    }
}

export const getCurrentLiquidity = async(pool:any, setTotalLiquidity:any) => {
    const {ethereum} = window; 
    try{
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const vaultContract =  new ethers.Contract(pool.vault_addr, pool.vault_abi, signer); 

            const _supply = await vaultContract.totalSupply(); 
            const supply = parseFloat(ethers.utils.formatEther(_supply)); 

            setTotalLiquidity(supply); 

        }
        else{
            console.log("Ethereum object doesn't exist!"); 
        }

    }
    catch(error){
        console.log(error);
    }
}


export const calculateUserDeposit = async ({pool, currentWallet, setUserDeposit}:any ) => {
    const {ethereum} = window; 
    try{
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const vaultContract = new ethers.Contract(pool.vault_addr, pool.vault_abi, signer);

            const balance = await vaultContract.balanceOf(currentWallet);
            const formattedBal = parseFloat(ethers.utils.formatEther(balance));
            setUserDeposit(formattedBal);
        
        }
        else {
            console.log("Ethereum object doesn't exist!'")
        }

    }
    catch(err) {
        console.log(err);
    }
}


export const calculateSushiApyArbitrum = async(pool:any, singleValue:any, priceOfSushi:any, setAPY:any) => {
    const {ethereum} = window; 
    try{
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const multicallsushiMinichef = new ethers.Contract(SUSHI_CHEF, sushiAbi, signer);

            const lpToken = new ethers.Contract(pool.lp_address, pool.lp_abi, provider);

            const sushiPerSecondBN = await multicallsushiMinichef.sushiPerSecond();
            const totalAllocPointBN = await multicallsushiMinichef.totalAllocPoint();
            const poolInfo = await multicallsushiMinichef.poolInfo(pool.pool_id);
            const totalSupplyBN = await lpToken.balanceOf(SUSHI_CHEF);

            const totalSupply = parseFloat(ethers.utils.formatEther(totalSupplyBN));
            const sushiRewardsPerSecond = (parseFloat(ethers.utils.formatEther(sushiPerSecondBN)) *
                poolInfo.allocPoint.toNumber()) /
                totalAllocPointBN.toNumber();

            const pricePerToken = singleValue; 
            const sushiRewardsPerYear = sushiRewardsPerSecond * (365 * 24 * 60 * 60);
            const valueRewardedPerYear = priceOfSushi * sushiRewardsPerYear;

            const totalValueStaked = totalSupply * pricePerToken;
            const sushiAPY = valueRewardedPerYear / totalValueStaked;
            setAPY(sushiAPY);
          
        }
        else{
            console.log("Ethereum object doesn't exist!"); 
        }

    }
    catch(err) {
        console.log(err);
    }
}