import React from 'react'; 
import {RiArrowDownSLine, RiArrowUpSLine, RiQuestionLine} from 'react-icons/ri';
import './showDetailsMod.css';

function DetailsMod({lightMode, prop1, showDetails, baseAPY, compoundAPY, prop2}: any) {
    return (
        <div>
            {!showDetails ? (
                <div className={`details`}>
                    <div className={`arrow ${lightMode && "arrow--light"}`}  onClick={prop1}>
                        <RiArrowDownSLine />
                        <p>See details</p>
                    </div>
                </div>   
            ): (
                <div className={`details_description`}>
                    <div className="details_description_container">
                        <div className="apr_container"> 

                            <div className="apr_percent_container">
                                <p className={`base_apr ${lightMode && "base_apr--light"}`}>Base APR</p>
                                <RiQuestionLine className={`hover ${lightMode && "hover--light"}`} />
                                <p className={`hide ${lightMode && "hide--light"}`}>The base APR of the farm without the effects of autocompounding</p>
                            </div>
                        
                            <p className={`base_percent ${lightMode && "base_percent--light"}`}>{baseAPY.toFixed(2)}%</p>
                        </div>

                        <div className="apr_container"> 

                            <div className="apr_percent_container">
                                <p className={`base_apr ${lightMode && "base_apr--light"}`}>Compounded APY</p>
                                <RiQuestionLine className={`hover ${lightMode && "hover--light"}`} />
                                <p className={`hide ${lightMode && "hide--light"}`}>The APY of the farm with the effects of autocompounding</p>
                            </div>

                            <p className={`base_percent ${lightMode && "base_percent--light"}`}>{compoundAPY.toFixed(2)}%</p>
                        </div>
                    </div>

                    <div className={`details`}>
                        <div className={`arrow ${lightMode && "arrow--light"}`}  onClick={prop2}>
                            <RiArrowUpSLine/>
                            <p>Close details</p>
                        </div>
                    </div>
                </div>
            )}
        </div>  
  )
}

export default DetailsMod;