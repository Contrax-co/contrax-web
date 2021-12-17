import styled from 'styled-components/macro';
import Card from '../../components/card/Card';

export const StyledCtaBar = styled('div')(
  (props) => ({
    background: '#334A52',
    padding: '1rem',
    border: '1px solid',
    borderRadius: '1rem',
    marginBottom: '2rem',
  })
);

export const StyledC4Card = styled(Card)(
  (props) => ({
    minHeight: 350,
  })
);