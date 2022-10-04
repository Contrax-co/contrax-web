import React, {useState, useEffect} from 'react';
import PoolButton from '../../components/PoolButton';
import './compoundItem.css';
import Withdraw from './Withdraw';
import {getUserVaultBalance, getTotalValue, 
        compoundAPYCalculator, calculateTotalSupply, 
        calculateTotalVaultSupply, calculateUserUSDValue, 
        calculateEarnedUSD, earnedDeposit
} from './functions/connection'; 
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import AddLiquidity from './AddLiquidity';
import { useQuery } from '@apollo/client';
import { POOLQUERY } from './functions/mutations';
import { prices } from './protocols/sushiswap';

import { calculateUserDeposit, response, tokensFromContract } from './functions/compoundItem-connection';


function CompoundItem({pool, lightMode, currentWallet, connectWallet}: any) {


    const [priceData, setPriceData] = useState([]);
    // const { data, loading, error } = useQuery(POOLQUERY(pool), {
    //     variables: {
    //         userWallet: currentWallet,
    //     }
    // });

    const [initialDeposit, setInitialDeposit] = useState(0);


    const [tvl, setTVL] = useState(0);
    const [userVaultBalance, setUserVaultBalance] = useState(0);

    const [dropdown, setDropDown] = useState(false);

    const[buttonType, setButtonType] = useState("Add Liquidity");
    const [compoundAPY, setCompoundAPY] = useState(0);

    const [poolBaseAPY, setPoolBaseAPY] = useState(0); 
    const [rewardPoolAPY, setPoolRewardAPY] = useState(0);

    const[poolUsdValue, setPoolUsdValue] = useState(0);
    const[totalSupply, setTotalSupply] = useState(0);
    const [ourTVL, setOurTVL] = useState(0);
    const [userTVL, setUserTVL] = useState(0);

    const [earned, setEarned] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const [earnedUSD, setEarnedUSD] = useState(0); 

    const[userDeposit, setUserDeposit] = useState(0);
    const[prices1, setPrices1] = useState(0);
    const[prices2, setPrices2] = useState(0);

    const[userDepositUSD, setUserDepositUSD] = useState(0);
    const[singleValue, setSingleValue] = useState(0);




    useEffect(() => {
        calculateUserDeposit({pool, currentWallet, setUserDeposit});
        response(pool.token1, setPrices1); 
        response(pool.token2, setPrices2); 
        tokensFromContract(pool, prices1, prices2, setSingleValue); 

    }, [pool, currentWallet, prices1, prices2]);

    useEffect(() => {
        getUserVaultBalance(pool, currentWallet, setUserVaultBalance, userVaultBalance);
        getTotalValue(pool, setTVL);
        
    },[tvl, userVaultBalance, currentWallet, pool]);

    useEffect(() => {
        try{
            const {ethereum} = window;
            if(ethereum){
                fetch("https://yields.llama.fi/pools")
                .then(response => response.json())
                .then(data => {
                    const pools = data.data;
                    const list = pools.filter((p:any) => {
                        return p.chain === "Arbitrum";
                    });
                    // console.log(`data returned from defi is ${JSON.stringify(list)}`)
                    // setPoolBaseAPY(list[0].apyBase);
                    // setPoolRewardAPY(list[0].apyReward);
                    //setPoolUsdValue(list[0].tvlUsd); 
                    setPoolBaseAPY(21.69);
                    setPoolRewardAPY(3.90);
                    setPoolUsdValue(172810); 
                })
            }
        }
        catch (error){
            console.log(error);
        }
        compoundAPYCalculator(poolBaseAPY, rewardPoolAPY, setCompoundAPY);
        calculateTotalSupply(pool, setTotalSupply);
        calculateTotalVaultSupply(poolUsdValue, totalSupply, setOurTVL, tvl); 

    }, [pool, poolBaseAPY, rewardPoolAPY, poolUsdValue, totalSupply, tvl]);

    useEffect(() => {
        //earnedDeposit(pool, currentWallet, data, setInitialDeposit, setEarned)
        calculateUserUSDValue(poolUsdValue, totalSupply, setUserTVL, initialDeposit);
        calculateEarnedUSD(poolUsdValue, totalSupply, earned, setEarnedUSD); 

    }, [pool, currentWallet, poolUsdValue, totalSupply, initialDeposit, earned])



    const grabKey = () => {
        setDropDown(!dropdown);
    }

    return (
            <div className={`pools ${lightMode && "pools--light"}`}>
                <div className="single_pool" key={pool.id} onClick={grabKey}>
                    <div className="row_items">

                        <div className="title_container">
                            <div className="pair">
                                <img alt={pool.alt1} className={`logofirst ${lightMode && "logofirst--light"}`} src={pool.logo1}/>
                                <img alt={pool.alt2} className={`logo ${lightMode && "logo--light"}`} src={pool.logo2}/>
                            </div>

                            <div>
                                <div className="pool_title">
                                    <p className={`pool_name ${lightMode && "pool_name--light"}`}>{pool.name}</p>
                                    <div className="rewards_div">
                                        <p className={`farm_type ${lightMode && "farm_type--light"}`}>{pool.platform}</p>
                                        <img alt={pool.rewards_alt} className="rewards_image" src={pool.rewards}/>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div className="pool_info">
                            {pool.name === "WETH-DAI" ? (
                                <div className={`container__apy ${lightMode && "container__apy--light"}`}>
                                    <p className={`pool_name__apy ${lightMode && "pool_name__apy--light"}`}>39.56%</p>
                                </div>
                            ): pool.name === "WETH-USDC" ? (
                                <div className={`container__apy ${lightMode && "container__apy--light"}`}>
                                    <p className={`pool_name__apy ${lightMode && "pool_name__apy--light"}`}>12.77%</p>
                                </div>

                            ): (
                                <div className={`container__apy ${lightMode && "container__apy--light"}`}>
                                    <p className={`pool_name__apy ${lightMode && "pool_name__apy--light"}`}>27.40%</p>
                                </div>
                            )}
                           

                            <div className={`container ${lightMode && "container--light"}`}>
                                <p className={`pool_name ${lightMode && "pool_name--light"}`}>
                                    -
                                </p>
                               
                                <p className={`tvlLP ${lightMode && "tvlLP--light"}`}>-</p>
                                
                            </div>
                            
                            {/* How much the user has deposited */}
        
                            <div className={`container ${lightMode && "container--light"}`}>
                                <p className={`pool_name ${lightMode && "pool_name--light"}`}>
                                    {(singleValue * userDeposit).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    })}
                                </p>
                                <p className={`tvlLP ${lightMode && "tvlLP--light"}`}>{userDeposit.toFixed(5)} Tokens</p>
                            </div>
                        
                           
                            
                    
                            <div className={`container ${lightMode && "container--light"}`}>
                                <p className={`pool_name ${lightMode && "pool_name--light"}`}>-</p>
                                <p className={`tvlLP ${lightMode && "tvlLP--light"}`}> - </p>
                            </div>
                        
                                
                           
                        </div>

                        <div className={`dropdown ${lightMode && "dropdown--light"}`}>
                            {dropdown === false ? <RiArrowDownSLine /> :  <RiArrowUpSLine />}  
                        </div>
                        
                    </div>

                </div>

                {dropdown === false ? null : (
                    <div className={`dropdown_menu ${lightMode && "dropdown_menu--light"}`}>
                        <div className="drop_buttons">
                            <PoolButton 
                                onClick={(e:any) => setButtonType("Add Liquidity")} 
                                description="deposit"
                                active={buttonType === "Add Liquidity"}
                                lightMode={lightMode}
                            />
                            <PoolButton 
                                onClick={(e:any) => setButtonType("Withdraw")}  
                                description="withdraw"
                                active={buttonType === "Withdraw"}
                                lightMode={lightMode}
                            /> 
                        </div>
                        {buttonType === "Add Liquidity" && 
                            <AddLiquidity 
                            pool={pool} 
                            platform={pool.platform} 
                            rewards={pool.reward} 
                            lightMode={lightMode} 
                            currentWallet={currentWallet} 
                            baseAPY={poolBaseAPY}
                            compoundAPY={compoundAPY}
                            connectWallet={connectWallet}
                            showDetails={showDetails}
                            prop1={() => setShowDetails(true)}
                            prop2={() => setShowDetails(false)}                          
                        />}
                        {buttonType === "Withdraw" && 
                            <Withdraw 
                                pool={pool} 
                                lightMode={lightMode} 
                                showDetails={showDetails}
                                prop1={() => setShowDetails(true)}
                                baseAPY={poolBaseAPY}
                                compoundAPY={compoundAPY} 
                                prop2={() => setShowDetails(false)}
                                connectWallet={connectWallet}
                                currentWallet={currentWallet}
                            />
                        }
                        
                    </div>
                )}

            </div>
    )
}

export default CompoundItem;