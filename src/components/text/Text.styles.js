import styled from 'styled-components/macro';

import * as colors from '@colors';
import * as typo from '@typography';

const noForwardProps = [];

export const StyledPageTitle = styled('h3', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
    ...(props.variant === 'light' && { color: colors.titleLight }),
    ...(props.variant === 'dark' && { color: colors.titleDark }),
    ...(typo.PageTitle),
  })
);

export const StyledPageSubTitle = styled('h4', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(props.variant === 'light' && { color: colors.subTitleLight }),
  ...(props.variant === 'dark' && { color: colors.subTitleDark }),
  ...(typo.PageSubTitle),
})
);

export const StyledTitle = styled('h4', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(props.variant === 'light' && { color: colors.titleLight }),
  ...(props.variant === 'dark' && { color: colors.titleDark }),
  ...(typo.Title),
})
);


export const StyledDesc = styled('p', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(props.variant === 'light' && { color: colors.descLight }),
  ...(props.variant === 'dark' && { color: colors.descDark }),
  ...(typo.Desc),
})
);

export const StyledLink = styled('a', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(props.variant === 'light' && { color: colors.titleLight }),
  ...(props.variant === 'dark' && { color: colors.titleDark }),
  ...(typo.Desc),
})
);

