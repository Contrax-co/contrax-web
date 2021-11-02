import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Connect = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path
        opacity="0.3"
        d="M16.5 12C18.43 12 20 10.43 20 8.5C20 6.57 18.43 5 16.5 5C14.57 5 13 6.57 13 8.5C13 10.43 14.57 12 16.5 12Z"
      />
      <path
        opacity="0.3"
        d="M15.01 19C15.5623 19 16.01 18.5523 16.01 18C16.01 17.4477 15.5623 17 15.01 17C14.4577 17 14.01 17.4477 14.01 18C14.01 18.5523 14.4577 19 15.01 19Z"
      />
      <path
        opacity="0.3"
        d="M7 16C8.10457 16 9 15.1046 9 14C9 12.8954 8.10457 12 7 12C5.89543 12 5 12.8954 5 14C5 15.1046 5.89543 16 7 16Z"
      />
      <path d="M7 18C9.21 18 11 16.21 11 14C11 11.79 9.21 10 7 10C4.79 10 3 11.79 3 14C3 16.21 4.79 18 7 18ZM7 12C8.1 12 9 12.9 9 14C9 15.1 8.1 16 7 16C5.9 16 5 15.1 5 14C5 12.9 5.9 12 7 12ZM18.01 18C18.01 16.35 16.66 15 15.01 15C13.36 15 12.01 16.35 12.01 18C12.01 19.65 13.36 21 15.01 21C16.66 21 18.01 19.65 18.01 18ZM14.01 18C14.01 17.45 14.46 17 15.01 17C15.56 17 16.01 17.45 16.01 18C16.01 18.55 15.56 19 15.01 19C14.46 19 14.01 18.55 14.01 18ZM16.5 14C19.53 14 22 11.53 22 8.5C22 5.47 19.53 3 16.5 3C13.47 3 11 5.47 11 8.5C11 11.53 13.47 14 16.5 14ZM16.5 5C18.43 5 20 6.57 20 8.5C20 10.43 18.43 12 16.5 12C14.57 12 13 10.43 13 8.5C13 6.57 14.57 5 16.5 5Z" />
    </svg>
  );
};

Connect.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Connect.defaultProps = {
  fill: colors.textPrimary,
};

export default Connect;
