import styled from 'styled-components/macro';
import * as colors from '@colors';
import * as typo from '@typography';

export const StyledCard = styled('div')((props) => ({
  background : props.background ? props.background : colors.white,
  borderRadius: '1rem',
  display: 'inline-flex',
  padding: '1rem',
}));
