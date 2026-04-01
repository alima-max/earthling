/**
 * Earthling Design System — Spacing Tokens
 * Source of truth: Figma > Spacing variable collection
 * Base unit: 4px
 */

export const spacing = {
  0:  '0px',
  1:  '2px',
  2:  '4px',
  3:  '8px',
  4:  '12px',
  5:  '16px',
  6:  '20px',
  7:  '24px',
  8:  '32px',
  9:  '40px',
  10: '48px',
  11: '56px',
  12: '64px',
  14: '80px',
  16: '96px',
};

// ─── Semantic aliases ─────────────────────────────────────────────────────────
export const space = {
  none:   spacing[0],
  xxs:    spacing[1],   // 2px
  xs:     spacing[2],   // 4px
  sm:     spacing[3],   // 8px
  md:     spacing[5],   // 16px
  lg:     spacing[7],   // 24px
  xl:     spacing[8],   // 32px
  '2xl':  spacing[9],   // 40px
  '3xl':  spacing[10],  // 48px
  '4xl':  spacing[12],  // 64px
  '5xl':  spacing[14],  // 80px
  '6xl':  spacing[16],  // 96px
};

export default spacing;
