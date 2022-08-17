import React from 'react';
import './PoolButton.css'

function PoolButton({description}) {
  return (
    <div className="button">{description}</div>
  )
}

export default PoolButton;