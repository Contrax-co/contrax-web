import React, {useState, useEffect} from 'react';
import PoolButton from '../../components/PoolButton';
import './compoundItem.css';
import Withdraw from './Withdraw';
import {getUserVaultBalance, getTotalValue, compoundAPYCalculator, calculateTotalSupply, calculateTotalVaultSupply, calculateUserUSDValue, queryAccount} from './functions/connection'; 
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import AddLiquidity from './AddLiquidity';
import { gql, useQuery } from '@apollo/client';

import * as ethers from 'ethers';

function CompoundItem({pool, lightMode, currentWallet, connectWallet}: any) {
    const [poolQueryAddress, setPoolQueryAddress] = useState('');
    const POOLQUERY = gql`
    query MyQuery {
      _${pool.lp_address}_by_pk(userWallet: "${poolQueryAddress}") {
        depositedLP
      }
    }
    `;

    const { data, loading, error } = useQuery(POOLQUERY);
    const [poolData, setPoolData] = useState([]);


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
    const [deposited, setDeposited] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        getUserVaultBalance(pool, currentWallet, setUserVaultBalance, userVaultBalance);
        getTotalValue(pool, setTVL);
        queryAccount(setPoolQueryAddress);

        setPoolData(data);
        console.log(`the data is ${JSON.stringify(poolData)}`)

        
    },[tvl, userVaultBalance, currentWallet, pool, data, poolData]);

    useEffect(() => {
        try{
            const {ethereum} = window;
            if(ethereum){
                fetch("https://yields.llama.fi/pools")
                .then(response => response.json())
                .then(data => {
                    const pools = data.data;
                    const list = pools.filter((p:any) => {
                        return p.chain === "Arbitrum" && p.project === "sushiswap" && p.symbol=== pool.name;
                    });
                    setPoolBaseAPY(list[0].apyBase);
                    setPoolRewardAPY(list[0].apyReward);
                    setPoolUsdValue(list[0].tvlUsd); 
                })
            }
        }
        catch (error){
            console.log(error);
        }
        compoundAPYCalculator(poolBaseAPY, rewardPoolAPY, setCompoundAPY);
        calculateTotalSupply(pool, setTotalSupply);
        calculateTotalVaultSupply(poolUsdValue, totalSupply, setOurTVL, tvl); 
        calculateUserUSDValue(poolUsdValue, totalSupply, setUserTVL, userVaultBalance);

    }, [pool, poolBaseAPY, rewardPoolAPY, poolUsdValue, totalSupply, tvl, userVaultBalance]);

    const calculateEarned = async () => {
        const {ethereum} = window;
        try{
            if(ethereum){
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const vaultContract = new ethers.Contract(pool.vault_addr, pool.vault_abi, signer);

                const balance = await vaultContract.balanceOf(currentWallet);
                const formattedBal = Number(ethers.utils.formatUnits(balance, 18));

                const num:any = JSON.stringify(poolData);
                const val = num._0x692a0B300366D1042679397e40f3d2cb4b8F7D30_by_pk["depositedLP"];
                console.log(`num is ${val}`)
                // setDeposited(Number(num));
                // // console.log(`the data is ${deposited}`)

                // const earnedBalance = formattedBal - Number(num); 
                // setEarned(earnedBalance);
                // console.log(`the earned bal is ${earned}`);

            }
            else{
                console.log("Ethereum object doesn't exist!");
            }

        }
        catch (error){
            console.log(error);
        }
    }


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
                            <div className={`container__apy ${lightMode && "container__apy--light"}`}>
                                <p className={`pool_name__apy ${lightMode && "pool_name__apy--light"}`}>{(compoundAPY).toFixed(2)}%</p>
                            </div>

                            <div className={`container ${lightMode && "container--light"}`}>
                                <p className={`pool_name ${lightMode && "pool_name--light"}`}>
                                    {ourTVL.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    })}
                                </p>
                                {tvl < 100 ? (
                                    <p className={`tvlLP ${lightMode && "tvlLP--light"}`}>{"<"} 100 Tokens</p>
                                ):
                                <p className={`tvlLP ${lightMode && "tvlLP--light"}`}>{tvl} Tokens</p>
                                }  
                            </div>

                            <div className={`container ${lightMode && "container--light"}`}>
                                <p className={`pool_name ${lightMode && "pool_name--light"}`}>
                                    {userTVL.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    })}
                                </p>
                                {!currentWallet ? 
                                <p className={`tvlLP ${lightMode && "tvlLP--light"}`}>-</p>:  
                                <p className={`tvlLP ${lightMode && "tvlLP--light"}`}>{userVaultBalance.toFixed(3)} Tokens</p>
                                }
                            </div>

                            <div className={`container ${lightMode && "container--light"}`}>
                                {loading ? (
                                    <p className={`pool_name ${lightMode && "pool_name--light"}`} onClick={calculateEarned}>-</p>
                                ): error ? (
                                    <p className={`pool_name ${lightMode && "pool_name--light"}`}>Error</p>
                                ):(
                                <p className={`pool_name ${lightMode && "pool_name--light"}`} onClick={calculateEarned}>EARNED</p>

                                )}
                                
                                <p>39</p>
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