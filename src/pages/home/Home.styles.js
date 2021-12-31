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

export const StyledCard = styled(Card).attrs(props => {
  return {
    // className: 'col-lg-4'
  }
})`
  @media (min-width: 64em){
    min-height: 350px;
    width: calc(33.33% - 36px)
  }
  @media (max-width: 63.94em){
    width: calc(100% - 1rem);
    margin: auto;
    margin-top: 2rem;
  }
`

export const StyledFeatureCard = styled(Card)`
  @media (min-width: 64em){
    // min-height: 287px;
    width: calc(33.33% - 36px)
  }
  @media (max-width: 63.94em){
    width: calc(100% - 1rem);
    margin: auto;
    margin-top: 2rem;
  }
`
