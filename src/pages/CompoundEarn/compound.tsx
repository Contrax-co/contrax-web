import React, {useState, useEffect} from 'react';
import CompoundItem from './compoundItem';
import './compound.css';

function Compound({lightMode, currentWallet}: any) {
    const [pools, setPools] = useState([]);
   
    useEffect(() => {
        try{
            const {ethereum} = window; 
            if(ethereum) {
                fetch(`http://localhost:3000/api/pools.json`)       //`http://localhost:3000/api/pools.json` or `https://testing.contrax.finance/api/pools.json` for when we want it done locally
                .then(response => response.json())
                .then(data => {
                setPools(data); 
                })
            }
        }
        catch (error){
            console.log(error);
        }
    }, [currentWallet]);



    return (       
        <div className={`farms ${lightMode && "farms--light"}`}>
            <div className={`farm_header ${lightMode && "farm_header--light"}`}>
                <p>Farms</p> 
            </div>
            
            
            <div className="pools_list">
                {pools.map((pool:any) => (
                    <CompoundItem
                        key={pool.id} 
                        pool={pool}
                        lightMode={lightMode}
                        currentWallet={currentWallet}
                    />
                ))}
            </div>
        </div>
                
    )
}

export default Compound;