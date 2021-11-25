// need to update. this file its a sample file
import { weight, family } from './fonts';

const baseStyles = (fontSize, fontWeight, lineHeight) => ({
  fontSize,
  fontWeight,
  lineHeight,
});

export const PageTitle = {
  ...baseStyles('2.5rem', weight.semibold, '3rem'),
  fontFamily: family.Martel,
}

export const PageSubTitle = {
  ...baseStyles('1rem', weight.light, '1.5rem'),
  fontFamily: family.SourceSerifPro
}

export const Title = {
  ...baseStyles('1rem', weight.light, '1.5rem'),
  fontFamily: family.Martel,
}

export const Desc = {
  ...baseStyles('1rem', weight.light, '1.5rem'),
  fontFamily: family.SourceSerifPro
}

export const BtnText = {
  ...baseStyles('1rem', weight.regular, '1.5rem'),
  fontFamily: family.SourceSerifPro
}
