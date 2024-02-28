import { DefaultTheme } from "styled-components";

export const mq = {
  mobile: "480px",
  tablet: "768px",
  maxTablet: "1024px",
};

type PaletteType = {
  black10: string;
  black20: string;

  gray10: string;
  gray20: string;
  gray30: string;
  gray40: string;
  gray50: string;
  gray60: string;
  gray70: string;
  gray80: string;
  gray90: string;

  light10: string;
  light20: string;
  light30: string;
  light40: string;
  light50: string;

  point1: string;
  point2: string;
  point3: string;

  error: string;
  disabled: string;
  positive: string;
  placeholder: string;
  date: string;
  complete: string;
  link: string;
  blue_gray: string;
};

type TextColorType = {
  /**palette.gray30 */
  textColor10: string;
  /**palette.gray40 */
  textColor20: string;
  /**palette.gray50 */
  textColor30: string;
  /**palette.gray60 */
  textColor40: string;
  /**palette.gray70 */
  textColor50: string;
  /**palette.gray80 */
  textColor60: string;
  /**palette.gray90 */
  textColor70: string;
  /**palette.black10 */
  textColor80: string;
  /**palette.black20 */
  textColor90: string;
};

type LineColorType = {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  inputLine1: string;
  inputFocus: string;
};

type BgColorType = {
  bg1: string;
  bg2: string;
  point1_bg: string;
  blue_gray_bg: string;
};

type DimType = {
  dim1: string;
  dim2: string;
  dim3: string;
  dim4: string;
  dim5: string;
  dim6: string;
};

type LayoutType = {
  headerHeight: string;
  mobileHeaderHeight: string;
  footerheight: string;
  inputHeight1: string;
  filterMobileHeight: string;
  inputHeight2: string;
  mobileInputHeight1: string;
  defaultPadding: string;
  mobilePadding: string;
  containerWidth: string;
};

type BoxShadowType = {
  shadow1: string;
  shadow2: string;
  shadow3: string;
};

const palette: PaletteType = {
  black10: "#222326",
  black20: "#0f0f0f",

  gray10: "#DDDEE1",
  gray20: "#D4D6D9",
  gray30: "#CED0D3",
  gray40: "#B9BCC1",
  gray50: "#9EA2A9",
  gray60: "#838990",
  gray70: "#6A6F77",
  gray80: "#52565C",
  gray90: "#393C40",

  light10: "#FAFAFA",
  light20: "#F5F5F5",
  light30: "#F2F2F2",
  light40: "#EFF0F1",
  light50: "#EDEDED",

  point1: "#FF4D00",
  point2: "#FF6522",
  point3: "#ff824d",

  error: "#FF3C3C",
  disabled: "#DDDEE1",
  positive: "#6ac340",
  placeholder: "#CED0D3",
  date: "#B9BCC1",
  complete: "#708095",
  link: "#488CE6",
  blue_gray: "#708095",
};

declare module "styled-components" {
  export interface DefaultTheme {
    palette: PaletteType;
    textColor: TextColorType;
    lineColor: LineColorType;
    bgColor: BgColorType;
    layout: LayoutType;
    dim: DimType;
    boxShadow: BoxShadowType;
  }
}

const theme: DefaultTheme = {
  palette: {
    black10: palette.black10,
    black20: palette.black20,

    gray10: palette.gray10,
    gray20: palette.gray20,
    gray30: palette.gray30,
    gray40: palette.gray40,
    gray50: palette.gray50,
    gray60: palette.gray60,
    gray70: palette.gray70,
    gray80: palette.gray80,
    gray90: palette.gray90,

    light10: palette.light10,
    light20: palette.light20,
    light30: palette.light30,
    light40: palette.light40,
    light50: palette.light50,

    point1: palette.point1,
    point2: palette.point2,
    point3: palette.point3,

    error: palette.error,
    disabled: palette.disabled,
    positive: palette.positive,
    placeholder: palette.placeholder,
    date: palette.placeholder,
    complete: palette.complete,
    link: palette.link,
    blue_gray: palette.blue_gray,
  },
  textColor: {
    textColor10: palette.gray30,
    textColor20: palette.gray40,
    textColor30: palette.gray50,
    textColor40: palette.gray60,
    textColor50: palette.gray70,
    textColor60: palette.gray80,
    textColor70: palette.gray90,
    textColor80: palette.black10,
    textColor90: palette.black20,
  },

  lineColor: {
    line1: palette.light20,
    line2: palette.light40,
    line3: palette.gray10,
    line4: palette.gray80,
    inputLine1: "#E7E8EA",
    inputFocus: palette.gray80,
  },

  bgColor: {
    bg1: palette.light10,
    bg2: palette.light20,
    point1_bg: "#FFEDE6",
    blue_gray_bg: "#F7F9FC",
  },

  layout: {
    headerHeight: "56px",
    mobileHeaderHeight: "50px",
    footerheight: "60px",
    inputHeight1: "32px",
    filterMobileHeight: "48px",
    inputHeight2: "42px",
    mobileInputHeight1: "48px",
    defaultPadding: "24px",
    mobilePadding: "16px",
    containerWidth: "900px",
  },
  dim: {
    dim1: "rgba(0,0,0,0.1)",
    dim2: "rgba(0,0,0,0.2)",
    dim3: "rgba(0,0,0,0.3)",
    dim4: "rgba(0,0,0,0.4)",
    dim5: "rgba(0,0,0,0.5)",
    dim6: "rgba(0,0,0,0.6)",
  },
  boxShadow: {
    shadow1: "0 2px 4px 0 rgba(0,0,0,0.25)", //control
    shadow2: "0 4px 8px 0 rgba(82,86,92,0.05)", //Card shadow
    shadow3: "0 4px 12px 0 rgba(82,86,92,0.02)", //Card shadow big
  },
};

export default theme;
