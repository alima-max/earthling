/**
 * Earthling Design System — Effect Tokens
 * Source of truth: Figma > Local Effect Styles
 */

export const borderRadius = {
  none: '0px',
  sm:   '4px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  '2xl':'24px',
  '3xl':'32px',
  full: '999px',
};

export const shadow = {
  soft: '0px 0px 18px rgba(0, 0, 0, 0.20)',
  card: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

export const blur = {
  translucent: 'blur(32px)',
  chatChip:    'blur(8px)',
};

export const effects = { borderRadius, shadow, blur };
export default effects;
