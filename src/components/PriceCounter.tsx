import React from 'react';
import minus from '../images/minus.svg';
import plus from '../images/plus.svg';
import { Image } from "./image/Image";
import { Caption, Desc } from './text/Text';

interface Props {
  label: string;
  subLabel: string;
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const PriceCounter = ({label, subLabel, value, onDecrease, onIncrease}: Props) => {
  return (
    <div className='price-counter'>
      <div className='counter-sign'>
        <span onClick={() => onDecrease()}>
          <Image src={minus} alt="minus" />
        </span>
      </div>
      <div className='counter-value'>
        <Caption className='lightGray'>{label}</Caption>
        <Desc value={value} variant={'dark'} />
        <Caption className='lightGray'>{subLabel}</Caption>
      </div>
      <div className='counter-sign'>
        <span onClick={() => onIncrease()}>
          <Image src={plus} alt="minus" />
        </span>
      </div>
    </div>
  )
}

export default PriceCounter;