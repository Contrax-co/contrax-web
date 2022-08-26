import pools from '../../../public/api/pools.json';
import fs from "fs";
import { ethers } from "ethers";


export const getTotalValue = async() => {
    fetch(`http://localhost:3000/api/pools.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
      data.map((pool:any) => {
        const vaultAddress = pool.vault_addr; 
        const vaultAbi = pool.vault_abi;

        console.log('vault addr is ', vaultAddress.toString());

        const {ethereum} = window;
        try{
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const vaultContract = new ethers.Contract(vaultAddress, vaultAbi, signer);

                const totalValue = vaultContract.balance();

                pool.tvl = totalValue;
                fs.writeFileSync("../../../public/api/pools.json", JSON.stringify(pool))
            }
            else {
                console.log("Ethereum object doesn't exist!");
            }

        }catch (error) {
            console.log(error);
        }

      })
    })
}

// const eachPool = JSON.parse(fs.readFileSync("../../../public/api/pools.json").toString());
// eachPool.forEach(function (pool:any) {
//     pool.tvl = getTotalValue();
// })



