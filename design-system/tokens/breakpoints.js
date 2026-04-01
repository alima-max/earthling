/**
 * Earthling Design System — Breakpoint Tokens
 * Matches Figma breakpoints: Mobile (375), Tablet (800), Desktop (1440)
 */

export const breakpoints = {
  mobile:  375,
  tablet:  800,
  desktop: 1440,
};

// CSS min-width media queries
export const mediaQuery = {
  tablet:  `@media (min-width: ${breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
};

export default breakpoints;
