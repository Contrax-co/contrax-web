import styled from 'styled-components/macro';
import Card from '../card/Card';
import { FormInput } from '../form/Form';
import Button from '../button/Button'
import { Desc } from '../text/Text';

export const StyledSettingCard = styled(Card)((props) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 1,
  flexDirection: 'column'
}));

export const StyledSmallInput = styled(FormInput)((props) => ({
  width: 'calc(100% - 16px)',
  float: 'left',
  marginTop: '6px',
}));

export const StyledSmallBtn = styled(Button)((props) => ({
  width: '100%',
}));

export const StyledInputDesc = styled(Desc)((props) => ({
  marginTop: 13,
  marginLeft: 66,
}));

