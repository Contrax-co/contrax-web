import * as ethers from 'ethers';

export const response = async (address:any, setPrices:any) => {
    const url = "https://api.coingecko.com/api/v3/simple/token_price/arbitrum-one?contract_addresses=" + address + "&vs_currencies=usd";
    var headers = {}

    fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Error occurred when trying to fetch")
        }
        return response.json(); 
    })
    .then(data => {
        const prices = JSON.stringify(data);
        const parse = JSON.parse(prices);

        const price = parse[`${address}`]["usd"]; 

        setPrices(Number(price));
    })
    // await fetch(`https://api.coingecko.com/api/v3/simple/token_price/arbitrum-one?contract_addresses=${address}&vs_currencies=usd`)
    // .then(response => response.json())
    // .then(data => {
    //     const prices = JSON.stringify(data);
    //     const parse = JSON.parse(prices);

    //     const price = parse[`${address}`]["usd"]; 

    //     setPrices(Number(price));
    // })
} 

export const tokensFromContract = async(pool:any, prices1:any, prices2:any, setSingleValue:any) => {
    const {ethereum} = window; 
    try{
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum); 
            const lpContract = new ethers.Contract(pool.lp_address, pool.lp_abi, provider);

            const _totalSupply = await lpContract.totalSupply();
            const totalSupply = Number(ethers.utils.formatUnits(_totalSupply, 18));

            const[_reserve0, _reserve1, ] = await lpContract.getReserves(); 
            const reserve0 = Number(ethers.utils.formatUnits(_reserve0, 18));
            const reserve1 = Number(ethers.utils.formatUnits(_reserve1, 18));

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


export const calculateUserDeposit = async ({pool, currentWallet, setUserDeposit}:any ) => {
    const {ethereum} = window; 
    try{
        if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const vaultContract = new ethers.Contract(pool.vault_addr, pool.vault_abi, signer);

            const balance = await vaultContract.balanceOf(currentWallet);
            const formattedBal = Number(ethers.utils.formatUnits(balance, 18));
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