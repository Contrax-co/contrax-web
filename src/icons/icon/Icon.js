import React from 'react';
import PropTypes from 'prop-types';

import * as icons from '@icons';

import { IconWrapper } from './Icon.styles';

const Icon = (props) => {
  const { name, logo, color, size, ...remainingProps } = props;
  const { direction, isOn } = remainingProps;
  const Elem = icons[name];

  if ((!name || !Elem) && !logo) return null;

  const renderIcon = () => {
    return <Elem data-testid="icon" fill={color} {...direction} {...isOn} />;
  };

  return (
    <IconWrapper data-testid="wrapper" size={size} {...remainingProps}>
      {renderIcon()}
    </IconWrapper>
  );
};

Icon.propTypes = {
  /** Name of the icon to be loaded from library */
  name: PropTypes.string,
  /** Name of the logo to be loaded from library */
  logo: PropTypes.string,
  /** Which color to apply to the icon */
  color: PropTypes.string,
  /** Size in px (without unit) that icon must have, applies to both height and width */
  size: PropTypes.number,
};

Icon.defaultProps = {
  name: '',
  logo: '',
  size: 24,
};

export default Icon;
