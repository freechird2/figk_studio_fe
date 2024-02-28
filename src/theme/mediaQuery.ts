export interface breakpointsTypes {
  mobile: number;
  tablet: number;
  maxTablet: number;
}

export const breakpoints: breakpointsTypes = {
  mobile: 480,
  tablet: 768,
  maxTablet: 1024,
};

//미디어쿼리
export const mediaQuery = (key: keyof typeof breakpoints) => {
  return `@media screen and (max-width: ${breakpoints[key]}px)`;
};
