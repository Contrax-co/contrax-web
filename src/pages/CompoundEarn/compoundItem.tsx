import React, {useState, useEffect} from 'react';
import PoolButton from '../../components/PoolButton';
import './compoundItem.css';
import Withdraw from './Withdraw';
import {checkIfWalletIsConnected, getUserVaultBalance, getTotalValue} from './functions/connection'; 
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import AddLiquidity from './AddLiquidity';

function CompoundItem({pool, lightMode}: any) {
    const [currentWallet, setCurrentWallet] = useState("");
    const [tvl, setTVL] = useState(0);
    const [userVaultBalance, setUserVaultBalance] = useState(0);

    const [dropdown, setDropDown] = useState(false);

    const[buttonType, setButtonType] = useState("Add Liquidity");

    useEffect(() => {
        checkIfWalletIsConnected(setCurrentWallet); 
        getUserVaultBalance(pool, currentWallet, setUserVaultBalance, userVaultBalance);
        getTotalValue(pool, setTVL);
    },[tvl, userVaultBalance, currentWallet, pool])

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
                            <div className={`container ${lightMode && "container--light"}`}>
                                <p className={`pool_name ${lightMode && "pool_name--light"}`}>DEPOSITED</p>
                                <p>{userVaultBalance.toFixed(3)}</p>

                            </div>
                            
                            <div className={`container ${lightMode && "container--light"}`}>
                                <p className={`pool_name ${lightMode && "pool_name--light"}`}>COMPOUND APY</p>
                                <p>-</p>

                            </div>

                            <div className={`container ${lightMode && "container--light"}`}>
                                <p className={`pool_name ${lightMode && "pool_name--light"}`}>LIQUIDITY</p>
                                {tvl < 1000 ? (
                                    <p>{"<"} 1000</p>
                                ):
                                <p>{tvl}</p>
                                }
                                
                            </div>

                            <div className={`container ${lightMode && "container--light"}`}>
                                <p className={`pool_name ${lightMode && "pool_name--light"}`}>APY</p>
                                <p>{pool.apy}</p>
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
                                description="add liquidity"
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
                        {buttonType === "Add Liquidity" && <AddLiquidity pool={pool} platform={pool.platform} rewards={pool.reward} lightMode={lightMode}/>}
                        {buttonType === "Withdraw" && <Withdraw pool={pool} lightMode={lightMode}/>}
                        
                    </div>
                )}

            </div>
    )
}

export default CompoundItem;