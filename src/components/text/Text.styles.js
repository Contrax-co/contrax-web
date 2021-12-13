import styled from 'styled-components/macro';

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';

const noForwardProps = [];

export const StyledPageTitle = styled('h3', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(typo.PageTitle),
    ...(props.variant === 'light' && { color: colors.titleLight }),
    ...(props.variant === 'dark' && { color: colors.titleDark }),
  })
);

export const StyledPageSubTitle = styled('h4', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(typo.PageSubTitle),
  ...(props.variant === 'light' && { color: colors.subTitleLight }),
  ...(props.variant === 'dark' && { color: colors.subTitleDark }),
})
);

export const StyledTitle = styled('h4', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(typo.Title),
  ...(props.variant === 'light' && { color: colors.titleLight }),
  ...(props.variant === 'dark' && { color: colors.titleDark }),
})
);


export const StyledDesc = styled('p', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(typo.Desc),
  ...(props.variant === 'light' && { color: colors.descLight }),
  ...(props.variant === 'dark' && { color: colors.descDark }),
  ...(props.variant === 'danger' && { color: colors.redText }),
  ...(props.variant === 'success' && { color: colors.greenText }),
  ...(props.color && { color: props.color }),
})
);

export const StyledDescSpan = styled('span', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(typo.Desc),
  ...(props.variant === 'light' && { color: colors.descLight }),
  ...(props.variant === 'dark' && { color: colors.descDark }),
  ...(props.variant === 'danger' && { color: colors.redText }),
  ...(props.variant === 'success' && { color: colors.greenText }),
})
);

export const StyledLink = styled('a', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(typo.Desc),
  ...(props.variant === 'light' && { color: colors.titleLight }),
  ...(props.variant === 'dark' && { color: colors.titleDark }),
  ...(props.variant === 'danger' && { color: colors.redText }),
  ...(props.variant === 'success' && { color: colors.greenText }),
})
);

export const StyledText = styled('p', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(typo.Desc),
  ...(props.variant === 'light' && { color: colors.descLight }),
  ...(props.variant === 'dark' && { color: colors.descDark }),
  ...(props.variant === 'danger' && { color: colors.redText }),
  ...(props.variant === 'success' && { color: colors.greenText }),
  ...(props.color && { color: props.color }),
  ...(props.size && { fontSize: props.size }),
})
);