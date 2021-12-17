import styled from 'styled-components/macro';
import { Container } from '../blocks/Blocks';

export const StyledBox = styled(Container)(
  (props) => ({
    borderRadius: '1.5rem',
    padding: '2.3rem 3rem',
  })
);