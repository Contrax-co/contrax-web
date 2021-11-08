// need to update. this file its a sample file
import { weight } from '@fonts';

const baseStyles = (fontSize, fontWeight, lineHeight) => ({
  fontSize,
  fontWeight,
  lineHeight,
});

export const H4_M = {
  ...baseStyles('1.4rem', weight.medium, '2.4rem'),
  letterSpacing: '-0.02em',
  lineHeight: '1.7rem',
};

export const H3_M = {
  ...baseStyles('2rem', weight.medium, '2.4rem'),
  letterSpacing: '-0.02em',
};

export const P_R = {
  ...baseStyles('1.4rem', weight.regular, '1.7rem'),
};

export const P_R_Bloc = {
  ...baseStyles('1.4rem', weight.regular, '1.9rem'),
};

export const P_M = {
  ...baseStyles('1.4rem', weight.medium, '1.7rem'),
};

export const P_B = {
  ...baseStyles('1.4rem', weight.semibold, '1.7rem'),
};

export const P_S = {
  ...baseStyles('1.2rem', weight.regular, '1.5rem'),
};

export const P_S_Bloc = {
  ...baseStyles('1.2rem', weight.regular, '1.7rem'),
};

export const P_S_M = {
  ...baseStyles('1.2rem', weight.medium, '1.5rem'),
};

export const P_S_B = {
  ...baseStyles('1.2rem', weight.semibold, '1.5rem'),
};

export const P_S2 = {
  ...baseStyles('1rem', weight.regular, '1.2rem'),
};

export const P_S2_Bloc = {
  ...baseStyles('1rem', weight.regular, '1.4rem'),
};

export const P_S2_M = {
  ...baseStyles('1rem', weight.medium, '1.2rem'),
};

export const P_S2_B = {
  ...baseStyles('1rem', weight.semibold, '1.2rem'),
};

export const P_S3 = {
  ...baseStyles('0.8rem', weight.regular, '1rem'),
};

export const P_S3_M = {
  ...baseStyles('0.8rem', weight.medium, '1rem'),
};

export const P_S3_B = {
  ...baseStyles('0.8rem', weight.semibold, '1rem'),
};

export const Label = {
  ...baseStyles('1rem', weight.regular, '1.2rem'),
  textTransform: 'uppercase',
};

export const Label_B = {
  ...baseStyles('1rem', weight.semibold, '1.2rem'),
  textTransform: 'uppercase',
};
