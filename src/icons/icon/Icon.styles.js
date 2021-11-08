import styled from 'styled-components/macro';

export const IconWrapper = styled.div((props) => ({
  display: 'inline-flex',
  height: `${props.size / 10}rem`,
  width: `${props.size / 10}rem`,

  svg: {
    height: '100%',
    width: '100%',
  },
}));
