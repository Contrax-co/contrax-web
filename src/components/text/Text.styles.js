import styled from 'styled-components/macro';

import * as colors from '@colors';
import * as typo from '@typography';

const noForwardProps = [];

export const StyledText = styled('p', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => {
  console.log({ props: props });
  return ({
    ...(props.variant === 'light' && { color: colors.textLight }),
    ...(props.variant === 'primary' && { color: colors.textPrimary }),
    ...(props.variant === 'secondary' && { color: colors.textSecondary }),
    ...(props.variant === 'warn' && { color: colors.textWarn }),
    ...(props.variant === 'info' && { color: colors.textInfo }),
    ...(props.small ? typo.P_S : typo.P_R),
  })
});


export const StyledH3 = styled('h3', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => {
  console.log({ props: props });
  return ({
    ...(props.variant === 'light' && { color: colors.textLight }),
    ...(props.variant === 'primary' && { color: colors.textPrimary }),
    ...(props.variant === 'secondary' && { color: colors.textSecondary }),
    ...(props.variant === 'warn' && { color: colors.textWarn }),
    ...(props.variant === 'info' && { color: colors.textInfo }),
    ...(props.small ? typo.H3_M : typo.H3_M),
    marginTop: '1rem',
    marginBottom: '0.4rem',
})
});
