import React from 'react';
import './PoolButton.css';

function PoolButton({ description, active, ...props }: any) {
  return (
    <div
      className={`button ${active && 'button--selected'}`}
      onClick={props.onClick}
    >
      {description}
    </div>
  );
}

export default PoolButton;
