import React from 'react';
import "./Toggle.css";

function Toggle({pool, active, ...props}:any) {
  return (
    <div className={`switch`}>
     
        <p className={`first_switch ${active && "first_switch--selected"}`}>ETH</p>

        <div onClick={props.onClick} className={`toggle ${active && "toggle--selected"}`}>
            <div className={`toggle_button ${active && "toggle_button--selected"}`}>
                
            </div>
        </div>

        <p className={`second_switch ${active && "second_switch--selected"}`}>{pool.name}</p>

    </div>
  )
}

export default Toggle