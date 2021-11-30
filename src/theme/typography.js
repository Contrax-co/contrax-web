// need to update. this file its a sample file
import { weight, family } from './fonts';

const baseStyles = (fontSize, fontWeight, lineHeight) => ({
  fontSize,
  fontWeight,
  lineHeight,
});

export const PageTitle = {
  ...baseStyles('4rem', weight.semibold, '4.5rem'),
  fontFamily: family.Lexend,
}

export const PageSubTitle = {
  ...baseStyles('2.5rem', weight.regular, '3rem'),
  fontFamily: family.Lexend
}

export const Title = {
  ...baseStyles('1.5rem', weight.light, '2rem'),
  fontFamily: family.Lexend,
}

export const Desc = {
  ...baseStyles('1rem', weight.light, '1.5rem'),
  fontFamily: family.Poppins
}

export const BtnText = {
  ...baseStyles('1rem', weight.regular, '1.5rem'),
  fontFamily: family.Poppins
}
