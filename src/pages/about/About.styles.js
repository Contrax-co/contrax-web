import styled from 'styled-components/macro';
import { Card } from '../../components/card/Card';
import { Image } from '../../components/image/Image';
import { H1 } from '../../components/text/Text';

export const StyledCtaBar = styled('div')((props) => ({
  background: '#334A52',
  padding: '1rem',
  border: '1px solid',
  borderRadius: '1rem',
  marginBottom: '2rem',
}));

export const StyledCard = styled(Card).attrs((props) => {
  return {
    // className: 'col-lg-4'
  };
})`
  border: none;
  @media (min-width: 64em) {
    min-height: 350px;
    width: calc(25% - 36px);
  }
  @media (max-width: 63.94em) {
    width: calc(100% - 1rem);
    margin: auto;
    margin-top: 2rem;
  }
`;

export const StyledH1 = styled(H1).attrs((props) => {
  return {};
})`
  @media (max-width: 63.94em) {
    font-size: 3rem;
    line-height: 4rem;
  }
`;
export const StyledImage = styled(Image).attrs((props) => {
  return {};
})`
  border-radius: 1rem;
  width: 100%;
`;
