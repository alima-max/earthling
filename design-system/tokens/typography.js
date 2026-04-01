/**
 * Earthling Design System — Typography Tokens
 * Source of truth: Figma > Local Text Styles
 * Fonts: Space Grotesk (sans), Space Mono (mono)
 */

export const fontFamily = {
  sans: "'Space Grotesk', sans-serif",
  mono: "'Space Mono', monospace",
};

export const fontWeight = {
  regular: 400,
  medium:  500,
  bold:    700,
};

// ─── Font size scale ──────────────────────────────────────────────────────────
// Named by Figma step (50–600), values per breakpoint
export const fontSize = {
  50:  { desktop: '14px', tablet: '14px', mobile: '14px' },
  100: { desktop: '16px', tablet: '16px', mobile: '16px' },
  200: { desktop: '18px', tablet: '18px', mobile: '18px' },
  300: { desktop: '22px', tablet: '22px', mobile: '22px' },
  400: { desktop: '32px', tablet: '28px', mobile: '26px' },
  500: { desktop: '52px', tablet: '44px', mobile: '36px' },
  600: { desktop: '84px', tablet: '64px', mobile: '52px' },
  'mono-450': { desktop: '48px', mobile: '36px' },
  'mono-600': { desktop: '56px' },
};

// ─── Line height ──────────────────────────────────────────────────────────────
export const lineHeight = {
  tight:   '115%',
  normal:  '130%',
  relaxed: '140%',
  loose:   '145%',
  mono:    '100%',
};

// ─── Letter spacing ───────────────────────────────────────────────────────────
export const letterSpacing = {
  none:   '0',
  xs:     '0.5%',
  sm:     '1.5%',
  md:     '2%',
  lg:     '3%',
  xl:     '4%',
};

// ─── Composed text styles ─────────────────────────────────────────────────────
export const textStyles = {
  // Desktop
  'desktop/sans/600': { fontFamily: fontFamily.sans, fontSize: '84px',  lineHeight: '120%', letterSpacing: '0' },
  'desktop/sans/500': { fontFamily: fontFamily.sans, fontSize: '52px',  lineHeight: '130%', letterSpacing: '0' },
  'desktop/sans/400': { fontFamily: fontFamily.sans, fontSize: '32px',  lineHeight: '130%', letterSpacing: '0' },
  'desktop/sans/300': { fontFamily: fontFamily.sans, fontSize: '22px',  lineHeight: '140%', letterSpacing: '1.5%' },
  'desktop/sans/200': { fontFamily: fontFamily.sans, fontSize: '18px',  lineHeight: '140%', letterSpacing: '2%' },
  'desktop/sans/100': { fontFamily: fontFamily.sans, fontSize: '16px',  lineHeight: '140%', letterSpacing: '4%' },
  'desktop/sans/50':  { fontFamily: fontFamily.sans, fontSize: '14px',  lineHeight: '135%', letterSpacing: '4%' },
  'desktop/mono/600': { fontFamily: fontFamily.mono, fontSize: '56px',  lineHeight: '100%', letterSpacing: '0' },
  'desktop/mono/450': { fontFamily: fontFamily.mono, fontSize: '48px',  lineHeight: '100%', letterSpacing: '0' },
  // Tablet
  'tablet/sans/600':  { fontFamily: fontFamily.sans, fontSize: '64px',  lineHeight: '115%', letterSpacing: '0' },
  'tablet/sans/500':  { fontFamily: fontFamily.sans, fontSize: '44px',  lineHeight: '130%', letterSpacing: '0' },
  'tablet/sans/400':  { fontFamily: fontFamily.sans, fontSize: '28px',  lineHeight: '130%', letterSpacing: '0' },
  'tablet/sans/300':  { fontFamily: fontFamily.sans, fontSize: '22px',  lineHeight: '140%', letterSpacing: '1.5%' },
  'tablet/sans/200':  { fontFamily: fontFamily.sans, fontSize: '18px',  lineHeight: '140%', letterSpacing: '2%' },
  'tablet/sans/100':  { fontFamily: fontFamily.sans, fontSize: '16px',  lineHeight: '140%', letterSpacing: '4%' },
  'tablet/sans/50':   { fontFamily: fontFamily.sans, fontSize: '14px',  lineHeight: '135%', letterSpacing: '4%' },
  // Mobile
  'mobile/sans/600':  { fontFamily: fontFamily.sans, fontSize: '52px',  lineHeight: '115%', letterSpacing: '0' },
  'mobile/sans/500':  { fontFamily: fontFamily.sans, fontSize: '36px',  lineHeight: '115%', letterSpacing: '0' },
  'mobile/sans/400':  { fontFamily: fontFamily.sans, fontSize: '26px',  lineHeight: '130%', letterSpacing: '0.5%' },
  'mobile/sans/300':  { fontFamily: fontFamily.sans, fontSize: '22px',  lineHeight: '125%', letterSpacing: '0.5%' },
  'mobile/sans/200':  { fontFamily: fontFamily.sans, fontSize: '18px',  lineHeight: '129%', letterSpacing: '0' },
  'mobile/sans/100':  { fontFamily: fontFamily.sans, fontSize: '16px',  lineHeight: '145%', letterSpacing: '2.5%' },
  'mobile/sans/50':   { fontFamily: fontFamily.sans, fontSize: '14px',  lineHeight: '145%', letterSpacing: '3%' },
  'mobile/mono/450':  { fontFamily: fontFamily.mono, fontSize: '36px',  lineHeight: '100%', letterSpacing: '0' },
};

export const typography = { fontFamily, fontWeight, fontSize, lineHeight, letterSpacing, textStyles };
export default typography;
