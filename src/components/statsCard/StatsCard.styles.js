import styled from 'styled-components/macro';
import { Desc } from '../text/Text';

export const StyledDesc = styled(Desc)((props) => ({
  display: 'inline-flex',
  '+span': {
    margin: props.iconAlignRight ? '0 0.4rem 0 0' : '0 0 0 0.4rem',
  },
}));
