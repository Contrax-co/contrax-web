import React, { useState, useEffect } from 'react'
import BottomBar from '../../components/bottomBar/BottomBar'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import PoolButton from '../../components/PoolButton';
import './compoundEarn.css';


export default function CompoundEarn() {
  const [depositWithdraw, setDepositWithdraw] = useState(false);
  const [pools, setPools] = useState([]);

  // fetch the json of the pools and push them into an array for mapping 
  useEffect(() => {
    try{
      const {ethereum} = window; 
      if(ethereum) {
        fetch(`http://localhost:3000/api/pools.json`)
        .then(response => response.json())
        .then(data => {
          setPools(data); 
          console.log("Pools are", data);
        })
      }
    }
    catch (error){
      console.log(error);
    }
  }, []);

  const handleClick = () => {
    setDepositWithdraw(!depositWithdraw);
  }

  return (
    <div>
      <Navigationbar />
      <div className="container">
        {
          pools.map((pool: any) => (
            <div className="boundary" key={pool.id} onClick={handleClick}>
              <div className='pool-info'>

                    <div className="sub-container">
                      <p className="pool-name">{pool.name}</p>
                      <div className="pair">
                        <img alt={pool.alt1} className="logofirst" src={pool.logo1}/>
                        <img alt={pool.alt2} className="logo" src={pool.logo2}/>
                      </div>
                    </div>
                  
                    <div className="sub-container">
                      <p>APY</p>
                      <p>{pool.apy}</p>
                    </div>

                    <div className="sub-container">
                      <p>TVL</p>
                      <p>{pool.tvl}</p>
                    </div>

                    <div className="sub-container">
                      <p>Total Deposit</p>
                      <p>{pool.deposit}</p>
                    </div>

              </div>
              {depositWithdraw && (
                <div className="invest">
                  <PoolButton description="deposit"/> 
                  <PoolButton description="withdraw"/>
                </div>
              )}
              
            </div>
          ))
        }
      </div>

      <BottomBar />
    </div>
  )
}