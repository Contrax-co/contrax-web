import styled from 'styled-components/macro';

import * as colors from '@colors';

export const Placeholder = styled.div({
  backgroundColor: colors.cloud2,
  borderRadius: '50%',
  height: '3.2rem',
  maxHeight: '100%',
  maxWidth: '100%',
  width: '3.2rem',
});

export const Wrapper = styled.div({
  display: 'inline-flex',
  maxHeight: '100%',
  maxWidth: '100%',

  svg: {
    height: '100%',
    width: '100%',
  },
});
