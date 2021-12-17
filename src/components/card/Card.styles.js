import styled from 'styled-components/macro';
import * as colors from '../../theme/colors';

export const StyledCard = styled('div')((props) => ({
  background : props.background ? props.background : colors.white,
  borderRadius: '1rem',
  display: 'inline-flex',
}));


export const StyledCardBody = styled.div.attrs(props => {
  return {
    className: 'card-body',
  }
})`
  padding: 1.5rem;
`
