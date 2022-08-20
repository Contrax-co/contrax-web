import React, { useState, useEffect } from 'react'
import BottomBar from '../../components/bottomBar/BottomBar'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import PoolButton from '../../components/PoolButton';
import AddLiquidity from './components/addLiquidityModal';
import DetailsModal from './components/detailsModal';
import './compoundEarn.css';

export default function CompoundEarn() {
  const [pools, setPools] = useState([]);
  const [liquidityModal, setLiquidityModal] = useState(false);
  const [detailsModal, setModalDetails] = useState(false);
  const [detailsKey, setDetailsKey] = useState(null);
  const [liquidityKey, setLiquidityKey] = useState(null);

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

  useEffect(() => {
    grabKeys(detailsKey, liquidityKey);
  }, [detailsKey,liquidityKey])

  const grabKeys = (id1:any, id2: any) => {
    setDetailsKey(id1);
    setLiquidityKey(id2);

    if(detailsKey != null){
      setModalDetails(true);
    }else if (liquidityKey != null){
      setLiquidityModal(true);
    } 
  }

  return (
    <div>
      <Navigationbar />
      <div className="pools_list">
        {
          pools.map((pool: any) => (
            <div className="single_pool" key={pool.id}>

                    <div className="title_container">
                      <p className="pool_name">{pool.name}</p>
                      <div className="pair">
                        <img alt={pool.alt1} className="logofirst" src={pool.logo1}/>
                        <img alt={pool.alt2} className="logo" src={pool.logo2}/>
                      </div>
                    </div>

                    <div className="pool_info">
                      <div className="container">
                        <p>TVL</p>
                        <p>${pool.tvl}</p>
                      </div>

                      <div className="container">
                        <p>APY</p>
                        <p>{pool.apy}</p>
                      </div>

                      <div className="container">
                        <p>Rewards</p>
                        <img alt={pool.rewards_alt} className="rewards" src={pool.rewards}/>
                      </div>
                    </div>
                  
                <div className="buttons">
                  <PoolButton props={() => setDetailsKey(detailsKey => detailsKey === pool.id ? null : pool.id)}  description="see details"/> 
                  <PoolButton props={() => setLiquidityKey(liquidityKey => liquidityKey === pool.id ? null : pool.id)} description="add liquidity"/>
                </div>
         
            </div>
            
          ))
        }
      </div>
      {liquidityModal ? <AddLiquidity liquidityKey={liquidityKey} setLiquidityKey={setLiquidityKey} pool={pools} setLiquidityModal={setLiquidityModal}/> : null}
      {detailsModal ? <DetailsModal detailsKey={detailsKey} setDetailsKey={setDetailsKey} pool={pools} setModalDetails={setModalDetails} /> : null}

      <BottomBar />
    </div>
  )
}