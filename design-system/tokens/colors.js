/**
 * Earthling Design System — Color Tokens
 * Source of truth: Figma > Color variable collection
 */

// ─── Primitives ───────────────────────────────────────────────────────────────
export const colorPrimitives = {
  lime:          '#E4FF97',
  neonGreen:     '#67FF7F',
  darkGreen:     '#384318',
  sage:          '#78834E',
  brown:         '#6E6037',
  base:          '#F3FFE3',
  shade:         '#E9F4D9',
  black:         '#202020',
  darkGray:      '#313230',
  violetShade01: '#89889D',
  translucent:   'rgba(243, 255, 227, 0.65)',
};

// ─── Semantic — Theme 01 (Dark Green base) ────────────────────────────────────
export const theme01 = {
  bg: {
    primary:     colorPrimitives.darkGreen,   // #384318
    secondary:   colorPrimitives.base,        // #F3FFE3
    surface:     colorPrimitives.shade,       // #E9F4D9
    inverse:     colorPrimitives.black,       // #202020
    translucent: colorPrimitives.translucent,
  },
  text: {
    primary:  colorPrimitives.base,           // #F3FFE3
    inverse:  colorPrimitives.black,          // #202020
    muted:    colorPrimitives.shade,          // #E9F4D9
  },
  accent: {
    lime:   colorPrimitives.lime,             // #E4FF97
    neon:   colorPrimitives.neonGreen,        // #67FF7F
    sage:   colorPrimitives.sage,             // #78834E
  },
  border: {
    default: colorPrimitives.shade,           // #E9F4D9
    strong:  colorPrimitives.black,           // #202020
  },
  icon: {
    primary: colorPrimitives.base,
    inverse: colorPrimitives.black,
    accent:  colorPrimitives.lime,
  },
};

// ─── Semantic — Theme 02 (Brown base) ────────────────────────────────────────
export const theme02 = {
  bg: {
    primary:     colorPrimitives.brown,       // #6E6037
    secondary:   colorPrimitives.base,
    surface:     colorPrimitives.shade,
    inverse:     colorPrimitives.black,
    translucent: colorPrimitives.translucent,
  },
  text: {
    primary:  colorPrimitives.base,
    inverse:  colorPrimitives.black,
    muted:    colorPrimitives.shade,
  },
  accent: {
    lime:   colorPrimitives.lime,
    neon:   colorPrimitives.neonGreen,
    sage:   colorPrimitives.sage,
  },
  border: {
    default: colorPrimitives.shade,
    strong:  colorPrimitives.black,
  },
  icon: {
    primary: colorPrimitives.base,
    inverse: colorPrimitives.black,
    accent:  colorPrimitives.lime,
  },
};

export const colors = { primitives: colorPrimitives, theme01, theme02 };
export default colors;
