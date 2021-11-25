import styled from 'styled-components/macro';

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';

const noForwardProps = [];

export const StyledInput = styled('input', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(props.variant === 'light' && { color: colors.titleLight }),
  ...(props.variant === 'dark' && { color: colors.titleDark }),
  ...(typo.Title),
})
);

export const StyledCheckbox = styled('input', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(props.variant === 'light' && { backgroundColor: colors.titleLight }),
  ...(props.variant === 'dark' && { backgroundColor: colors.titleDark }),
  ...(typo.Title),
  float: 'left',
  marginRight: '0.6rem',
})
);