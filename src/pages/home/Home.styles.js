import styled from 'styled-components/macro';
import {Card} from '../../components/card/Card';

export const StyledCtaBar = styled('div')(
  (props) => ({
    background: '#334A52',
    padding: '1rem',
    border: '1px solid',
    borderRadius: '1rem',
    marginBottom: '2rem',
  })
);

// flex-direction: row;
//     justify-content: space-between;

export const StyledCard = styled(Card)`
  min-height: 350px;
  width: calc(33.33% - 36px)
`

export const StyledFeatureCard = styled(Card)`
  min-height: 287px;
  width: calc(25% - 39px)
`
