import styled from 'styled-components/macro';
import Card from '../card/Card';

export const StyledSettingCard = styled(Card)((props) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 1,
  flexDirection: 'column'
}));
