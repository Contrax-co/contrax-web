import styled from 'styled-components/macro';

import * as colors from '@colors';
import * as typo from '@typography';

export const StyledCtaBar = styled('div')(
  (props) => ({
    background: '#000',
    padding: '1rem',
    border: '1px solid',
    borderRadius: '1rem',
    marginBottom: '2rem',
  })
);