import styled from 'styled-components/macro';
import * as colors from '../../theme/colors';

export const StyledCard = styled('div')((props) => ({
  background : props.background ? props.background : colors.white,
  borderRadius: '1rem',
  display: 'inline-flex',
  padding: '1rem',
}));
