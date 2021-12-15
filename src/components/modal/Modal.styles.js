import styled from 'styled-components/macro';
import Button from '../button/Button';


export const StyledModalContent = styled.div.attrs(props => {
  return {
    className: 'modal-content'
  }
})`
  padding: 2rem 1.5rem;
`

export const StyledModalDialog = styled.div.attrs(props => {
  return {
    className: 'modal-dialog modal-dialog-centered'
  }
})`
  @media (min-width: 576px) {
    max-width: 654px;
  }
`

export const StyledCrossBtn = styled(Button).attrs(props => {
  return {
    className: 'btn-close'
  }
})`
  position: absolute;
  right: 2rem;
  top: 0.5rem;
  border: none;
  background: none;
  &:hover {
    background-color: transparent;
  }
  &:focus {
    box-shadow: none;
  }
`


