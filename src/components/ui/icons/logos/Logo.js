import React from 'react';
import PropTypes from 'prop-types';

import { Placeholder, Wrapper } from './Logo.styles';

import { Openlytics } from './';

const Logo = (props) => {
  const logos = {
    openlytics: Openlytics,
  };
  const { isLoading = false, name, ...remainingProps } = props;
  const hasLogo = !!logos[name];
  const Elem = logos[name];

  return isLoading || !hasLogo ? (
    <Placeholder />
  ) : (
    hasLogo && (
      <Wrapper>
        <Elem {...remainingProps} />
      </Wrapper>
    )
  );
};

Logo.propTypes = {
  isLoading: PropTypes.bool,
  name: PropTypes.string,
};

export default Logo;
