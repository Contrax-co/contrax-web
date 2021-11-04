import styled from 'styled-components/macro';

import * as colors from '@colors';
import * as typo from '@typography';
import { Icon } from '@icons';

const noForwardProps = ['iconAlignRight', 'small', 'variant'];

const primaryStyles = (isDisabled) => ({
  ...(!isDisabled && { border: `.1rem solid ${colors.primaryBorder}` }),
  ...(!isDisabled && { boxShadow: colors.shadow }),
  backgroundColor: isDisabled ? colors.primaryDisabled : colors.primary,
  color: colors.white,

  svg: {
    fill: colors.white,
  },
});

const secondaryStyles = (isDisabled) => ({
  ...(!isDisabled && { border: `.1rem solid ${colors.secondaryBorder}` }),
  ...(!isDisabled && { boxShadow: colors.shadow }),
  backgroundColor: colors.white,
  color: isDisabled ? colors.white : colors.textPrimary,

  svg: {
    fill: isDisabled ? colors.white : colors.textPrimary,
  },
});

export const StyledButton = styled('button', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(props.variant === 'primary' && primaryStyles(props.disabled)),
  ...(props.variant === 'secondary' && secondaryStyles(props.disabled)),
  ...(!props.disabled && { cursor: 'pointer' }),
  ...(props.small ? typo.P_S2_B : typo.P_S_B),
  alignItems: 'center',
  borderRadius: props.small ? '0.3rem' : '0.4rem',
  display: 'inline-flex',
  flexDirection: props.iconAlignRight ? 'row-reverse' : 'row',
  justifyContent: 'center',
  lineHeight: props.small ? '1.2rem' : '1.6rem',
  padding: props.small ? '0.3rem' : '0.5rem 0.6rem',
}));

export const StyledIcon = styled(Icon, {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  display: 'inline-flex',
  '+span': {
    margin: props.iconAlignRight ? '0 0.4rem 0 0' : '0 0 0 0.4rem',
  },
}));
