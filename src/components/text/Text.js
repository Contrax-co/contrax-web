import React from 'react';
import PropTypes from 'prop-types';

import { StyledPageTitle, StyledTitle, StyledPageSubTitle, StyledDesc, StyledDescSpan, StyledLink, StyledText } from './Text.styles';

const propTypes = {
  small: PropTypes.bool,
  color: PropTypes.oneOf(['light', 'dark']),
  value: PropTypes.string,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string,
  'aria-haspopup': PropTypes.string,
};

export const PageTitle = (props) => {
  const {
    variant,
    value,
    onClick,
    children,
    ...remainingProps
  } = props;

  return (
    <StyledPageTitle
      variant={variant}
      onClick={!onClick ? undefined : onClick}
      {...remainingProps}
    >
      {value ? <span>{value}</span> : <span>{children}</span>}
    </StyledPageTitle>
  );
};

PageTitle.prototype = propTypes;
PageTitle.defaultProps = { variant: 'dark' };

export const PageSubTitle = (props) => {
  const {
    variant,
    value,
    onClick,
    children,
    ...remainingProps
  } = props;

  return (
    <StyledPageSubTitle
      variant={variant}
      onClick={!onClick ? undefined : onClick}
      {...remainingProps}
    >
      {value ? <span>{value}</span> : <span>{children}</span>}
    </StyledPageSubTitle>
  );
};
PageSubTitle.prototype = propTypes;
PageSubTitle.defaultProps = { variant: 'dark' };

export const Title = (props) => {
  const {
    variant,
    value,
    onClick,
    children,
    ...remainingProps
  } = props;

  return (
    <StyledTitle
      variant={variant}
      onClick={!onClick ? undefined : onClick}
      {...remainingProps}
    >
      {value ? <span>{value}</span> : <span>{children}</span>}
    </StyledTitle>
  );
};
Title.prototype = propTypes;
Title.defaultProps = { variant: 'dark' };

export const Desc = (props) => {
  const {
    variant,
    value,
    onClick,
    children,
    ...remainingProps
  } = props;

  return (
    <StyledDesc
      variant={variant}
      onClick={!onClick ? undefined : onClick}
      {...remainingProps}
    >
      {value ? <span>{value}</span> : <span>{children}</span>}
    </StyledDesc>
  );
};
Desc.prototype = propTypes;
Desc.defaultProps = { variant: 'dark' };

export const DescSpan = (props) => {
  const {
    variant,
    value,
    onClick,
    children,
    ...remainingProps
  } = props;

  return (
    <StyledDescSpan
      variant={variant}
      onClick={!onClick ? undefined : onClick}
      {...remainingProps}
    >
      {value ? <span>{value}</span> : <span>{children}</span>}
    </StyledDescSpan>
  );
};
DescSpan.prototype = propTypes;
DescSpan.defaultProps = { variant: 'dark' };

export const Link = (props) => {
  const {
    variant,
    text,
    link,
    onClick,
    children,
    ...remainingProps
  } = props;

  return (
    <StyledLink
      variant={variant}
      onClick={!onClick ? undefined : onClick}
      {...remainingProps}
      href={link}
    >
      {text}
    </StyledLink>
  );
};
Link.prototype = propTypes;
Link.defaultProps = { variant: 'dark' };

export const Text = (props) => {
  const {
    variant,
    value,
    onClick,
    children,
    ...remainingProps
  } = props;

  return (
    <StyledText
      variant={variant}
      onClick={!onClick ? undefined : onClick}
      {...remainingProps}
    >
      {value ? <span>{value}</span> : <span>{children}</span>}
    </StyledText>
  );
};
Text.prototype = propTypes;
Text.defaultProps = { variant: 'dark' };
