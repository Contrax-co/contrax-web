import React from 'react';
import './PoolButton.css';

function PoolButton({ description, props }) {
  return (
    <div className="button" onClick={props}>
      {description}
    </div>
  );
}

export default PoolButton;
