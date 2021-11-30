import styled from 'styled-components/macro';

import * as typo from '../../theme/typography';

const noForwardProps = ['iconAlignRight', 'small', 'variant'];



export const StyledButton = styled('button', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  // ...(props.variant === 'primary' && primaryStyles(props.disabled)),
  // ...(props.variant === 'secondary' && secondaryStyles(props.disabled)),
  ...(!props.disabled && { cursor: 'pointer' }),
  ...(props.small ? typo.BtnText : typo.BtnText),
  alignItems: 'center',
  borderRadius: props.small ? '0.3rem' : '24px',
  display: 'inline-flex',
  flexDirection: props.iconAlignRight ? 'row-reverse' : 'row',
  justifyContent: 'center',
  lineHeight: props.small ? '1.2rem' : '1.6rem',
  padding: props.small ? '0.3rem' : '0.5rem 0.6rem',
  backgroundColor: '#5ECEF1',
  border: 'none',
  paddingLeft: '1rem',
  paddingRight: '1rem',
}));
