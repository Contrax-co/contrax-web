import { useState, useEffect } from 'react';
import PoolButton from '../../components/PoolButton';
import './compoundItem.css';
import Withdraw from './Withdraw';
import {
  checkIfWalletIsConnected,
  getUserVaultBalance,
  getTotalValue,
} from './functions/connection';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import AddLiquidity from './AddLiquidity';

function CompoundItem({ pool }: any) {
  const [currentWallet, setCurrentWallet] = useState('');
  const [tvl, setTVL] = useState(0);
  const [userVaultBalance, setUserVaultBalance] = useState(0);

  const [dropdown, setDropDown] = useState(false);

  const [buttonType, setButtonType] = useState('Add Liquidity');

  useEffect(() => {
    checkIfWalletIsConnected(setCurrentWallet);
    getUserVaultBalance(
      pool,
      currentWallet,
      setUserVaultBalance,
      userVaultBalance
    );
    getTotalValue(pool, setTVL);
  });

  const grabKey = () => {
    setDropDown(!dropdown);
  };

  return (
    <div className="pools">
      <div className="single_pool" key={pool.id} onClick={grabKey}>
        <div className="row_items">
          <div className="title_container">
            <div className="pair">
              <img alt={pool.alt1} className="logofirst" src={pool.logo1} />
              <img alt={pool.alt2} className="logo" src={pool.logo2} />
            </div>
            <div>
              <div className="pool_title">
                <p className="pool_name">{pool.name}</p>
                <div className="rewards_div">
                  <p className="farm_type">{pool.platform}</p>
                  <img
                    alt={pool.rewards_alt}
                    className="rewards_image"
                    src={pool.rewards}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pool_info">
            <div className="container">
              <p className="pool_name">DEPOSITED</p>
              <p>{userVaultBalance.toFixed(3)}</p>
            </div>

            <div className="container">
              <p className="pool_name">COMPOUND APY</p>
              <p>-</p>
            </div>

            <div className="container">
              <p className="pool_name">LIQUIDITY</p>
              {tvl < 1000 ? <p>{'<'} 1000</p> : <p>{tvl}</p>}
            </div>

            <div className="container">
              <p className="pool_name">APY</p>
              <p>{pool.apy}</p>
            </div>
          </div>
          <div className="dropdown">
            {dropdown === false ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
          </div>
        </div>
      </div>

      {dropdown === false ? null : (
        <div className="dropdown_menu">
          <div className="drop_buttons">
            <PoolButton
              onClick={(e: any) => setButtonType('Add Liquidity')}
              description="add liquidity"
              active={buttonType === 'Add Liquidity'}
            />
            <PoolButton
              onClick={(e: any) => setButtonType('Withdraw')}
              description="withdraw"
              active={buttonType === 'Withdraw'}
            />
          </div>
          {buttonType === 'Add Liquidity' && (
            <AddLiquidity
              pool={pool}
              platform={pool.platform}
              rewards={pool.reward}
            />
          )}
          {buttonType === 'Withdraw' && <Withdraw pool={pool} />}
        </div>
      )}
    </div>
  );
}

export default CompoundItem;
