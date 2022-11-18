import styled from 'styled-components/macro';
import * as typo from '../../theme/typography';
import * as colors from '../../theme/colors';
import { Link } from '../text/Text';

export const StyledNavLink = styled(Link)((props) => ({
  ...typo.BtnText,
  fontWeight: 600,
  color: `${colors.secondaryMedium} !important`,
}));
