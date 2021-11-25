import React from 'react';
import PropTypes from 'prop-types';

import { isRequiredIf } from '../../utils/proptypes';

import { StyledButton } from './Button.styles';

const Button = (props) => {
  const {
    disabled,
    small,
    variant,
    type,
    label,
    icon,
    logo,
    iconAlignRight,
    name,
    onClick,
    ...remainingProps
  } = props;

  return (
    <StyledButton
      disabled={disabled}
      small={small}
      variant={variant}
      type={type}
      name={name}
      onClick={disabled || !onClick ? undefined : onClick}
      iconAlignRight={iconAlignRight}
      data-testid="button"
      {...remainingProps}
    >
      {label && <span>{label}</span>}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Disables the button */
  disabled: PropTypes.bool,
  /** Change button's size */
  small: PropTypes.bool,
  /** Which theme to apply to the button */
  variant: PropTypes.oneOf(['primary', 'dark', 'light', 'ghost']),
  /** Type of the button */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Text that is visible and readable on the button. Mandatory if no icon */
  label: (props, propName, componentName) =>
    isRequiredIf(props, propName, componentName, 'string', !props['icon']),
  /** Icon to be placed on the left side of the button. Mandatory if no label */
  icon: (props, propName, componentName) =>
    isRequiredIf(props, propName, componentName, 'string', !props['label']),
  /** Logo to be placed on the left side of the button */
  logo: PropTypes.string,
  /** Place icon on the right side of the button */
  iconAlignRight: PropTypes.bool,
  /** Name of the button that is used on forms */
  name: PropTypes.string,
  /** Callback to be fired when button is pressed */
  onClick: PropTypes.func,
  /** Label to describe the button. Useful when button has no text */
  'aria-label': PropTypes.string,
  /** Indicates whether or not this button has a popup */
  'aria-haspopup': PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
};

export default Button;
