import React from 'react';
import PropTypes from 'prop-types';

import { StyledH3, StyledText } from './Text.styles';

const propTypes = {
  small: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'warn', 'info', 'light']),
  value: PropTypes.string,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string,
  'aria-haspopup': PropTypes.string,
};

export const Text = (props) => {
  const {
    small,
    variant,
    value,
    onClick,
    children,
    ...remainingProps
  } = props;

  return (
    <StyledText
      small={small}
      variant={variant}
      onClick={!onClick ? undefined : onClick}
      {...remainingProps}
    >
      {value ? <span>{value}</span> : <span>{children}</span>}
    </StyledText>
  );
};
Text.prototype = propTypes;
Text.defaultProps = { variant: 'primary' };

export const H3 = (props) => {
  const {
    small,
    variant,
    value,
    onClick,
    children,
    ...remainingProps
  } = props;

  return (
    <StyledH3
      small={small}
      variant={variant}
      onClick={!onClick ? undefined : onClick}
      {...remainingProps}
    >
      {value ? <span>{value}</span> : <span>{children}</span>}
    </StyledH3>
  );
};
H3.prototype = propTypes;
H3.defaultProps = { variant: 'primary' };
