import styled from 'styled-components/macro';

import * as colors from '@colors';
import * as typo from '@typography';
import { Icon } from '@icons';

const noForwardProps = ['iconAlignRight', 'small', 'variant'];

const primaryStyles = (isDisabled) => ({
  ...(!isDisabled && { boxShadow: colors.shadow1 }),
  backgroundColor: isDisabled ? colors.lightRed1 : colors.red,
  color: colors.white,

  svg: {
    fill: colors.white,
  },
});

const darkStyles = (isDisabled) => ({
  ...(!isDisabled && { boxShadow: colors.shadow1 }),
  backgroundColor: isDisabled ? colors.cloud3 : colors.dark,
  color: colors.white,

  svg: {
    fill: colors.white,
  },
});

const lightStyles = (isDisabled) => ({
  ...(!isDisabled && { border: `.1rem solid ${colors.cloud2}` }),
  ...(!isDisabled && { boxShadow: colors.shadow0 }),
  backgroundColor: colors.white,
  color: isDisabled ? colors.cloud4 : colors.textPrimary,

  svg: {
    fill: isDisabled ? colors.cloud4 : colors.textPrimary,
  },
});

const ghostStyles = (isDisabled) => ({
  ...(!isDisabled && { border: `.1rem solid ${colors.whiteA10}` }),
  ...(!isDisabled && { boxShadow: colors.shadow0 }),
  backgroundColor: isDisabled ? colors.textSecondaryA15 : colors.whiteA5,
  color: isDisabled ? colors.whiteA30 : colors.white,

  svg: {
    fill: isDisabled ? colors.whiteA30 : colors.white,
  },
});

export const StyledButton = styled('button', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(props.variant === 'primary' && primaryStyles(props.disabled)),
  ...(props.variant === 'dark' && darkStyles(props.disabled)),
  ...(props.variant === 'light' && lightStyles(props.disabled)),
  ...(props.variant === 'ghost' && ghostStyles(props.disabled)),
  ...(!props.disabled && { cursor: 'pointer' }),
  ...(props.small ? typo.P_S2_B : typo.P_S_B),
  alignItems: 'center',
  borderRadius: props.small ? '0.3rem' : '0.4rem',
  display: 'inline-flex',
  flexDirection: props.iconAlignRight ? 'row-reverse' : 'row',
  justifyContent: 'center',
  lineHeight: props.small ? '1.2rem' : '1.6rem',
  padding: props.small ? '1.2rem' : '1.5rem 1.6rem',
}));

export const StyledIcon = styled(Icon, {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  display: 'inline-flex',

  '+span': {
    margin: props.iconAlignRight ? '0 0.4rem 0 0' : '0 0 0 0.4rem',
  },
}));
